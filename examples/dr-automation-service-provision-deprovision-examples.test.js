/**
 * Jest Test: Resource Controller + Global Catalog Example
 */

const { IamAuthenticator } = require('ibm-cloud-sdk-core');

// FIXED IMPORTS — These paths correctly return constructors
// eslint-disable-next-line import/no-extraneous-dependencies
const ResourceControllerV2 = require('@ibm-cloud/platform-services/resource-controller/v2');
// eslint-disable-next-line import/no-extraneous-dependencies
const GlobalCatalogV1 = require('@ibm-cloud/platform-services/global-catalog/v1');

jest.setTimeout(200000); // Allow long IBM Cloud API calls

describe('DR Automation Service Provision & Deprovision Examples', () => {
  let resourceControllerService;

  // Configurable values
  const resourceGroup = '9d445dfd58484a489220751d0077f906';
  const serviceName = 'power-dr-automation';
  const planName = 'power-virtual-server-dr-automation';
  const resourceInstanceName = 'mympsdktest-temp2';
  const targetRegion = 'global';
  const iamAPIKey = 'api-key'; // Replace with valid key

  // ----------------------------------------------
  // INITIALIZE SERVICE CLIENT
  // ----------------------------------------------
  test('Initialize ResourceControllerV2 client', async () => {
    resourceControllerService = new ResourceControllerV2({
      authenticator: new IamAuthenticator({ apikey: iamAPIKey }),
    });

    expect(resourceControllerService).not.toBeNull();
  });

  // ----------------------------------------------
  // CREATE INSTANCE WITH DYNAMIC PLAN ID
  // ----------------------------------------------
  test('CreateResourceInstance with dynamic plan ID', async () => {
    console.log('\n--- Fetching Plan ID from Global Catalog ---');

    const catalog = new GlobalCatalogV1({
      authenticator: new IamAuthenticator({ apikey: iamAPIKey }),
    });

    // Step 1 — Get service entry
    const searchResult = await catalog.listCatalogEntries({
      q: `name:${serviceName}`,
      account: 'global',
      complete: true,
    });

    // eslint-disable-next-line
    expect(
      searchResult &&
        searchResult.result &&
        searchResult.result.resources &&
        searchResult.result.resources.length
    ).toBeGreaterThan(0);

    const serviceEntryID = searchResult.result.resources[0].id;

    // Step 2 — Get plan
    const childObjects = await catalog.getChildObjects({
      id: serviceEntryID,
      kind: '*',
      complete: true,
    });

    let resourcePlanID = '';

    /* eslint-disable-next-line no-restricted-syntax */
    for (const child of childObjects.result.resources) {
      if (child.name === planName) {
        resourcePlanID = child.id;
        break;
      }
    }

    expect(resourcePlanID).not.toBe('');

    console.log('Plan ID found:', resourcePlanID);

    // Step 3 — Create the instance
    console.log('\n--- CreateResourceInstance() ---');

    const createResponse = await resourceControllerService.createResourceInstance({
      name: resourceInstanceName,
      target: targetRegion,
      resourceGroup,
      resourcePlanId: resourcePlanID,
    });

    expect(createResponse.status).toBe(201);

    const newInstance = createResponse.result;
    console.log(JSON.stringify(newInstance, null, 2));

    const instanceGUID = newInstance.guid;

    // Step 4 — Get Instance Details
    const instanceDetailsResponse = await resourceControllerService.getResourceInstance({
      id: instanceGUID,
    });

    expect(instanceDetailsResponse.status).toBe(200);

    console.log('\n--- GetResourceInstance() Details ---');
    console.log(JSON.stringify(instanceDetailsResponse.result, null, 2));
  });

  // ----------------------------------------------
  // DELETE INSTANCE EXAMPLE
  // ----------------------------------------------
  test('DeleteResourceInstance example', async () => {
    const instanceGUID =
      'crn:v1:bluemix:public:power-dr-automation:global:a/094f4214c75941f991da601b001df1fe:641795bd-80c7-406d-a6d9-04d3fbb5680b::';

    console.log('\n--- Deleting Resource Instance ---');

    const deleteResponse = await resourceControllerService.deleteResourceInstance({
      id: instanceGUID,
      recursive: false,
    });

    console.log('Delete status:', deleteResponse.status);

    expect(deleteResponse.status).toBe(202);

    await new Promise((resolve) => setTimeout(resolve, 20000)); // wait for deletion
  });
});
