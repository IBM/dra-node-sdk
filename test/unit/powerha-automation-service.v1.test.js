/**
 * (C) Copyright IBM Corp. 2026.
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
const PowerhaAutomationServiceV1 = require('../../dist/powerha-automation-service/v1');

const powerhaAutomationServiceServiceOptions = {
  authenticator: new NoAuthAuthenticator(),
  url: 'https://power-dra.test.cloud.ibm.com',
};

const powerhaAutomationServiceService = new PowerhaAutomationServiceV1(
  powerhaAutomationServiceServiceOptions
);

let createRequestMock = null;
function mock_createRequest() {
  if (!createRequestMock) {
    createRequestMock = jest.spyOn(powerhaAutomationServiceService, 'createRequest');
    createRequestMock.mockImplementation(() => Promise.resolve());
  }
}

// dont actually construct an authenticator
const getAuthenticatorMock = jest.spyOn(sdkCorePackage, 'getAuthenticatorFromEnvironment');
getAuthenticatorMock.mockImplementation(() => new NoAuthAuthenticator());

describe('PowerhaAutomationServiceV1', () => {
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
      const testInstance = PowerhaAutomationServiceV1.newInstance();

      expect(getAuthenticatorMock).toHaveBeenCalled();
      expect(testInstance.baseOptions.authenticator).toBeInstanceOf(NoAuthAuthenticator);
      expect(testInstance.baseOptions.serviceName).toBe(
        PowerhaAutomationServiceV1.DEFAULT_SERVICE_NAME
      );
      expect(testInstance.baseOptions.serviceUrl).toBe(
        PowerhaAutomationServiceV1.DEFAULT_SERVICE_URL
      );
      expect(testInstance).toBeInstanceOf(PowerhaAutomationServiceV1);
    });

    test('should set serviceName, serviceUrl, and authenticator when provided', () => {
      const options = {
        authenticator: new NoAuthAuthenticator(),
        serviceUrl: 'custom.com',
        serviceName: 'my-service',
      };

      const testInstance = PowerhaAutomationServiceV1.newInstance(options);

      expect(getAuthenticatorMock).not.toHaveBeenCalled();
      expect(testInstance.baseOptions.authenticator).toBeInstanceOf(NoAuthAuthenticator);
      expect(testInstance.baseOptions.serviceUrl).toBe('custom.com');
      expect(testInstance.baseOptions.serviceName).toBe('my-service');
      expect(testInstance).toBeInstanceOf(PowerhaAutomationServiceV1);
    });
  });

  describe('the constructor', () => {
    test('use user-given service url', () => {
      const options = {
        authenticator: new NoAuthAuthenticator(),
        serviceUrl: 'custom.com',
      };

      const testInstance = new PowerhaAutomationServiceV1(options);

      expect(testInstance.baseOptions.serviceUrl).toBe('custom.com');
    });

    test('use default service url', () => {
      const options = {
        authenticator: new NoAuthAuthenticator(),
      };

      const testInstance = new PowerhaAutomationServiceV1(options);

      expect(testInstance.baseOptions.serviceUrl).toBe(
        PowerhaAutomationServiceV1.DEFAULT_SERVICE_URL
      );
    });
  });

  describe('getApiKey', () => {
    describe('positive tests', () => {
      function __getApiKeyTest() {
        // Construct the params object for operation getApiKey
        const phaInstanceId = '8eefautr-4c02-0009-0086-8bd4d8cf61b6';
        const acceptLanguage = 'en-US';
        const ifNoneMatch = 'abcdef';
        const getApiKeyParams = {
          phaInstanceId,
          acceptLanguage,
          ifNoneMatch,
        };

        const getApiKeyResult = powerhaAutomationServiceService.getApiKey(getApiKeyParams);

        // all methods should return a Promise
        expectToBePromise(getApiKeyResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(
          mockRequestOptions,
          '/powerha_automation/v1/api_key/{pha_instance_id}',
          'GET'
        );
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'Accept-Language', acceptLanguage);
        checkUserHeader(createRequestMock, 'If-None-Match', ifNoneMatch);
        expect(mockRequestOptions.path.pha_instance_id).toEqual(phaInstanceId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getApiKeyTest();

        // enable retries and test again
        createRequestMock.mockClear();
        powerhaAutomationServiceService.enableRetries();
        __getApiKeyTest();

        // disable retries and test again
        createRequestMock.mockClear();
        powerhaAutomationServiceService.disableRetries();
        __getApiKeyTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const phaInstanceId = '8eefautr-4c02-0009-0086-8bd4d8cf61b6';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getApiKeyParams = {
          phaInstanceId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        powerhaAutomationServiceService.getApiKey(getApiKeyParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await powerhaAutomationServiceService.getApiKey({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await powerhaAutomationServiceService.getApiKey();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('createApiKey', () => {
    describe('positive tests', () => {
      function __createApiKeyTest() {
        // Construct the params object for operation createApiKey
        const phaInstanceId = '8eefautr-4c02-0009-0086-8bd4d8cf61b6';
        const apiKey = 'adfadfdsafsdfdsf';
        const acceptLanguage = 'en-US';
        const ifNoneMatch = 'abcdef';
        const createApiKeyParams = {
          phaInstanceId,
          apiKey,
          acceptLanguage,
          ifNoneMatch,
        };

        const createApiKeyResult = powerhaAutomationServiceService.createApiKey(createApiKeyParams);

        // all methods should return a Promise
        expectToBePromise(createApiKeyResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(
          mockRequestOptions,
          '/powerha_automation/v1/api_key/{pha_instance_id}',
          'POST'
        );
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'Accept-Language', acceptLanguage);
        checkUserHeader(createRequestMock, 'If-None-Match', ifNoneMatch);
        expect(mockRequestOptions.body.api_key).toEqual(apiKey);
        expect(mockRequestOptions.path.pha_instance_id).toEqual(phaInstanceId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __createApiKeyTest();

        // enable retries and test again
        createRequestMock.mockClear();
        powerhaAutomationServiceService.enableRetries();
        __createApiKeyTest();

        // disable retries and test again
        createRequestMock.mockClear();
        powerhaAutomationServiceService.disableRetries();
        __createApiKeyTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const phaInstanceId = '8eefautr-4c02-0009-0086-8bd4d8cf61b6';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const createApiKeyParams = {
          phaInstanceId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        powerhaAutomationServiceService.createApiKey(createApiKeyParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await powerhaAutomationServiceService.createApiKey({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await powerhaAutomationServiceService.createApiKey();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('getClusterNode', () => {
    describe('positive tests', () => {
      function __getClusterNodeTest() {
        // Construct the params object for operation getClusterNode
        const phaInstanceId = '8eefautr-4c02-0009-0086-8bd4d8cf61b6';
        const ifNoneMatch = 'abcdef';
        const getClusterNodeParams = {
          phaInstanceId,
          ifNoneMatch,
        };

        const getClusterNodeResult =
          powerhaAutomationServiceService.getClusterNode(getClusterNodeParams);

        // all methods should return a Promise
        expectToBePromise(getClusterNodeResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(
          mockRequestOptions,
          '/powerha_automation/v1/cluster_nodes/{pha_instance_id}',
          'GET'
        );
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'If-None-Match', ifNoneMatch);
        expect(mockRequestOptions.path.pha_instance_id).toEqual(phaInstanceId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getClusterNodeTest();

        // enable retries and test again
        createRequestMock.mockClear();
        powerhaAutomationServiceService.enableRetries();
        __getClusterNodeTest();

        // disable retries and test again
        createRequestMock.mockClear();
        powerhaAutomationServiceService.disableRetries();
        __getClusterNodeTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const phaInstanceId = '8eefautr-4c02-0009-0086-8bd4d8cf61b6';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getClusterNodeParams = {
          phaInstanceId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        powerhaAutomationServiceService.getClusterNode(getClusterNodeParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await powerhaAutomationServiceService.getClusterNode({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await powerhaAutomationServiceService.getClusterNode();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('createClusterNode', () => {
    describe('positive tests', () => {
      function __createClusterNodeTest() {
        // Construct the params object for operation createClusterNode
        const phaInstanceId = '8eefautr-4c02-0009-0086-8bd4d8cf61b6';
        const primaryClusterNodes = ['ede4c36e-002c-48da-992e-6039d230c478'];
        const secondaryClusterNodes = ['ede4c36e-1234-48da-992e-6039d230c478'];
        const acceptLanguage = 'en-US';
        const ifNoneMatch = 'abcdef';
        const createClusterNodeParams = {
          phaInstanceId,
          primaryClusterNodes,
          secondaryClusterNodes,
          acceptLanguage,
          ifNoneMatch,
        };

        const createClusterNodeResult =
          powerhaAutomationServiceService.createClusterNode(createClusterNodeParams);

        // all methods should return a Promise
        expectToBePromise(createClusterNodeResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(
          mockRequestOptions,
          '/powerha_automation/v1/cluster_nodes/{pha_instance_id}',
          'POST'
        );
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'Accept-Language', acceptLanguage);
        checkUserHeader(createRequestMock, 'If-None-Match', ifNoneMatch);
        expect(mockRequestOptions.body.primary_cluster_nodes).toEqual(primaryClusterNodes);
        expect(mockRequestOptions.body.secondary_cluster_nodes).toEqual(secondaryClusterNodes);
        expect(mockRequestOptions.path.pha_instance_id).toEqual(phaInstanceId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __createClusterNodeTest();

        // enable retries and test again
        createRequestMock.mockClear();
        powerhaAutomationServiceService.enableRetries();
        __createClusterNodeTest();

        // disable retries and test again
        createRequestMock.mockClear();
        powerhaAutomationServiceService.disableRetries();
        __createClusterNodeTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const phaInstanceId = '8eefautr-4c02-0009-0086-8bd4d8cf61b6';
        const primaryClusterNodes = ['ede4c36e-002c-48da-992e-6039d230c478'];
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const createClusterNodeParams = {
          phaInstanceId,
          primaryClusterNodes,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        powerhaAutomationServiceService.createClusterNode(createClusterNodeParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await powerhaAutomationServiceService.createClusterNode({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await powerhaAutomationServiceService.createClusterNode();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('deleteClusterNode', () => {
    describe('positive tests', () => {
      function __deleteClusterNodeTest() {
        // Construct the params object for operation deleteClusterNode
        const phaInstanceId = '8eefautr-4c02-0009-0086-8bd4d8cf61b6';
        const vmId = 'r006-2f3b3ab9-2149-49cc-83a1-30a5d93d59b2';
        const ifNoneMatch = 'abcdef';
        const deleteClusterNodeParams = {
          phaInstanceId,
          vmId,
          ifNoneMatch,
        };

        const deleteClusterNodeResult =
          powerhaAutomationServiceService.deleteClusterNode(deleteClusterNodeParams);

        // all methods should return a Promise
        expectToBePromise(deleteClusterNodeResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(
          mockRequestOptions,
          '/powerha_automation/v1/cluster_nodes/{pha_instance_id}',
          'DELETE'
        );
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'If-None-Match', ifNoneMatch);
        expect(mockRequestOptions.qs.vm_id).toEqual(vmId);
        expect(mockRequestOptions.path.pha_instance_id).toEqual(phaInstanceId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __deleteClusterNodeTest();

        // enable retries and test again
        createRequestMock.mockClear();
        powerhaAutomationServiceService.enableRetries();
        __deleteClusterNodeTest();

        // disable retries and test again
        createRequestMock.mockClear();
        powerhaAutomationServiceService.disableRetries();
        __deleteClusterNodeTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const phaInstanceId = '8eefautr-4c02-0009-0086-8bd4d8cf61b6';
        const vmId = 'r006-2f3b3ab9-2149-49cc-83a1-30a5d93d59b2';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const deleteClusterNodeParams = {
          phaInstanceId,
          vmId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        powerhaAutomationServiceService.deleteClusterNode(deleteClusterNodeParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await powerhaAutomationServiceService.deleteClusterNode({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await powerhaAutomationServiceService.deleteClusterNode();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('getPowervsWorkspace', () => {
    describe('positive tests', () => {
      function __getPowervsWorkspaceTest() {
        // Construct the params object for operation getPowervsWorkspace
        const phaInstanceId = '8eefautr-4c02-0009-0086-8bd4d8cf61b6';
        const locationId = 'us-south';
        const acceptLanguage = 'en-US';
        const ifNoneMatch = 'abcdef';
        const getPowervsWorkspaceParams = {
          phaInstanceId,
          locationId,
          acceptLanguage,
          ifNoneMatch,
        };

        const getPowervsWorkspaceResult =
          powerhaAutomationServiceService.getPowervsWorkspace(getPowervsWorkspaceParams);

        // all methods should return a Promise
        expectToBePromise(getPowervsWorkspaceResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(
          mockRequestOptions,
          '/powerha_automation/v1/powervs_workspaces/{pha_instance_id}',
          'GET'
        );
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'Accept-Language', acceptLanguage);
        checkUserHeader(createRequestMock, 'If-None-Match', ifNoneMatch);
        expect(mockRequestOptions.qs.location_id).toEqual(locationId);
        expect(mockRequestOptions.path.pha_instance_id).toEqual(phaInstanceId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getPowervsWorkspaceTest();

        // enable retries and test again
        createRequestMock.mockClear();
        powerhaAutomationServiceService.enableRetries();
        __getPowervsWorkspaceTest();

        // disable retries and test again
        createRequestMock.mockClear();
        powerhaAutomationServiceService.disableRetries();
        __getPowervsWorkspaceTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const phaInstanceId = '8eefautr-4c02-0009-0086-8bd4d8cf61b6';
        const locationId = 'us-south';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getPowervsWorkspaceParams = {
          phaInstanceId,
          locationId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        powerhaAutomationServiceService.getPowervsWorkspace(getPowervsWorkspaceParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await powerhaAutomationServiceService.getPowervsWorkspace({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await powerhaAutomationServiceService.getPowervsWorkspace();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('getPhaLastOperation', () => {
    describe('positive tests', () => {
      function __getPhaLastOperationTest() {
        // Construct the params object for operation getPhaLastOperation
        const phaInstanceId = '8eefautr-4c02-0009-0086-8bd4d8cf61b6';
        const acceptLanguage = 'en-US';
        const ifNoneMatch = 'abcdef';
        const getPhaLastOperationParams = {
          phaInstanceId,
          acceptLanguage,
          ifNoneMatch,
        };

        const getPhaLastOperationResult =
          powerhaAutomationServiceService.getPhaLastOperation(getPhaLastOperationParams);

        // all methods should return a Promise
        expectToBePromise(getPhaLastOperationResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(
          mockRequestOptions,
          '/powerha_automation/v1/last_operation/{pha_instance_id}',
          'GET'
        );
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'Accept-Language', acceptLanguage);
        checkUserHeader(createRequestMock, 'If-None-Match', ifNoneMatch);
        expect(mockRequestOptions.path.pha_instance_id).toEqual(phaInstanceId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getPhaLastOperationTest();

        // enable retries and test again
        createRequestMock.mockClear();
        powerhaAutomationServiceService.enableRetries();
        __getPhaLastOperationTest();

        // disable retries and test again
        createRequestMock.mockClear();
        powerhaAutomationServiceService.disableRetries();
        __getPhaLastOperationTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const phaInstanceId = '8eefautr-4c02-0009-0086-8bd4d8cf61b6';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getPhaLastOperationParams = {
          phaInstanceId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        powerhaAutomationServiceService.getPhaLastOperation(getPhaLastOperationParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await powerhaAutomationServiceService.getPhaLastOperation({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await powerhaAutomationServiceService.getPhaLastOperation();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('getPhaDeployment', () => {
    describe('positive tests', () => {
      function __getPhaDeploymentTest() {
        // Construct the params object for operation getPhaDeployment
        const phaInstanceId = '8eefautr-4c02-0009-0086-8bd4d8cf61b6';
        const ifNoneMatch = 'abcdef';
        const getPhaDeploymentParams = {
          phaInstanceId,
          ifNoneMatch,
        };

        const getPhaDeploymentResult =
          powerhaAutomationServiceService.getPhaDeployment(getPhaDeploymentParams);

        // all methods should return a Promise
        expectToBePromise(getPhaDeploymentResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(
          mockRequestOptions,
          '/powerha_automation/v1/pha_deployment/{pha_instance_id}',
          'GET'
        );
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'If-None-Match', ifNoneMatch);
        expect(mockRequestOptions.path.pha_instance_id).toEqual(phaInstanceId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getPhaDeploymentTest();

        // enable retries and test again
        createRequestMock.mockClear();
        powerhaAutomationServiceService.enableRetries();
        __getPhaDeploymentTest();

        // disable retries and test again
        createRequestMock.mockClear();
        powerhaAutomationServiceService.disableRetries();
        __getPhaDeploymentTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const phaInstanceId = '8eefautr-4c02-0009-0086-8bd4d8cf61b6';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getPhaDeploymentParams = {
          phaInstanceId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        powerhaAutomationServiceService.getPhaDeployment(getPhaDeploymentParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await powerhaAutomationServiceService.getPhaDeployment({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await powerhaAutomationServiceService.getPhaDeployment();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('createPhaDeployment', () => {
    describe('positive tests', () => {
      function __createPhaDeploymentTest() {
        // Construct the params object for operation createPhaDeployment
        const phaInstanceId = '8eefautr-4c02-0009-0086-8bd4d8cf61b6';
        const locationId = 'loc-us-south-01';
        const primaryWorkspace = 'workspace-primary';
        const apiKey = '123635364646fghrtfhbfdhb';
        const clusterType = 'standard';
        const configureType = 'automatic';
        const primaryClusterNodes = ['ede4c36e-002c-48da-992e-6039d230c478'];
        const standbyClusterNodes = ['843a8e1f-05bb-4164-8c73-de39e016c2b4'];
        const primaryLocation = 'us-south';
        const secondaryLocation = 'us-east';
        const secondaryWorkspace = 'workspace-secondary';
        const acceptLanguage = 'en-US';
        const ifNoneMatch = 'abcdef';
        const createPhaDeploymentParams = {
          phaInstanceId,
          locationId,
          primaryWorkspace,
          apiKey,
          clusterType,
          configureType,
          primaryClusterNodes,
          standbyClusterNodes,
          primaryLocation,
          secondaryLocation,
          secondaryWorkspace,
          acceptLanguage,
          ifNoneMatch,
        };

        const createPhaDeploymentResult =
          powerhaAutomationServiceService.createPhaDeployment(createPhaDeploymentParams);

        // all methods should return a Promise
        expectToBePromise(createPhaDeploymentResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(
          mockRequestOptions,
          '/powerha_automation/v1/pha_deployment/{pha_instance_id}',
          'POST'
        );
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'Accept-Language', acceptLanguage);
        checkUserHeader(createRequestMock, 'If-None-Match', ifNoneMatch);
        expect(mockRequestOptions.body.location_id).toEqual(locationId);
        expect(mockRequestOptions.body.primary_workspace).toEqual(primaryWorkspace);
        expect(mockRequestOptions.body.api_key).toEqual(apiKey);
        expect(mockRequestOptions.body.cluster_type).toEqual(clusterType);
        expect(mockRequestOptions.body.configure_type).toEqual(configureType);
        expect(mockRequestOptions.body.primary_cluster_nodes).toEqual(primaryClusterNodes);
        expect(mockRequestOptions.body.standby_cluster_nodes).toEqual(standbyClusterNodes);
        expect(mockRequestOptions.body.primary_location).toEqual(primaryLocation);
        expect(mockRequestOptions.body.secondary_location).toEqual(secondaryLocation);
        expect(mockRequestOptions.body.secondary_workspace).toEqual(secondaryWorkspace);
        expect(mockRequestOptions.path.pha_instance_id).toEqual(phaInstanceId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __createPhaDeploymentTest();

        // enable retries and test again
        createRequestMock.mockClear();
        powerhaAutomationServiceService.enableRetries();
        __createPhaDeploymentTest();

        // disable retries and test again
        createRequestMock.mockClear();
        powerhaAutomationServiceService.disableRetries();
        __createPhaDeploymentTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const phaInstanceId = '8eefautr-4c02-0009-0086-8bd4d8cf61b6';
        const locationId = 'loc-us-south-01';
        const primaryWorkspace = 'workspace-primary';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const createPhaDeploymentParams = {
          phaInstanceId,
          locationId,
          primaryWorkspace,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        powerhaAutomationServiceService.createPhaDeployment(createPhaDeploymentParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await powerhaAutomationServiceService.createPhaDeployment({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await powerhaAutomationServiceService.createPhaDeployment();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('getSupportedLocation', () => {
    describe('positive tests', () => {
      function __getSupportedLocationTest() {
        // Construct the params object for operation getSupportedLocation
        const phaInstanceId = '8eefautr-4c02-0009-0086-8bd4d8cf61b6';
        const ifNoneMatch = 'abcdef';
        const getSupportedLocationParams = {
          phaInstanceId,
          ifNoneMatch,
        };

        const getSupportedLocationResult = powerhaAutomationServiceService.getSupportedLocation(
          getSupportedLocationParams
        );

        // all methods should return a Promise
        expectToBePromise(getSupportedLocationResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(
          mockRequestOptions,
          '/powerha_automation/v1/supported_locations/{pha_instance_id}',
          'GET'
        );
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'If-None-Match', ifNoneMatch);
        expect(mockRequestOptions.path.pha_instance_id).toEqual(phaInstanceId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getSupportedLocationTest();

        // enable retries and test again
        createRequestMock.mockClear();
        powerhaAutomationServiceService.enableRetries();
        __getSupportedLocationTest();

        // disable retries and test again
        createRequestMock.mockClear();
        powerhaAutomationServiceService.disableRetries();
        __getSupportedLocationTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const phaInstanceId = '8eefautr-4c02-0009-0086-8bd4d8cf61b6';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getSupportedLocationParams = {
          phaInstanceId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        powerhaAutomationServiceService.getSupportedLocation(getSupportedLocationParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await powerhaAutomationServiceService.getSupportedLocation({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await powerhaAutomationServiceService.getSupportedLocation();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('listServiceInstanceEvents', () => {
    describe('positive tests', () => {
      function __listServiceInstanceEventsTest() {
        // Construct the params object for operation listServiceInstanceEvents
        const phaInstanceId = '8eefautr-4c02-0009-0086-8bd4d8cf61b6';
        const time = '2025-06-19T23:59:59Z';
        const fromTime = '2025-06-19T00:00:00Z';
        const toTime = '2025-06-19T23:59:59Z';
        const acceptLanguage = 'en-US';
        const ifNoneMatch = 'abcdef';
        const listServiceInstanceEventsParams = {
          phaInstanceId,
          time,
          fromTime,
          toTime,
          acceptLanguage,
          ifNoneMatch,
        };

        const listServiceInstanceEventsResult =
          powerhaAutomationServiceService.listServiceInstanceEvents(
            listServiceInstanceEventsParams
          );

        // all methods should return a Promise
        expectToBePromise(listServiceInstanceEventsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(
          mockRequestOptions,
          '/powerha_automation/v1/service_instances/{pha_instance_id}/events',
          'GET'
        );
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'Accept-Language', acceptLanguage);
        checkUserHeader(createRequestMock, 'If-None-Match', ifNoneMatch);
        expect(mockRequestOptions.qs.time).toEqual(time);
        expect(mockRequestOptions.qs.from_time).toEqual(fromTime);
        expect(mockRequestOptions.qs.to_time).toEqual(toTime);
        expect(mockRequestOptions.path.pha_instance_id).toEqual(phaInstanceId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __listServiceInstanceEventsTest();

        // enable retries and test again
        createRequestMock.mockClear();
        powerhaAutomationServiceService.enableRetries();
        __listServiceInstanceEventsTest();

        // disable retries and test again
        createRequestMock.mockClear();
        powerhaAutomationServiceService.disableRetries();
        __listServiceInstanceEventsTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const phaInstanceId = '8eefautr-4c02-0009-0086-8bd4d8cf61b6';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const listServiceInstanceEventsParams = {
          phaInstanceId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        powerhaAutomationServiceService.listServiceInstanceEvents(listServiceInstanceEventsParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await powerhaAutomationServiceService.listServiceInstanceEvents({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await powerhaAutomationServiceService.listServiceInstanceEvents();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('getServiceInstanceEvent', () => {
    describe('positive tests', () => {
      function __getServiceInstanceEventTest() {
        // Construct the params object for operation getServiceInstanceEvent
        const phaInstanceId = '8eefautr-4c02-0009-0086-8bd4d8cf61b6';
        const eventId = '00116b2a-9326-4024-839e-fb5364b76898';
        const acceptLanguage = 'en-US';
        const ifNoneMatch = 'abcdef';
        const getServiceInstanceEventParams = {
          phaInstanceId,
          eventId,
          acceptLanguage,
          ifNoneMatch,
        };

        const getServiceInstanceEventResult =
          powerhaAutomationServiceService.getServiceInstanceEvent(getServiceInstanceEventParams);

        // all methods should return a Promise
        expectToBePromise(getServiceInstanceEventResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(
          mockRequestOptions,
          '/powerha_automation/v1/service_instances/{pha_instance_id}/events/{event_id}',
          'GET'
        );
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'Accept-Language', acceptLanguage);
        checkUserHeader(createRequestMock, 'If-None-Match', ifNoneMatch);
        expect(mockRequestOptions.path.pha_instance_id).toEqual(phaInstanceId);
        expect(mockRequestOptions.path.event_id).toEqual(eventId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getServiceInstanceEventTest();

        // enable retries and test again
        createRequestMock.mockClear();
        powerhaAutomationServiceService.enableRetries();
        __getServiceInstanceEventTest();

        // disable retries and test again
        createRequestMock.mockClear();
        powerhaAutomationServiceService.disableRetries();
        __getServiceInstanceEventTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const phaInstanceId = '8eefautr-4c02-0009-0086-8bd4d8cf61b6';
        const eventId = '00116b2a-9326-4024-839e-fb5364b76898';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getServiceInstanceEventParams = {
          phaInstanceId,
          eventId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        powerhaAutomationServiceService.getServiceInstanceEvent(getServiceInstanceEventParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await powerhaAutomationServiceService.getServiceInstanceEvent({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await powerhaAutomationServiceService.getServiceInstanceEvent();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });
});
