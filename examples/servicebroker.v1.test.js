/**
 * @jest-environment node
 */
/**
 * (C) Copyright IBM Corp. 2025.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* eslint-disable no-console */

const ServicebrokerV1 = require('../dist/servicebroker/v1');
// eslint-disable-next-line node/no-unpublished-require
const authHelper = require('../test/resources/auth-helper.js');
// You can use the readExternalSources method to access additional configuration values
// const { readExternalSources } = require('ibm-cloud-sdk-core');

//
// This file provides an example of how to use the Servicebroker service.
//
// The following configuration properties are assumed to be defined:
// SERVICEBROKER_URL=<service base url>
// SERVICEBROKER_AUTH_TYPE=iam
// SERVICEBROKER_APIKEY=<IAM apikey>
// SERVICEBROKER_AUTH_URL=<IAM token service base URL - omit this if using the production environment>
//
// These configuration properties can be exported as environment variables, or stored
// in a configuration file and then:
// export IBM_CREDENTIALS_FILE=<name of configuration file>
//
const configFile = 'servicebroker_v1.env';

const describe = authHelper.prepareTests(configFile);

// Save original console.log
const originalLog = console.log;
const originalWarn = console.warn;

// Mocks for console.log and console.warn
const consoleLogMock = jest.spyOn(console, 'log');
const consoleWarnMock = jest.spyOn(console, 'warn');

