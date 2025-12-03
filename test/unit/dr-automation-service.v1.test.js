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

// need to import the whole package to mock getAuthenticatorFromEnvironment
const sdkCorePackage = require('ibm-cloud-sdk-core');

const { NoAuthAuthenticator } = sdkCorePackage;
const {
  getOptions,
  checkUrlAndMethod,
  checkMediaHeaders,
  expectToBePromise,
  checkUserHeader,
} = require('@ibm-cloud/sdk-test-utilities');
const DrAutomationServiceV1 = require('../../dist/dr-automation-service/v1');

const drAutomationServiceServiceOptions = {
  authenticator: new NoAuthAuthenticator(),
  url: 'https://power-dra.test.cloud.ibm.com',
};

const drAutomationServiceService = new DrAutomationServiceV1(drAutomationServiceServiceOptions);

let createRequestMock = null;
function mock_createRequest() {
  if (!createRequestMock) {
    createRequestMock = jest.spyOn(drAutomationServiceService, 'createRequest');
    createRequestMock.mockImplementation(() => Promise.resolve());
  }
}

// dont actually construct an authenticator
const getAuthenticatorMock = jest.spyOn(sdkCorePackage, 'getAuthenticatorFromEnvironment');
getAuthenticatorMock.mockImplementation(() => new NoAuthAuthenticator());

