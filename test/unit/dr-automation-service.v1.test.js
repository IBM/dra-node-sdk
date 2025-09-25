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
  url: 'https://power-dra.test.cloud.ibm.com/drautomation/v1',
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

  describe('getServiceInstanceKeyV1', () => {
    describe('positive tests', () => {
      function __getServiceInstanceKeyV1Test() {
        // Construct the params object for operation getServiceInstanceKeyV1
        const instanceId =
          'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::';
        const acceptLanguage = 'testString';
        const ifNoneMatch = 'testString';
        const getServiceInstanceKeyV1Params = {
          instanceId,
          acceptLanguage,
          ifNoneMatch,
        };

        const getServiceInstanceKeyV1Result = drAutomationServiceService.getServiceInstanceKeyV1(
          getServiceInstanceKeyV1Params
        );

        // all methods should return a Promise
        expectToBePromise(getServiceInstanceKeyV1Result);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/drautomation/v1/apikey/{instance_id}', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'Accept-Language', acceptLanguage);
        checkUserHeader(createRequestMock, 'If-None-Match', ifNoneMatch);
        expect(mockRequestOptions.path.instance_id).toEqual(instanceId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getServiceInstanceKeyV1Test();

        // enable retries and test again
        createRequestMock.mockClear();
        drAutomationServiceService.enableRetries();
        __getServiceInstanceKeyV1Test();

        // disable retries and test again
        createRequestMock.mockClear();
        drAutomationServiceService.disableRetries();
        __getServiceInstanceKeyV1Test();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const instanceId =
          'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getServiceInstanceKeyV1Params = {
          instanceId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        drAutomationServiceService.getServiceInstanceKeyV1(getServiceInstanceKeyV1Params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await drAutomationServiceService.getServiceInstanceKeyV1({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await drAutomationServiceService.getServiceInstanceKeyV1();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('createServiceInstanceKeyValidation', () => {
    describe('positive tests', () => {
      function __createServiceInstanceKeyValidationTest() {
        // Construct the params object for operation createServiceInstanceKeyValidation
        const instanceId =
          'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::';
        const apiKey = 'abcdefrg_izklmnop_fxbEED';
        const acceptLanguage = 'testString';
        const ifNoneMatch = 'testString';
        const createServiceInstanceKeyValidationParams = {
          instanceId,
          apiKey,
          acceptLanguage,
          ifNoneMatch,
        };

        const createServiceInstanceKeyValidationResult =
          drAutomationServiceService.createServiceInstanceKeyValidation(
            createServiceInstanceKeyValidationParams
          );

        // all methods should return a Promise
        expectToBePromise(createServiceInstanceKeyValidationResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/drautomation/v1/apikey/{instance_id}', 'POST');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'Accept-Language', acceptLanguage);
        checkUserHeader(createRequestMock, 'If-None-Match', ifNoneMatch);
        expect(mockRequestOptions.body.api_key).toEqual(apiKey);
        expect(mockRequestOptions.path.instance_id).toEqual(instanceId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __createServiceInstanceKeyValidationTest();

        // enable retries and test again
        createRequestMock.mockClear();
        drAutomationServiceService.enableRetries();
        __createServiceInstanceKeyValidationTest();

        // disable retries and test again
        createRequestMock.mockClear();
        drAutomationServiceService.disableRetries();
        __createServiceInstanceKeyValidationTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const instanceId =
          'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::';
        const apiKey = 'abcdefrg_izklmnop_fxbEED';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const createServiceInstanceKeyValidationParams = {
          instanceId,
          apiKey,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        drAutomationServiceService.createServiceInstanceKeyValidation(
          createServiceInstanceKeyValidationParams
        );
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await drAutomationServiceService.createServiceInstanceKeyValidation({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await drAutomationServiceService.createServiceInstanceKeyValidation();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('replaceServiceInstanceApiKey', () => {
    describe('positive tests', () => {
      function __replaceServiceInstanceApiKeyTest() {
        // Construct the params object for operation replaceServiceInstanceApiKey
        const instanceId =
          'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::';
        const apiKey = 'adfadfdsafsdfdsf';
        const acceptLanguage = 'testString';
        const ifNoneMatch = 'testString';
        const replaceServiceInstanceApiKeyParams = {
          instanceId,
          apiKey,
          acceptLanguage,
          ifNoneMatch,
        };

        const replaceServiceInstanceApiKeyResult =
          drAutomationServiceService.replaceServiceInstanceApiKey(
            replaceServiceInstanceApiKeyParams
          );

        // all methods should return a Promise
        expectToBePromise(replaceServiceInstanceApiKeyResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/drautomation/v1/apikey/{instance_id}', 'PUT');
        const expectedAccept = 'application/json';
        const expectedContentType = 'application/json';
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'Accept-Language', acceptLanguage);
        checkUserHeader(createRequestMock, 'If-None-Match', ifNoneMatch);
        expect(mockRequestOptions.body.api_key).toEqual(apiKey);
        expect(mockRequestOptions.path.instance_id).toEqual(instanceId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __replaceServiceInstanceApiKeyTest();

        // enable retries and test again
        createRequestMock.mockClear();
        drAutomationServiceService.enableRetries();
        __replaceServiceInstanceApiKeyTest();

        // disable retries and test again
        createRequestMock.mockClear();
        drAutomationServiceService.disableRetries();
        __replaceServiceInstanceApiKeyTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const instanceId =
          'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::';
        const apiKey = 'adfadfdsafsdfdsf';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const replaceServiceInstanceApiKeyParams = {
          instanceId,
          apiKey,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        drAutomationServiceService.replaceServiceInstanceApiKey(replaceServiceInstanceApiKeyParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await drAutomationServiceService.replaceServiceInstanceApiKey({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await drAutomationServiceService.replaceServiceInstanceApiKey();
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
        const instanceId =
          'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::';
        const acceptLanguage = 'testString';
        const ifNoneMatch = 'testString';
        const getDrGrsLocationPairParams = {
          instanceId,
          acceptLanguage,
          ifNoneMatch,
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
        checkUserHeader(createRequestMock, 'If-None-Match', ifNoneMatch);
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
        const instanceId =
          'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::';
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

  describe('getDrLocation', () => {
    describe('positive tests', () => {
      function __getDrLocationTest() {
        // Construct the params object for operation getDrLocation
        const instanceId =
          'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::';
        const acceptLanguage = 'testString';
        const ifNoneMatch = 'testString';
        const getDrLocationParams = {
          instanceId,
          acceptLanguage,
          ifNoneMatch,
        };

        const getDrLocationResult = drAutomationServiceService.getDrLocation(getDrLocationParams);

        // all methods should return a Promise
        expectToBePromise(getDrLocationResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/drautomation/v1/dr_locations/{instance_id}', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'Accept-Language', acceptLanguage);
        checkUserHeader(createRequestMock, 'If-None-Match', ifNoneMatch);
        expect(mockRequestOptions.path.instance_id).toEqual(instanceId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getDrLocationTest();

        // enable retries and test again
        createRequestMock.mockClear();
        drAutomationServiceService.enableRetries();
        __getDrLocationTest();

        // disable retries and test again
        createRequestMock.mockClear();
        drAutomationServiceService.disableRetries();
        __getDrLocationTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const instanceId =
          'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getDrLocationParams = {
          instanceId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        drAutomationServiceService.getDrLocation(getDrLocationParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await drAutomationServiceService.getDrLocation({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await drAutomationServiceService.getDrLocation();
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
        const instanceId =
          'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::';
        const acceptLanguage = 'testString';
        const ifNoneMatch = 'testString';
        const getDrManagedVmParams = {
          instanceId,
          acceptLanguage,
          ifNoneMatch,
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
        checkUserHeader(createRequestMock, 'If-None-Match', ifNoneMatch);
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
        const instanceId =
          'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::';
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
        const instanceId =
          'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::';
        const acceptLanguage = 'testString';
        const ifNoneMatch = 'testString';
        const getDrSummaryParams = {
          instanceId,
          acceptLanguage,
          ifNoneMatch,
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
        checkUserHeader(createRequestMock, 'If-None-Match', ifNoneMatch);
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
        const instanceId =
          'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::';
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

  describe('getValidateClusterType', () => {
    describe('positive tests', () => {
      function __getValidateClusterTypeTest() {
        // Construct the params object for operation getValidateClusterType
        const instanceId =
          'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::';
        const orchestratorClusterType = 'on-premises';
        const acceptLanguage = 'testString';
        const ifNoneMatch = 'testString';
        const getValidateClusterTypeParams = {
          instanceId,
          orchestratorClusterType,
          acceptLanguage,
          ifNoneMatch,
        };

        const getValidateClusterTypeResult = drAutomationServiceService.getValidateClusterType(
          getValidateClusterTypeParams
        );

        // all methods should return a Promise
        expectToBePromise(getValidateClusterTypeResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(
          mockRequestOptions,
          '/drautomation/v1/validate_cluster_type/{instance_id}',
          'GET'
        );
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'Accept-Language', acceptLanguage);
        checkUserHeader(createRequestMock, 'If-None-Match', ifNoneMatch);
        expect(mockRequestOptions.qs.orchestrator_cluster_type).toEqual(orchestratorClusterType);
        expect(mockRequestOptions.path.instance_id).toEqual(instanceId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getValidateClusterTypeTest();

        // enable retries and test again
        createRequestMock.mockClear();
        drAutomationServiceService.enableRetries();
        __getValidateClusterTypeTest();

        // disable retries and test again
        createRequestMock.mockClear();
        drAutomationServiceService.disableRetries();
        __getValidateClusterTypeTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const instanceId =
          'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::';
        const orchestratorClusterType = 'on-premises';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getValidateClusterTypeParams = {
          instanceId,
          orchestratorClusterType,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        drAutomationServiceService.getValidateClusterType(getValidateClusterTypeParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await drAutomationServiceService.getValidateClusterType({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await drAutomationServiceService.getValidateClusterType();
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
        const instanceId =
          'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::';
        const primaryWorkspaceName = 'Test-workspace-wdc06';
        const acceptLanguage = 'testString';
        const ifNoneMatch = 'testString';
        const standbyWorkspaceName = 'Test-workspace-wdc07';
        const getMachineTypeParams = {
          instanceId,
          primaryWorkspaceName,
          acceptLanguage,
          ifNoneMatch,
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
        checkUserHeader(createRequestMock, 'If-None-Match', ifNoneMatch);
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
        const instanceId =
          'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::';
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

  describe('getSchematicWorkspace', () => {
    describe('positive tests', () => {
      function __getSchematicWorkspaceTest() {
        // Construct the params object for operation getSchematicWorkspace
        const instanceId =
          'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::';
        const ifNoneMatch = 'testString';
        const getSchematicWorkspaceParams = {
          instanceId,
          ifNoneMatch,
        };

        const getSchematicWorkspaceResult = drAutomationServiceService.getSchematicWorkspace(
          getSchematicWorkspaceParams
        );

        // all methods should return a Promise
        expectToBePromise(getSchematicWorkspaceResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(
          mockRequestOptions,
          '/drautomation/v1/schematics_workspaces/{instance_id}',
          'GET'
        );
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'If-None-Match', ifNoneMatch);
        expect(mockRequestOptions.path.instance_id).toEqual(instanceId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getSchematicWorkspaceTest();

        // enable retries and test again
        createRequestMock.mockClear();
        drAutomationServiceService.enableRetries();
        __getSchematicWorkspaceTest();

        // disable retries and test again
        createRequestMock.mockClear();
        drAutomationServiceService.disableRetries();
        __getSchematicWorkspaceTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const instanceId =
          'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getSchematicWorkspaceParams = {
          instanceId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        drAutomationServiceService.getSchematicWorkspace(getSchematicWorkspaceParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await drAutomationServiceService.getSchematicWorkspace({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await drAutomationServiceService.getSchematicWorkspace();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('getValidatePowerVsWorkspace', () => {
    describe('positive tests', () => {
      function __getValidatePowerVsWorkspaceTest() {
        // Construct the params object for operation getValidatePowerVsWorkspace
        const instanceId =
          'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::';
        const workspaceId = '75cbf05b-78f6-406e-afe7-a904f646d798';
        const crn =
          'crn:v1:bluemix:public:power-iaas:dal10:a/094f4214c75941f991da601b001df1fe:75cbf05b-78f6-406e-afe7-a904f646d798::';
        const locationUrl = 'https://us-south.power-iaas.cloud.ibm.com';
        const ifNoneMatch = 'testString';
        const getValidatePowerVsWorkspaceParams = {
          instanceId,
          workspaceId,
          crn,
          locationUrl,
          ifNoneMatch,
        };

        const getValidatePowerVsWorkspaceResult =
          drAutomationServiceService.getValidatePowerVsWorkspace(getValidatePowerVsWorkspaceParams);

        // all methods should return a Promise
        expectToBePromise(getValidatePowerVsWorkspaceResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(
          mockRequestOptions,
          '/drautomation/v1/validate_power_vs_workspace/{instance_id}',
          'GET'
        );
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'If-None-Match', ifNoneMatch);
        expect(mockRequestOptions.qs.workspace_id).toEqual(workspaceId);
        expect(mockRequestOptions.qs.crn).toEqual(crn);
        expect(mockRequestOptions.qs.location_url).toEqual(locationUrl);
        expect(mockRequestOptions.path.instance_id).toEqual(instanceId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getValidatePowerVsWorkspaceTest();

        // enable retries and test again
        createRequestMock.mockClear();
        drAutomationServiceService.enableRetries();
        __getValidatePowerVsWorkspaceTest();

        // disable retries and test again
        createRequestMock.mockClear();
        drAutomationServiceService.disableRetries();
        __getValidatePowerVsWorkspaceTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const instanceId =
          'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::';
        const workspaceId = '75cbf05b-78f6-406e-afe7-a904f646d798';
        const crn =
          'crn:v1:bluemix:public:power-iaas:dal10:a/094f4214c75941f991da601b001df1fe:75cbf05b-78f6-406e-afe7-a904f646d798::';
        const locationUrl = 'https://us-south.power-iaas.cloud.ibm.com';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getValidatePowerVsWorkspaceParams = {
          instanceId,
          workspaceId,
          crn,
          locationUrl,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        drAutomationServiceService.getValidatePowerVsWorkspace(getValidatePowerVsWorkspaceParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await drAutomationServiceService.getValidatePowerVsWorkspace({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await drAutomationServiceService.getValidatePowerVsWorkspace();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('getValidateProxyip', () => {
    describe('positive tests', () => {
      function __getValidateProxyipTest() {
        // Construct the params object for operation getValidateProxyip
        const instanceId =
          'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::';
        const proxyip = '10.30.40.5:3128';
        const vpcLocation = 'us-south';
        const vpcId = 'r006-2f3b3ab9-2149-49cc-83a1-30a5d93d59b2';
        const ifNoneMatch = 'testString';
        const getValidateProxyipParams = {
          instanceId,
          proxyip,
          vpcLocation,
          vpcId,
          ifNoneMatch,
        };

        const getValidateProxyipResult =
          drAutomationServiceService.getValidateProxyip(getValidateProxyipParams);

        // all methods should return a Promise
        expectToBePromise(getValidateProxyipResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(
          mockRequestOptions,
          '/drautomation/v1/validate_proxyip/{instance_id}',
          'GET'
        );
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'If-None-Match', ifNoneMatch);
        expect(mockRequestOptions.qs.proxyip).toEqual(proxyip);
        expect(mockRequestOptions.qs.vpc_location).toEqual(vpcLocation);
        expect(mockRequestOptions.qs.vpc_id).toEqual(vpcId);
        expect(mockRequestOptions.path.instance_id).toEqual(instanceId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getValidateProxyipTest();

        // enable retries and test again
        createRequestMock.mockClear();
        drAutomationServiceService.enableRetries();
        __getValidateProxyipTest();

        // disable retries and test again
        createRequestMock.mockClear();
        drAutomationServiceService.disableRetries();
        __getValidateProxyipTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const instanceId =
          'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::';
        const proxyip = '10.30.40.5:3128';
        const vpcLocation = 'us-south';
        const vpcId = 'r006-2f3b3ab9-2149-49cc-83a1-30a5d93d59b2';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getValidateProxyipParams = {
          instanceId,
          proxyip,
          vpcLocation,
          vpcId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        drAutomationServiceService.getValidateProxyip(getValidateProxyipParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await drAutomationServiceService.getValidateProxyip({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await drAutomationServiceService.getValidateProxyip();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('getPvsworkspacesCustomVpc', () => {
    describe('positive tests', () => {
      function __getPvsworkspacesCustomVpcTest() {
        // Construct the params object for operation getPvsworkspacesCustomVpc
        const instanceId =
          'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::';
        const locationId = 'testString';
        const vpcId = 'r006-2f3b3ab9-2149-49cc-83a1-30a5d93d59b2';
        const tgId = '925a7b81-a826-4d0a-8ef9-7496e9dc58bc';
        const ifNoneMatch = 'testString';
        const getPvsworkspacesCustomVpcParams = {
          instanceId,
          locationId,
          vpcId,
          tgId,
          ifNoneMatch,
        };

        const getPvsworkspacesCustomVpcResult =
          drAutomationServiceService.getPvsworkspacesCustomVpc(getPvsworkspacesCustomVpcParams);

        // all methods should return a Promise
        expectToBePromise(getPvsworkspacesCustomVpcResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(
          mockRequestOptions,
          '/drautomation/v1/workspaces_custom_vpc/{instance_id}',
          'GET'
        );
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'If-None-Match', ifNoneMatch);
        expect(mockRequestOptions.qs.location_id).toEqual(locationId);
        expect(mockRequestOptions.qs.vpc_id).toEqual(vpcId);
        expect(mockRequestOptions.qs.tg_id).toEqual(tgId);
        expect(mockRequestOptions.path.instance_id).toEqual(instanceId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getPvsworkspacesCustomVpcTest();

        // enable retries and test again
        createRequestMock.mockClear();
        drAutomationServiceService.enableRetries();
        __getPvsworkspacesCustomVpcTest();

        // disable retries and test again
        createRequestMock.mockClear();
        drAutomationServiceService.disableRetries();
        __getPvsworkspacesCustomVpcTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const instanceId =
          'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::';
        const locationId = 'testString';
        const vpcId = 'r006-2f3b3ab9-2149-49cc-83a1-30a5d93d59b2';
        const tgId = '925a7b81-a826-4d0a-8ef9-7496e9dc58bc';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getPvsworkspacesCustomVpcParams = {
          instanceId,
          locationId,
          vpcId,
          tgId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        drAutomationServiceService.getPvsworkspacesCustomVpc(getPvsworkspacesCustomVpcParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await drAutomationServiceService.getPvsworkspacesCustomVpc({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await drAutomationServiceService.getPvsworkspacesCustomVpc();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('getPvsworkspaceSchematic', () => {
    describe('positive tests', () => {
      function __getPvsworkspaceSchematicTest() {
        // Construct the params object for operation getPvsworkspaceSchematic
        const instanceId =
          'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::';
        const schematicId = 'us-south.workspace.projects-service.3ae96a02';
        const locationId = 'testString';
        const ifNoneMatch = 'testString';
        const getPvsworkspaceSchematicParams = {
          instanceId,
          schematicId,
          locationId,
          ifNoneMatch,
        };

        const getPvsworkspaceSchematicResult = drAutomationServiceService.getPvsworkspaceSchematic(
          getPvsworkspaceSchematicParams
        );

        // all methods should return a Promise
        expectToBePromise(getPvsworkspaceSchematicResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(
          mockRequestOptions,
          '/drautomation/v1/workspaces_schematic/{instance_id}',
          'GET'
        );
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'If-None-Match', ifNoneMatch);
        expect(mockRequestOptions.qs.schematic_id).toEqual(schematicId);
        expect(mockRequestOptions.qs.location_id).toEqual(locationId);
        expect(mockRequestOptions.path.instance_id).toEqual(instanceId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getPvsworkspaceSchematicTest();

        // enable retries and test again
        createRequestMock.mockClear();
        drAutomationServiceService.enableRetries();
        __getPvsworkspaceSchematicTest();

        // disable retries and test again
        createRequestMock.mockClear();
        drAutomationServiceService.disableRetries();
        __getPvsworkspaceSchematicTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const instanceId =
          'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::';
        const schematicId = 'us-south.workspace.projects-service.3ae96a02';
        const locationId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getPvsworkspaceSchematicParams = {
          instanceId,
          schematicId,
          locationId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        drAutomationServiceService.getPvsworkspaceSchematic(getPvsworkspaceSchematicParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await drAutomationServiceService.getPvsworkspaceSchematic({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await drAutomationServiceService.getPvsworkspaceSchematic();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('getManageDr', () => {
    describe('positive tests', () => {
      function __getManageDrTest() {
        // Construct the params object for operation getManageDr
        const instanceId =
          'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::';
        const acceptLanguage = 'testString';
        const ifNoneMatch = 'testString';
        const getManageDrParams = {
          instanceId,
          acceptLanguage,
          ifNoneMatch,
        };

        const getManageDrResult = drAutomationServiceService.getManageDr(getManageDrParams);

        // all methods should return a Promise
        expectToBePromise(getManageDrResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(mockRequestOptions, '/drautomation/v1/manage_dr/{instance_id}', 'GET');
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'Accept-Language', acceptLanguage);
        checkUserHeader(createRequestMock, 'If-None-Match', ifNoneMatch);
        expect(mockRequestOptions.path.instance_id).toEqual(instanceId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getManageDrTest();

        // enable retries and test again
        createRequestMock.mockClear();
        drAutomationServiceService.enableRetries();
        __getManageDrTest();

        // disable retries and test again
        createRequestMock.mockClear();
        drAutomationServiceService.disableRetries();
        __getManageDrTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const instanceId =
          'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getManageDrParams = {
          instanceId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        drAutomationServiceService.getManageDr(getManageDrParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await drAutomationServiceService.getManageDr({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await drAutomationServiceService.getManageDr();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('createManageDr', () => {
    describe('positive tests', () => {
      // Request models needed by this operation.

      // Context
      const contextModel = {
        dr_location_id: 'dal10',
        dr_orchestrator_name: 'drautomationprimary',
        dr_orchestrator_password: 'Password1234567',
        dr_orchestrator_workspace_id: '75cbf05b-78f6-406e-afe7-a904f646d798',
        machine_type: 's922',
        orchestrator_cluster_type: 'off-premises',
        schematic_workspace_id: 'us-south.workspace.projects-service.3ae96a02',
        ssh_key_name: 'vijaykey',
        standby_machine_type: 's922',
        standby_orchestrator_name: 'drautomationstandby',
        standby_orchestrator_workspace_id: '71027b79-0e31-44f6-a499-63eca1a66feb',
        tier: 'tier1',
      };

      // ManageDrParameters
      const manageDrParametersModel = {
        location: 'us-south',
        optional_param: 'parameter required by your service',
      };

      function __createManageDrTest() {
        // Construct the params object for operation createManageDr
        const instanceId =
          'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::';
        const standByRedeploy = 'true';
        const context = contextModel;
        const planId = 'plan1234';
        const serviceId = 'service1234';
        const action = 'done';
        const parameters = manageDrParametersModel;
        const acceptLanguage = 'testString';
        const ifNoneMatch = 'testString';
        const acceptsIncomplete = true;
        const createManageDrParams = {
          instanceId,
          standByRedeploy,
          context,
          planId,
          serviceId,
          action,
          parameters,
          acceptLanguage,
          ifNoneMatch,
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
        checkUserHeader(createRequestMock, 'If-None-Match', ifNoneMatch);
        expect(mockRequestOptions.body.context).toEqual(context);
        expect(mockRequestOptions.body.plan_id).toEqual(planId);
        expect(mockRequestOptions.body.service_id).toEqual(serviceId);
        expect(mockRequestOptions.body.action).toEqual(action);
        expect(mockRequestOptions.body.parameters).toEqual(parameters);
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
        const instanceId =
          'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::';
        const standByRedeploy = 'true';
        const context = contextModel;
        const planId = 'plan1234';
        const serviceId = 'service1234';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const createManageDrParams = {
          instanceId,
          standByRedeploy,
          context,
          planId,
          serviceId,
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

  describe('getServiceInstanceDrDeployment', () => {
    describe('positive tests', () => {
      function __getServiceInstanceDrDeploymentTest() {
        // Construct the params object for operation getServiceInstanceDrDeployment
        const instanceId =
          'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::';
        const ifNoneMatch = 'testString';
        const getServiceInstanceDrDeploymentParams = {
          instanceId,
          ifNoneMatch,
        };

        const getServiceInstanceDrDeploymentResult =
          drAutomationServiceService.getServiceInstanceDrDeployment(
            getServiceInstanceDrDeploymentParams
          );

        // all methods should return a Promise
        expectToBePromise(getServiceInstanceDrDeploymentResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(
          mockRequestOptions,
          '/drautomation/v1/dr_deployment/{instance_id}',
          'GET'
        );
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'If-None-Match', ifNoneMatch);
        expect(mockRequestOptions.path.instance_id).toEqual(instanceId);
      }

      test('should pass the right params to createRequest with enable and disable retries', () => {
        // baseline test
        __getServiceInstanceDrDeploymentTest();

        // enable retries and test again
        createRequestMock.mockClear();
        drAutomationServiceService.enableRetries();
        __getServiceInstanceDrDeploymentTest();

        // disable retries and test again
        createRequestMock.mockClear();
        drAutomationServiceService.disableRetries();
        __getServiceInstanceDrDeploymentTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const instanceId =
          'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getServiceInstanceDrDeploymentParams = {
          instanceId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        drAutomationServiceService.getServiceInstanceDrDeployment(
          getServiceInstanceDrDeploymentParams
        );
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await drAutomationServiceService.getServiceInstanceDrDeployment({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await drAutomationServiceService.getServiceInstanceDrDeployment();
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
        const instanceId =
          'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::';
        const acceptLanguage = 'testString';
        const ifNoneMatch = 'testString';
        const getLastOperationParams = {
          instanceId,
          acceptLanguage,
          ifNoneMatch,
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
        checkUserHeader(createRequestMock, 'If-None-Match', ifNoneMatch);
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
        const instanceId =
          'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::';
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
        const provisionId =
          'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::';
        const time = '2025-06-19T23:59:59Z';
        const fromTime = '2025-06-19T00:00:00Z';
        const toTime = '2025-06-19T23:59:59Z';
        const acceptLanguage = 'testString';
        const ifNoneMatch = 'testString';
        const listEventsParams = {
          provisionId,
          time,
          fromTime,
          toTime,
          acceptLanguage,
          ifNoneMatch,
        };

        const listEventsResult = drAutomationServiceService.listEvents(listEventsParams);

        // all methods should return a Promise
        expectToBePromise(listEventsResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(
          mockRequestOptions,
          '/drautomation/v1/service_instances/{provision_id}/events',
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
        expect(mockRequestOptions.path.provision_id).toEqual(provisionId);
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
        const provisionId =
          'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const listEventsParams = {
          provisionId,
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
        const provisionId =
          'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::';
        const eventId = '00116b2a-9326-4024-839e-fb5364b76898';
        const acceptLanguage = 'testString';
        const ifNoneMatch = 'testString';
        const getEventParams = {
          provisionId,
          eventId,
          acceptLanguage,
          ifNoneMatch,
        };

        const getEventResult = drAutomationServiceService.getEvent(getEventParams);

        // all methods should return a Promise
        expectToBePromise(getEventResult);

        // assert that create request was called
        expect(createRequestMock).toHaveBeenCalledTimes(1);

        const mockRequestOptions = getOptions(createRequestMock);

        checkUrlAndMethod(
          mockRequestOptions,
          '/drautomation/v1/service_instances/{provision_id}/events/{event_id}',
          'GET'
        );
        const expectedAccept = 'application/json';
        const expectedContentType = undefined;
        checkMediaHeaders(createRequestMock, expectedAccept, expectedContentType);
        checkUserHeader(createRequestMock, 'Accept-Language', acceptLanguage);
        checkUserHeader(createRequestMock, 'If-None-Match', ifNoneMatch);
        expect(mockRequestOptions.path.provision_id).toEqual(provisionId);
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
        const provisionId =
          'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::';
        const eventId = '00116b2a-9326-4024-839e-fb5364b76898';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const getEventParams = {
          provisionId,
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