describe('ServicebrokerV1', () => {
  // Service instance
  let servicebrokerService;

  // To access additional configuration values, uncomment this line and extract the values from config
  // const config = readExternalSources(ServicebrokerV1.DEFAULT_SERVICE_NAME);

  test('Initialize service', async () => {
    // begin-common

    servicebrokerService = ServicebrokerV1.newInstance();

    // end-common
  });

  test('serviceInstanceGetKeyV1 request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('serviceInstanceGetKeyV1() result:');
    // begin-serviceInstance.getKeyV1

    const params = {
      instanceId:
        'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::',
    };

    let res;
    try {
      res = await servicebrokerService.serviceInstanceGetKeyV1(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-serviceInstance.getKeyV1
  });

  test('serviceInstanceValidateKey request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('serviceInstanceValidateKey() result:');
    // begin-serviceInstance.validateKey

    const params = {
      instanceId:
        'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::',
      apiKey: 'api-key-here',
    };

    let res;
    try {
      res = await servicebrokerService.serviceInstanceValidateKey(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-serviceInstance.validateKey
  });

  test('serviceInstanceUpdateApiKey request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('serviceInstanceUpdateApiKey() result:');
    // begin-serviceInstance_update_api_key

    const params = {
      instanceId:
        'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::',
      apiKey: 'api-key-here',
    };

    let res;
    try {
      res = await servicebrokerService.serviceInstanceUpdateApiKey(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-serviceInstance_update_api_key
  });

  test('drGrsLocationPairsDetails request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('drGrsLocationPairsDetails() result:');
    // begin-dr-grs-location-pairs.details

    const params = {
      instanceId:
        'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::',
    };

    let res;
    try {
      res = await servicebrokerService.drGrsLocationPairsDetails(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-dr-grs-location-pairs.details
  });

  test('serviceInstanceGetdrlocations request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('serviceInstanceGetdrlocations() result:');
    // begin-serviceInstance.getdrlocations

    const params = {
      instanceId:
        'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::',
    };

    let res;
    try {
      res = await servicebrokerService.serviceInstanceGetdrlocations(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-serviceInstance.getdrlocations
  });

  test('drManagedVmsDetails request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('drManagedVmsDetails() result:');
    // begin-dr-managed-vms.details

    const params = {
      instanceId:
        'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::',
    };

    let res;
    try {
      res = await servicebrokerService.drManagedVmsDetails(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-dr-managed-vms.details
  });

  test('drSummaryDetails request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('drSummaryDetails() result:');
    // begin-dr-summary.details

    const params = {
      instanceId:
        'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::',
    };

    let res;
    try {
      res = await servicebrokerService.drSummaryDetails(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-dr-summary.details
  });

  test('validateClusterType request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('validateClusterType() result:');
    // begin-validate.ClusterType

    const params = {
      instanceId:
        'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::',
      orchestratorClusterType: 'on-premises',
    };

    let res;
    try {
      res = await servicebrokerService.validateClusterType(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-validate.ClusterType
  });

  test('machinetypesDetails request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('machinetypesDetails() result:');
    // begin-machinetypes.details

    const params = {
      instanceId:
        'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::',
      primaryWorkspaceName: 'Test-workspace-wdc06',
      standbyWorkspaceName: 'Test-workspace-wdc07',
    };

    let res;
    try {
      res = await servicebrokerService.machinetypesDetails(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-machinetypes.details
  });

  test('schematicWorkspaceGetoperation request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('schematicWorkspaceGetoperation() result:');
    // begin-schematic-workspace.getoperation

    const params = {
      instanceId:
        'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::',
    };

    let res;
    try {
      res = await servicebrokerService.schematicWorkspaceGetoperation(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-schematic-workspace.getoperation
  });

  test('validatePowerVsWorkspace request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('validatePowerVsWorkspace() result:');
    // begin-validate.powerVsWorkspace

    const params = {
      instanceId:
        'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::',
      workspaceId: '75cbf05b-78f6-406e-afe7-a904f646d798',
      crn: 'crn:v1:bluemix:public:power-iaas:dal10:a/094f4214c75941f991da601b001df1fe:75cbf05b-78f6-406e-afe7-a904f646d798::',
      locationUrl: 'https://us-south.power-iaas.cloud.ibm.com',
    };

    let res;
    try {
      res = await servicebrokerService.validatePowerVsWorkspace(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-validate.powerVsWorkspace
  });

  test('validateProxyip request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('validateProxyip() result:');
    // begin-validate.proxyip

    const params = {
      instanceId:
        'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::',
      proxyip: '10.30.40.5:3128',
      vpcLocation: 'us-south',
      vpcId: 'r006-2f3b3ab9-2149-49cc-83a1-30a5d93d59b2',
    };

    let res;
    try {
      res = await servicebrokerService.validateProxyip(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-validate.proxyip
  });

  test('workspaceVpcgetoperation request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('workspaceVpcgetoperation() result:');
    // begin-workspace.vpcgetoperation

    const params = {
      instanceId:
        'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::',
      locationId: 'testString',
      vpcId: 'r006-2f3b3ab9-2149-49cc-83a1-30a5d93d59b2',
      tgId: '925a7b81-a826-4d0a-8ef9-7496e9dc58bc',
    };

    let res;
    try {
      res = await servicebrokerService.workspaceVpcgetoperation(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-workspace.vpcgetoperation
  });

  test('workspaceGetoperation request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('workspaceGetoperation() result:');
    // begin-workspace.getoperation

    const params = {
      instanceId:
        'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::',
      schematicId: 'us-south.workspace.projects-service.3ae96a02',
      locationId: 'testString',
    };

    let res;
    try {
      res = await servicebrokerService.workspaceGetoperation(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-workspace.getoperation
  });

  test('serviceInstanceFetchManageDr request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('serviceInstanceFetchManageDr() result:');
    // begin-serviceInstance.fetch-manage-dr

    const params = {
      instanceId:
        'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::',
    };

    let res;
    try {
      res = await servicebrokerService.serviceInstanceFetchManageDr(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-serviceInstance.fetch-manage-dr
  });

  test('serviceInstanceManageDr request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('serviceInstanceManageDr() result:');
    // begin-serviceInstance.manage-dr

    // Request models needed by this operation.

    // Context
    const contextModel = {
      dr_location_id: 'dal10',
      dr_orchestrator_name: 'drautomationprimary',
      dr_orchestrator_password: 'teststring',
      dr_orchestrator_workspace_id: '75cbf05b-78f6-406e-afe7-a904f646d798',
      machine_type: 's922',
      orchestrator_cluster_type: 'off-premises',
      schematic_workspace_id: 'us-south.workspace.projects-service.3ae96a02',
      ssh_key_name: 'testStringy',
      standby_machine_type: 's922',
      standby_orchestrator_name: 'drautomationstandby',
      standby_orchestrator_workspace_id: '71027b79-0e31-44f6-a499-63eca1a66feb',
      tier: 'tier1',
    };

    const params = {
      instanceId:
        'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::',
      standByRedeploy: 'false',
      context: contextModel,
      planId: 'plan1234',
      serviceId: 'service1234',
    };

    let res;
    try {
      res = await servicebrokerService.serviceInstanceManageDr(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-serviceInstance.manage-dr
  });

  test('serviceInstanceDrdeployment request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('serviceInstanceDrdeployment() result:');
    // begin-serviceInstance.drdeployment

    const params = {
      instanceId:
        'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::',
    };

    let res;
    try {
      res = await servicebrokerService.serviceInstanceDrdeployment(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-serviceInstance.drdeployment
  });

  test('serviceInstanceLastoperation request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('serviceInstanceLastoperation() result:');
    // begin-serviceInstance.lastoperation

    const params = {
      instanceId:
        'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::',
    };

    let res;
    try {
      res = await servicebrokerService.serviceInstanceLastoperation(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-serviceInstance.lastoperation
  });

  test('serviceInstanceEventsGetquery request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('serviceInstanceEventsGetquery() result:');
    // begin-serviceInstance.events.getquery

    const params = {
      provisionId:
        'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::',
      time: '2025-06-19T23:59:59Z',
      fromTime: '2025-06-19T00:00:00Z',
      toTime: '2025-06-19T23:59:59Z',
    };

    let res;
    try {
      res = await servicebrokerService.serviceInstanceEventsGetquery(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-serviceInstance.events.getquery
  });

  test('serviceInstanceEventsGet request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('serviceInstanceEventsGet() result:');
    // begin-serviceInstance.events.get

    const params = {
      provisionId:
        'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::',
      eventId: '00116b2a-9326-4024-839e-fb5364b76898',
    };

    let res;
    try {
      res = await servicebrokerService.serviceInstanceEventsGet(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-serviceInstance.events.get
  });
});