describe('DrAutomationServiceV1', () => {
  beforeEach(() => {
    mock_createRequest();
  });

  afterEach(() => {
    if (createRequestMock) {
      createRequestMock.mockClear();
    }
    getAuthenticatorMock.mockClear();
  });

  describe('the newInstance method', () => {
    test('should use defaults when options not provided', () => {
      const testInstance = DrAutomationServiceV1.newInstance();

      expect(getAuthenticatorMock).toHaveBeenCalled();
      expect(testInstance.baseOptions.authenticator).toBeInstanceOf(NoAuthAuthenticator);
      expect(testInstance.baseOptions.serviceName).toBe(DrAutomationServiceV1.DEFAULT_SERVICE_NAME);
      expect(testInstance.baseOptions.serviceUrl).toBe(DrAutomationServiceV1.DEFAULT_SERVICE_URL);
      expect(testInstance).toBeInstanceOf(DrAutomationServiceV1);
    });

    test('should set serviceName, serviceUrl, and authenticator when provided', () => {
      const options = {
        authenticator: new NoAuthAuthenticator(),
        serviceUrl: 'custom.com',
        serviceName: 'my-service',
      };

      const testInstance = DrAutomationServiceV1.newInstance(options);

      expect(getAuthenticatorMock).not.toHaveBeenCalled();
      expect(testInstance.baseOptions.authenticator).toBeInstanceOf(NoAuthAuthenticator);
      expect(testInstance.baseOptions.serviceUrl).toBe('custom.com');
      expect(testInstance.baseOptions.serviceName).toBe('my-service');
      expect(testInstance).toBeInstanceOf(DrAutomationServiceV1);
    });
  });

  describe('the constructor', () => {
    test('use user-given service url', () => {
      const options = {
        authenticator: new NoAuthAuthenticator(),
        serviceUrl: 'custom.com',
      };

      const testInstance = new DrAutomationServiceV1(options);

      expect(testInstance.baseOptions.serviceUrl).toBe('custom.com');
    });

    test('use default service url', () => {
      const options = {
        authenticator: new NoAuthAuthenticator(),
      };

      const testInstance = new DrAutomationServiceV1(options);

      expect(testInstance.baseOptions.serviceUrl).toBe(DrAutomationServiceV1.DEFAULT_SERVICE_URL);
    });
  });

  describe('updateApikey', () => {
    describe('positive tests', () => {
      function __updateApikeyTest() {
        // Construct the params object for operation updateApikey
        const instanceId = '123456d3-1122-3344-b67d-4389b44b7bf9';
        const apiKey = 'adfadfdsafsdfdsf';
        const acceptLanguage = 'testString';
        const updateApikeyParams = {
          instanceId,
          apiKey,
          acceptLanguage,
        };

        const updateApikeyResult = drAutomationServiceService.updateApikey(updateApikeyParams);

        // all methods should return a Promise
        expectToBePromise(updateApikeyResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/drautomation/v1/apikey/{instance_id}', 'PUT');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'Accept-Language', acceptLanguage);
        expect(mockRequestOptions.body.api_key).toEqual(apiKey);
        expect(mockRequestOptions.path.instance_id).toEqual(instanceId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __updateApikeyTest();

        // enable retries and test again
        createRequestMock.mockClear();
        drAutomationServiceService.enableRetries();
        __updateApikeyTest();

        // disable retries and test again
        createRequestMock.mockClear();
        drAutomationServiceService.disableRetries();
        __updateApikeyTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const instanceId = '123456d3-1122-3344-b67d-4389b44b7bf9';
        const apiKey = 'adfadfdsafsdfdsf';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const updateApikeyParams = {
          instanceId,
          apiKey,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        drAutomationServiceService.updateApikey(updateApikeyParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await drAutomationServiceService.updateApikey({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await drAutomationServiceService.updateApikey();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('getDrGrsLocationPair', () => {
    describe('positive tests', () => {
      function __getDrGrsLocationPairTest() {
        // Construct the params object for operation getDrGrsLocationPair
        const instanceId = '123456d3-1122-3344-b67d-4389b44b7bf9';
        const acceptLanguage = 'testString';
        const getDrGrsLocationPairParams = {
          instanceId,
          acceptLanguage,
        };

        const getDrGrsLocationPairResult = drAutomationServiceService.getDrGrsLocationPair(
          getDrGrsLocationPairParams
        );

        // all methods should return a Promise
        expectToBePromise(getDrGrsLocationPairResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(
          mockRequestOptions,
          '/drautomation/v1/dr_grs_location_pairs/{instance_id}',
          'GET'
        );
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'Accept-Language', acceptLanguage);
        expect(mockRequestOptions.path.instance_id).toEqual(instanceId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getDrGrsLocationPairTest();

        // enable retries and test again
        createRequestMock.mockClear();
        drAutomationServiceService.enableRetries();
        __getDrGrsLocationPairTest();

        // disable retries and test again
        createRequestMock.mockClear();
        drAutomationServiceService.disableRetries();
        __getDrGrsLocationPairTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const instanceId = '123456d3-1122-3344-b67d-4389b44b7bf9';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getDrGrsLocationPairParams = {
          instanceId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        drAutomationServiceService.getDrGrsLocationPair(getDrGrsLocationPairParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await drAutomationServiceService.getDrGrsLocationPair({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await drAutomationServiceService.getDrGrsLocationPair();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('getDrLocations', () => {
    describe('positive tests', () => {
      function __getDrLocationsTest() {
        // Construct the params object for operation getDrLocations
        const instanceId = '123456d3-1122-3344-b67d-4389b44b7bf9';
        const acceptLanguage = 'testString';
        const getDrLocationsParams = {
          instanceId,
          acceptLanguage,
        };

        const getDrLocationsResult =
          drAutomationServiceService.getDrLocations(getDrLocationsParams);

        // all methods should return a Promise
        expectToBePromise(getDrLocationsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/drautomation/v1/dr_locations/{instance_id}', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'Accept-Language', acceptLanguage);
        expect(mockRequestOptions.path.instance_id).toEqual(instanceId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getDrLocationsTest();

        // enable retries and test again
        createRequestMock.mockClear();
        drAutomationServiceService.enableRetries();
        __getDrLocationsTest();

        // disable retries and test again
        createRequestMock.mockClear();
        drAutomationServiceService.disableRetries();
        __getDrLocationsTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const instanceId = '123456d3-1122-3344-b67d-4389b44b7bf9';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getDrLocationsParams = {
          instanceId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        drAutomationServiceService.getDrLocations(getDrLocationsParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await drAutomationServiceService.getDrLocations({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await drAutomationServiceService.getDrLocations();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('getDrManagedVm', () => {
    describe('positive tests', () => {
      function __getDrManagedVmTest() {
        // Construct the params object for operation getDrManagedVm
        const instanceId = '123456d3-1122-3344-b67d-4389b44b7bf9';
        const acceptLanguage = 'testString';
        const getDrManagedVmParams = {
          instanceId,
          acceptLanguage,
        };

        const getDrManagedVmResult =
          drAutomationServiceService.getDrManagedVm(getDrManagedVmParams);

        // all methods should return a Promise
        expectToBePromise(getDrManagedVmResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(
          mockRequestOptions,
          '/drautomation/v1/dr_managed_vms/{instance_id}',
          'GET'
        );
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'Accept-Language', acceptLanguage);
        expect(mockRequestOptions.path.instance_id).toEqual(instanceId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getDrManagedVmTest();

        // enable retries and test again
        createRequestMock.mockClear();
        drAutomationServiceService.enableRetries();
        __getDrManagedVmTest();

        // disable retries and test again
        createRequestMock.mockClear();
        drAutomationServiceService.disableRetries();
        __getDrManagedVmTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const instanceId = '123456d3-1122-3344-b67d-4389b44b7bf9';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getDrManagedVmParams = {
          instanceId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        drAutomationServiceService.getDrManagedVm(getDrManagedVmParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await drAutomationServiceService.getDrManagedVm({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await drAutomationServiceService.getDrManagedVm();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('getDrSummary', () => {
    describe('positive tests', () => {
      function __getDrSummaryTest() {
        // Construct the params object for operation getDrSummary
        const instanceId = '123456d3-1122-3344-b67d-4389b44b7bf9';
        const acceptLanguage = 'testString';
        const getDrSummaryParams = {
          instanceId,
          acceptLanguage,
        };

        const getDrSummaryResult = drAutomationServiceService.getDrSummary(getDrSummaryParams);

        // all methods should return a Promise
        expectToBePromise(getDrSummaryResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/drautomation/v1/dr_summary/{instance_id}', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'Accept-Language', acceptLanguage);
        expect(mockRequestOptions.path.instance_id).toEqual(instanceId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getDrSummaryTest();

        // enable retries and test again
        createRequestMock.mockClear();
        drAutomationServiceService.enableRetries();
        __getDrSummaryTest();

        // disable retries and test again
        createRequestMock.mockClear();
        drAutomationServiceService.disableRetries();
        __getDrSummaryTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const instanceId = '123456d3-1122-3344-b67d-4389b44b7bf9';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getDrSummaryParams = {
          instanceId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        drAutomationServiceService.getDrSummary(getDrSummaryParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await drAutomationServiceService.getDrSummary({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await drAutomationServiceService.getDrSummary();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('getMachineType', () => {
    describe('positive tests', () => {
      function __getMachineTypeTest() {
        // Construct the params object for operation getMachineType
        const instanceId = '123456d3-1122-3344-b67d-4389b44b7bf9';
        const primaryWorkspaceName = 'Test-workspace-wdc06';
        const acceptLanguage = 'testString';
        const standbyWorkspaceName = 'Test-workspace-wdc07';
        const getMachineTypeParams = {
          instanceId,
          primaryWorkspaceName,
          acceptLanguage,
          standbyWorkspaceName,
        };

        const getMachineTypeResult =
          drAutomationServiceService.getMachineType(getMachineTypeParams);

        // all methods should return a Promise
        expectToBePromise(getMachineTypeResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/drautomation/v1/machinetypes/{instance_id}', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'Accept-Language', acceptLanguage);
        expect(mockRequestOptions.qs.primary_workspace_name).toEqual(primaryWorkspaceName);
        expect(mockRequestOptions.qs.standby_workspace_name).toEqual(standbyWorkspaceName);
        expect(mockRequestOptions.path.instance_id).toEqual(instanceId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getMachineTypeTest();

        // enable retries and test again
        createRequestMock.mockClear();
        drAutomationServiceService.enableRetries();
        __getMachineTypeTest();

        // disable retries and test again
        createRequestMock.mockClear();
        drAutomationServiceService.disableRetries();
        __getMachineTypeTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const instanceId = '123456d3-1122-3344-b67d-4389b44b7bf9';
        const primaryWorkspaceName = 'Test-workspace-wdc06';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getMachineTypeParams = {
          instanceId,
          primaryWorkspaceName,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        drAutomationServiceService.getMachineType(getMachineTypeParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await drAutomationServiceService.getMachineType({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await drAutomationServiceService.getMachineType();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('getPowervsWorkspaces', () => {
    describe('positive tests', () => {
      function __getPowervsWorkspacesTest() {
        // Construct the params object for operation getPowervsWorkspaces
        const instanceId = '123456d3-1122-3344-b67d-4389b44b7bf9';
        const locationId = 'testString';
        const getPowervsWorkspacesParams = {
          instanceId,
          locationId,
        };

        const getPowervsWorkspacesResult = drAutomationServiceService.getPowervsWorkspaces(
          getPowervsWorkspacesParams
        );

        // all methods should return a Promise
        expectToBePromise(getPowervsWorkspacesResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(
          mockRequestOptions,
          '/drautomation/v1/powervs_workspaces/{instance_id}',
          'GET'
        );
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        expect(mockRequestOptions.qs.location_id).toEqual(locationId);
        expect(mockRequestOptions.path.instance_id).toEqual(instanceId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getPowervsWorkspacesTest();

        // enable retries and test again
        createRequestMock.mockClear();
        drAutomationServiceService.enableRetries();
        __getPowervsWorkspacesTest();

        // disable retries and test again
        createRequestMock.mockClear();
        drAutomationServiceService.disableRetries();
        __getPowervsWorkspacesTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const instanceId = '123456d3-1122-3344-b67d-4389b44b7bf9';
        const locationId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getPowervsWorkspacesParams = {
          instanceId,
          locationId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        drAutomationServiceService.getPowervsWorkspaces(getPowervsWorkspacesParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await drAutomationServiceService.getPowervsWorkspaces({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await drAutomationServiceService.getPowervsWorkspaces();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('createManageDr', () => {
    describe('positive tests', () => {
      function __createManageDrTest() {
        // Construct the params object for operation createManageDr
        const instanceId = '123456d3-1122-3344-b67d-4389b44b7bf9';
        const locationId = 'dal10';
        const machineType = 'bx2-4x16';
        const orchestratorLocationType = 'off-premises';
        const orchestratorName = 'adminUser';
        const orchestratorPassword = 'testString';
        const orchestratorWorkspaceId = 'orch-workspace-01';
        const apiKey = 'testString';
        const clientId = 'abcd-97d2-1234-bf62-8eaecc67a1234';
        const clientSecret = 'abcd1234xM1y123wK6qR9123456789bE2jG0pabcdefgh';
        const guid = '123e4567-e89b-12d3-a456-426614174000';
        const orchestratorHa = true;
        const proxyIp = '10.40.30.10:8888';
        const regionId = 'us-south';
        const resourceInstance = 'crn:v1:bluemix:public:resource-controller::res123';
        const secret = 'testString';
        const secretGroup = 'default-secret-group';
        const sshKeyName = 'my-ssh-key';
        const standbyMachineType = 'bx2-8x32';
        const standbyOrchestratorName = 'standbyAdmin';
        const standbyOrchestratorWorkspaceId = 'orch-standby-02';
        const standbyTier = 'Premium';
        const tenantName = 'xxx.ibm.com';
        const tier = 'Standard';
        const standByRedeploy = 'testString';
        const acceptLanguage = 'testString';
        const acceptsIncomplete = true;
        const createManageDrParams = {
          instanceId,
          locationId,
          machineType,
          orchestratorLocationType,
          orchestratorName,
          orchestratorPassword,
          orchestratorWorkspaceId,
          apiKey,
          clientId,
          clientSecret,
          guid,
          orchestratorHa,
          proxyIp,
          regionId,
          resourceInstance,
          secret,
          secretGroup,
          sshKeyName,
          standbyMachineType,
          standbyOrchestratorName,
          standbyOrchestratorWorkspaceId,
          standbyTier,
          tenantName,
          tier,
          standByRedeploy,
          acceptLanguage,
          acceptsIncomplete,
        };

        const createManageDrResult =
          drAutomationServiceService.createManageDr(createManageDrParams);

        // all methods should return a Promise
        expectToBePromise(createManageDrResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/drautomation/v1/manage_dr/{instance_id}', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'Accept-Language', acceptLanguage);
        expect(mockRequestOptions.body.location_id).toEqual(locationId);
        expect(mockRequestOptions.body.machine_type).toEqual(machineType);
        expect(mockRequestOptions.body.orchestrator_location_type).toEqual(
          orchestratorLocationType
        );
        expect(mockRequestOptions.body.orchestrator_name).toEqual(orchestratorName);
        expect(mockRequestOptions.body.orchestrator_password).toEqual(orchestratorPassword);
        expect(mockRequestOptions.body.orchestrator_workspace_id).toEqual(orchestratorWorkspaceId);
        expect(mockRequestOptions.body.api_key).toEqual(apiKey);
        expect(mockRequestOptions.body.client_id).toEqual(clientId);
        expect(mockRequestOptions.body.client_secret).toEqual(clientSecret);
        expect(mockRequestOptions.body.guid).toEqual(guid);
        expect(mockRequestOptions.body.orchestrator_ha).toEqual(orchestratorHa);
        expect(mockRequestOptions.body.proxy_ip).toEqual(proxyIp);
        expect(mockRequestOptions.body.region_id).toEqual(regionId);
        expect(mockRequestOptions.body.resource_instance).toEqual(resourceInstance);
        expect(mockRequestOptions.body.secret).toEqual(secret);
        expect(mockRequestOptions.body.secret_group).toEqual(secretGroup);
        expect(mockRequestOptions.body.ssh_key_name).toEqual(sshKeyName);
        expect(mockRequestOptions.body.standby_machine_type).toEqual(standbyMachineType);
        expect(mockRequestOptions.body.standby_orchestrator_name).toEqual(standbyOrchestratorName);
        expect(mockRequestOptions.body.standby_orchestrator_workspace_id).toEqual(
          standbyOrchestratorWorkspaceId
        );
        expect(mockRequestOptions.body.standby_tier).toEqual(standbyTier);
        expect(mockRequestOptions.body.tenant_name).toEqual(tenantName);
        expect(mockRequestOptions.body.tier).toEqual(tier);
        expect(mockRequestOptions.qs.stand_by_redeploy).toEqual(standByRedeploy);
        expect(mockRequestOptions.qs.accepts_incomplete).toEqual(acceptsIncomplete);
        expect(mockRequestOptions.path.instance_id).toEqual(instanceId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __createManageDrTest();

        // enable retries and test again
        createRequestMock.mockClear();
        drAutomationServiceService.enableRetries();
        __createManageDrTest();

        // disable retries and test again
        createRequestMock.mockClear();
        drAutomationServiceService.disableRetries();
        __createManageDrTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const instanceId = '123456d3-1122-3344-b67d-4389b44b7bf9';
        const locationId = 'dal10';
        const machineType = 'bx2-4x16';
        const orchestratorLocationType = 'off-premises';
        const orchestratorName = 'adminUser';
        const orchestratorPassword = 'testString';
        const orchestratorWorkspaceId = 'orch-workspace-01';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const createManageDrParams = {
          instanceId,
          locationId,
          machineType,
          orchestratorLocationType,
          orchestratorName,
          orchestratorPassword,
          orchestratorWorkspaceId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        drAutomationServiceService.createManageDr(createManageDrParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await drAutomationServiceService.createManageDr({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await drAutomationServiceService.createManageDr();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('getLastOperation', () => {
    describe('positive tests', () => {
      function __getLastOperationTest() {
        // Construct the params object for operation getLastOperation
        const instanceId = '123456d3-1122-3344-b67d-4389b44b7bf9';
        const acceptLanguage = 'testString';
        const getLastOperationParams = {
          instanceId,
          acceptLanguage,
        };

        const getLastOperationResult =
          drAutomationServiceService.getLastOperation(getLastOperationParams);

        // all methods should return a Promise
        expectToBePromise(getLastOperationResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(
          mockRequestOptions,
          '/drautomation/v1/last_operation/{instance_id}',
          'GET'
        );
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'Accept-Language', acceptLanguage);
        expect(mockRequestOptions.path.instance_id).toEqual(instanceId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getLastOperationTest();

        // enable retries and test again
        createRequestMock.mockClear();
        drAutomationServiceService.enableRetries();
        __getLastOperationTest();

        // disable retries and test again
        createRequestMock.mockClear();
        drAutomationServiceService.disableRetries();
        __getLastOperationTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const instanceId = '123456d3-1122-3344-b67d-4389b44b7bf9';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getLastOperationParams = {
          instanceId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        drAutomationServiceService.getLastOperation(getLastOperationParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await drAutomationServiceService.getLastOperation({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await drAutomationServiceService.getLastOperation();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('listEvents', () => {
    describe('positive tests', () => {
      function __listEventsTest() {
        // Construct the params object for operation listEvents
        const instanceId = '123456d3-1122-3344-b67d-4389b44b7bf9';
        const time = '2025-06-19T23:59:59Z';
        const fromTime = '2025-06-19T00:00:00Z';
        const toTime = '2025-06-19T23:59:59Z';
        const acceptLanguage = 'testString';
        const listEventsParams = {
          instanceId,
          time,
          fromTime,
          toTime,
          acceptLanguage,
        };

        const listEventsResult = drAutomationServiceService.listEvents(listEventsParams);

        // all methods should return a Promise
        expectToBePromise(listEventsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(
          mockRequestOptions,
          '/drautomation/v1/service_instances/{instance_id}/events',
          'GET'
        );
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'Accept-Language', acceptLanguage);
        expect(mockRequestOptions.qs.time).toEqual(time);
        expect(mockRequestOptions.qs.from_time).toEqual(fromTime);
        expect(mockRequestOptions.qs.to_time).toEqual(toTime);
        expect(mockRequestOptions.path.instance_id).toEqual(instanceId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __listEventsTest();

        // enable retries and test again
        createRequestMock.mockClear();
        drAutomationServiceService.enableRetries();
        __listEventsTest();

        // disable retries and test again
        createRequestMock.mockClear();
        drAutomationServiceService.disableRetries();
        __listEventsTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const instanceId = '123456d3-1122-3344-b67d-4389b44b7bf9';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const listEventsParams = {
          instanceId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        drAutomationServiceService.listEvents(listEventsParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await drAutomationServiceService.listEvents({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await drAutomationServiceService.listEvents();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('getEvent', () => {
    describe('positive tests', () => {
      function __getEventTest() {
        // Construct the params object for operation getEvent
        const instanceId = '123456d3-1122-3344-b67d-4389b44b7bf9';
        const eventId = '00116b2a-9326-4024-839e-fb5364b76898';
        const acceptLanguage = 'testString';
        const getEventParams = {
          instanceId,
          eventId,
          acceptLanguage,
        };

        const getEventResult = drAutomationServiceService.getEvent(getEventParams);

        // all methods should return a Promise
        expectToBePromise(getEventResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(
          mockRequestOptions,
          '/drautomation/v1/service_instances/{instance_id}/events/{event_id}',
          'GET'
        );
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'Accept-Language', acceptLanguage);
        expect(mockRequestOptions.path.instance_id).toEqual(instanceId);
        expect(mockRequestOptions.path.event_id).toEqual(eventId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getEventTest();

        // enable retries and test again
        createRequestMock.mockClear();
        drAutomationServiceService.enableRetries();
        __getEventTest();

        // disable retries and test again
        createRequestMock.mockClear();
        drAutomationServiceService.disableRetries();
        __getEventTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const instanceId = '123456d3-1122-3344-b67d-4389b44b7bf9';
        const eventId = '00116b2a-9326-4024-839e-fb5364b76898';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getEventParams = {
          instanceId,
          eventId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        drAutomationServiceService.getEvent(getEventParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await drAutomationServiceService.getEvent({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await drAutomationServiceService.getEvent();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });
});
