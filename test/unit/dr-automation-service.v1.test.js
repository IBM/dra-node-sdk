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

  describe('serviceInstanceGetKeyV1', () => {
    describe('positive tests', () => {
      function __serviceInstanceGetKeyV1Test() {
        // Construct the params object for operation serviceInstanceGetKeyV1
        const instanceId =
          'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::';
        const acceptLanguage = 'testString';
        const ifNoneMatch = 'testString';
        const serviceInstanceGetKeyV1Params = {
          instanceId,
          acceptLanguage,
          ifNoneMatch,
        };

        const serviceInstanceGetKeyV1Result = drAutomationServiceService.serviceInstanceGetKeyV1(
          serviceInstanceGetKeyV1Params
        );

        // all methods should return a Promise
        expectToBePromise(serviceInstanceGetKeyV1Result);

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
        __serviceInstanceGetKeyV1Test();

        // enable retries and test again
        createRequestMock.mockClear();
        drAutomationServiceService.enableRetries();
        __serviceInstanceGetKeyV1Test();

        // disable retries and test again
        createRequestMock.mockClear();
        drAutomationServiceService.disableRetries();
        __serviceInstanceGetKeyV1Test();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const instanceId =
          'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const serviceInstanceGetKeyV1Params = {
          instanceId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        drAutomationServiceService.serviceInstanceGetKeyV1(serviceInstanceGetKeyV1Params);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await drAutomationServiceService.serviceInstanceGetKeyV1({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await drAutomationServiceService.serviceInstanceGetKeyV1();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('serviceInstanceValidateKey', () => {
    describe('positive tests', () => {
      function __serviceInstanceValidateKeyTest() {
        // Construct the params object for operation serviceInstanceValidateKey
        const instanceId =
          'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::';
        const apiKey = 'abcdefrg_izklmnop_fxbEED';
        const acceptLanguage = 'testString';
        const ifNoneMatch = 'testString';
        const serviceInstanceValidateKeyParams = {
          instanceId,
          apiKey,
          acceptLanguage,
          ifNoneMatch,
        };

        const serviceInstanceValidateKeyResult =
          drAutomationServiceService.serviceInstanceValidateKey(serviceInstanceValidateKeyParams);

        // all methods should return a Promise
        expectToBePromise(serviceInstanceValidateKeyResult);

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
        __serviceInstanceValidateKeyTest();

        // enable retries and test again
        createRequestMock.mockClear();
        drAutomationServiceService.enableRetries();
        __serviceInstanceValidateKeyTest();

        // disable retries and test again
        createRequestMock.mockClear();
        drAutomationServiceService.disableRetries();
        __serviceInstanceValidateKeyTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const instanceId =
          'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::';
        const apiKey = 'abcdefrg_izklmnop_fxbEED';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const serviceInstanceValidateKeyParams = {
          instanceId,
          apiKey,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        drAutomationServiceService.serviceInstanceValidateKey(serviceInstanceValidateKeyParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await drAutomationServiceService.serviceInstanceValidateKey({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await drAutomationServiceService.serviceInstanceValidateKey();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('serviceInstanceUpdateApiKey', () => {
    describe('positive tests', () => {
      function __serviceInstanceUpdateApiKeyTest() {
        // Construct the params object for operation serviceInstanceUpdateApiKey
        const instanceId =
          'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::';
        const apiKey = 'adfadfdsafsdfdsf';
        const acceptLanguage = 'testString';
        const ifNoneMatch = 'testString';
        const serviceInstanceUpdateApiKeyParams = {
          instanceId,
          apiKey,
          acceptLanguage,
          ifNoneMatch,
        };

        const serviceInstanceUpdateApiKeyResult =
          drAutomationServiceService.serviceInstanceUpdateApiKey(serviceInstanceUpdateApiKeyParams);

        // all methods should return a Promise
        expectToBePromise(serviceInstanceUpdateApiKeyResult);

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
        __serviceInstanceUpdateApiKeyTest();

        // enable retries and test again
        createRequestMock.mockClear();
        drAutomationServiceService.enableRetries();
        __serviceInstanceUpdateApiKeyTest();

        // disable retries and test again
        createRequestMock.mockClear();
        drAutomationServiceService.disableRetries();
        __serviceInstanceUpdateApiKeyTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const instanceId =
          'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::';
        const apiKey = 'adfadfdsafsdfdsf';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const serviceInstanceUpdateApiKeyParams = {
          instanceId,
          apiKey,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        drAutomationServiceService.serviceInstanceUpdateApiKey(serviceInstanceUpdateApiKeyParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await drAutomationServiceService.serviceInstanceUpdateApiKey({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await drAutomationServiceService.serviceInstanceUpdateApiKey();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('drGrsLocationPairsDetails', () => {
    describe('positive tests', () => {
      function __drGrsLocationPairsDetailsTest() {
        // Construct the params object for operation drGrsLocationPairsDetails
        const instanceId =
          'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::';
        const acceptLanguage = 'testString';
        const ifNoneMatch = 'testString';
        const drGrsLocationPairsDetailsParams = {
          instanceId,
          acceptLanguage,
          ifNoneMatch,
        };

        const drGrsLocationPairsDetailsResult =
          drAutomationServiceService.drGrsLocationPairsDetails(drGrsLocationPairsDetailsParams);

        // all methods should return a Promise
        expectToBePromise(drGrsLocationPairsDetailsResult);

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
        __drGrsLocationPairsDetailsTest();

        // enable retries and test again
        createRequestMock.mockClear();
        drAutomationServiceService.enableRetries();
        __drGrsLocationPairsDetailsTest();

        // disable retries and test again
        createRequestMock.mockClear();
        drAutomationServiceService.disableRetries();
        __drGrsLocationPairsDetailsTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const instanceId =
          'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const drGrsLocationPairsDetailsParams = {
          instanceId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        drAutomationServiceService.drGrsLocationPairsDetails(drGrsLocationPairsDetailsParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await drAutomationServiceService.drGrsLocationPairsDetails({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await drAutomationServiceService.drGrsLocationPairsDetails();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('serviceInstanceGetdrlocations', () => {
    describe('positive tests', () => {
      function __serviceInstanceGetdrlocationsTest() {
        // Construct the params object for operation serviceInstanceGetdrlocations
        const instanceId =
          'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::';
        const acceptLanguage = 'testString';
        const ifNoneMatch = 'testString';
        const serviceInstanceGetdrlocationsParams = {
          instanceId,
          acceptLanguage,
          ifNoneMatch,
        };

        const serviceInstanceGetdrlocationsResult =
          drAutomationServiceService.serviceInstanceGetdrlocations(
            serviceInstanceGetdrlocationsParams
          );

        // all methods should return a Promise
        expectToBePromise(serviceInstanceGetdrlocationsResult);

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
        __serviceInstanceGetdrlocationsTest();

        // enable retries and test again
        createRequestMock.mockClear();
        drAutomationServiceService.enableRetries();
        __serviceInstanceGetdrlocationsTest();

        // disable retries and test again
        createRequestMock.mockClear();
        drAutomationServiceService.disableRetries();
        __serviceInstanceGetdrlocationsTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const instanceId =
          'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const serviceInstanceGetdrlocationsParams = {
          instanceId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        drAutomationServiceService.serviceInstanceGetdrlocations(
          serviceInstanceGetdrlocationsParams
        );
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await drAutomationServiceService.serviceInstanceGetdrlocations({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await drAutomationServiceService.serviceInstanceGetdrlocations();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('drManagedVmsDetails', () => {
    describe('positive tests', () => {
      function __drManagedVmsDetailsTest() {
        // Construct the params object for operation drManagedVmsDetails
        const instanceId =
          'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::';
        const acceptLanguage = 'testString';
        const ifNoneMatch = 'testString';
        const drManagedVmsDetailsParams = {
          instanceId,
          acceptLanguage,
          ifNoneMatch,
        };

        const drManagedVmsDetailsResult =
          drAutomationServiceService.drManagedVmsDetails(drManagedVmsDetailsParams);

        // all methods should return a Promise
        expectToBePromise(drManagedVmsDetailsResult);

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
        __drManagedVmsDetailsTest();

        // enable retries and test again
        createRequestMock.mockClear();
        drAutomationServiceService.enableRetries();
        __drManagedVmsDetailsTest();

        // disable retries and test again
        createRequestMock.mockClear();
        drAutomationServiceService.disableRetries();
        __drManagedVmsDetailsTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const instanceId =
          'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const drManagedVmsDetailsParams = {
          instanceId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        drAutomationServiceService.drManagedVmsDetails(drManagedVmsDetailsParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await drAutomationServiceService.drManagedVmsDetails({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await drAutomationServiceService.drManagedVmsDetails();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('drSummaryDetails', () => {
    describe('positive tests', () => {
      function __drSummaryDetailsTest() {
        // Construct the params object for operation drSummaryDetails
        const instanceId =
          'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::';
        const acceptLanguage = 'testString';
        const ifNoneMatch = 'testString';
        const drSummaryDetailsParams = {
          instanceId,
          acceptLanguage,
          ifNoneMatch,
        };

        const drSummaryDetailsResult =
          drAutomationServiceService.drSummaryDetails(drSummaryDetailsParams);

        // all methods should return a Promise
        expectToBePromise(drSummaryDetailsResult);

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
        __drSummaryDetailsTest();

        // enable retries and test again
        createRequestMock.mockClear();
        drAutomationServiceService.enableRetries();
        __drSummaryDetailsTest();

        // disable retries and test again
        createRequestMock.mockClear();
        drAutomationServiceService.disableRetries();
        __drSummaryDetailsTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const instanceId =
          'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const drSummaryDetailsParams = {
          instanceId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        drAutomationServiceService.drSummaryDetails(drSummaryDetailsParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await drAutomationServiceService.drSummaryDetails({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await drAutomationServiceService.drSummaryDetails();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('validateClusterType', () => {
    describe('positive tests', () => {
      function __validateClusterTypeTest() {
        // Construct the params object for operation validateClusterType
        const instanceId =
          'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::';
        const orchestratorClusterType = 'on-premises';
        const acceptLanguage = 'testString';
        const ifNoneMatch = 'testString';
        const validateClusterTypeParams = {
          instanceId,
          orchestratorClusterType,
          acceptLanguage,
          ifNoneMatch,
        };

        const validateClusterTypeResult =
          drAutomationServiceService.validateClusterType(validateClusterTypeParams);

        // all methods should return a Promise
        expectToBePromise(validateClusterTypeResult);

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
        __validateClusterTypeTest();

        // enable retries and test again
        createRequestMock.mockClear();
        drAutomationServiceService.enableRetries();
        __validateClusterTypeTest();

        // disable retries and test again
        createRequestMock.mockClear();
        drAutomationServiceService.disableRetries();
        __validateClusterTypeTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const instanceId =
          'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::';
        const orchestratorClusterType = 'on-premises';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const validateClusterTypeParams = {
          instanceId,
          orchestratorClusterType,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        drAutomationServiceService.validateClusterType(validateClusterTypeParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await drAutomationServiceService.validateClusterType({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await drAutomationServiceService.validateClusterType();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('machinetypesDetails', () => {
    describe('positive tests', () => {
      function __machinetypesDetailsTest() {
        // Construct the params object for operation machinetypesDetails
        const instanceId =
          'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::';
        const primaryWorkspaceName = 'Test-workspace-wdc06';
        const acceptLanguage = 'testString';
        const ifNoneMatch = 'testString';
        const standbyWorkspaceName = 'Test-workspace-wdc07';
        const machinetypesDetailsParams = {
          instanceId,
          primaryWorkspaceName,
          acceptLanguage,
          ifNoneMatch,
          standbyWorkspaceName,
        };

        const machinetypesDetailsResult =
          drAutomationServiceService.machinetypesDetails(machinetypesDetailsParams);

        // all methods should return a Promise
        expectToBePromise(machinetypesDetailsResult);

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
        __machinetypesDetailsTest();

        // enable retries and test again
        createRequestMock.mockClear();
        drAutomationServiceService.enableRetries();
        __machinetypesDetailsTest();

        // disable retries and test again
        createRequestMock.mockClear();
        drAutomationServiceService.disableRetries();
        __machinetypesDetailsTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const instanceId =
          'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::';
        const primaryWorkspaceName = 'Test-workspace-wdc06';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const machinetypesDetailsParams = {
          instanceId,
          primaryWorkspaceName,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        drAutomationServiceService.machinetypesDetails(machinetypesDetailsParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await drAutomationServiceService.machinetypesDetails({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await drAutomationServiceService.machinetypesDetails();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('schematicWorkspaceGetoperation', () => {
    describe('positive tests', () => {
      function __schematicWorkspaceGetoperationTest() {
        // Construct the params object for operation schematicWorkspaceGetoperation
        const instanceId =
          'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::';
        const ifNoneMatch = 'testString';
        const schematicWorkspaceGetoperationParams = {
          instanceId,
          ifNoneMatch,
        };

        const schematicWorkspaceGetoperationResult =
          drAutomationServiceService.schematicWorkspaceGetoperation(
            schematicWorkspaceGetoperationParams
          );

        // all methods should return a Promise
        expectToBePromise(schematicWorkspaceGetoperationResult);

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
        __schematicWorkspaceGetoperationTest();

        // enable retries and test again
        createRequestMock.mockClear();
        drAutomationServiceService.enableRetries();
        __schematicWorkspaceGetoperationTest();

        // disable retries and test again
        createRequestMock.mockClear();
        drAutomationServiceService.disableRetries();
        __schematicWorkspaceGetoperationTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const instanceId =
          'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const schematicWorkspaceGetoperationParams = {
          instanceId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        drAutomationServiceService.schematicWorkspaceGetoperation(
          schematicWorkspaceGetoperationParams
        );
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await drAutomationServiceService.schematicWorkspaceGetoperation({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await drAutomationServiceService.schematicWorkspaceGetoperation();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('validatePowerVsWorkspace', () => {
    describe('positive tests', () => {
      function __validatePowerVsWorkspaceTest() {
        // Construct the params object for operation validatePowerVsWorkspace
        const instanceId =
          'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::';
        const workspaceId = '75cbf05b-78f6-406e-afe7-a904f646d798';
        const crn =
          'crn:v1:bluemix:public:power-iaas:dal10:a/094f4214c75941f991da601b001df1fe:75cbf05b-78f6-406e-afe7-a904f646d798::';
        const locationUrl = 'https://us-south.power-iaas.cloud.ibm.com';
        const ifNoneMatch = 'testString';
        const validatePowerVsWorkspaceParams = {
          instanceId,
          workspaceId,
          crn,
          locationUrl,
          ifNoneMatch,
        };

        const validatePowerVsWorkspaceResult = drAutomationServiceService.validatePowerVsWorkspace(
          validatePowerVsWorkspaceParams
        );

        // all methods should return a Promise
        expectToBePromise(validatePowerVsWorkspaceResult);

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
        __validatePowerVsWorkspaceTest();

        // enable retries and test again
        createRequestMock.mockClear();
        drAutomationServiceService.enableRetries();
        __validatePowerVsWorkspaceTest();

        // disable retries and test again
        createRequestMock.mockClear();
        drAutomationServiceService.disableRetries();
        __validatePowerVsWorkspaceTest();
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
        const validatePowerVsWorkspaceParams = {
          instanceId,
          workspaceId,
          crn,
          locationUrl,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        drAutomationServiceService.validatePowerVsWorkspace(validatePowerVsWorkspaceParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await drAutomationServiceService.validatePowerVsWorkspace({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await drAutomationServiceService.validatePowerVsWorkspace();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('validateProxyip', () => {
    describe('positive tests', () => {
      function __validateProxyipTest() {
        // Construct the params object for operation validateProxyip
        const instanceId =
          'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::';
        const proxyip = '10.30.40.5:3128';
        const vpcLocation = 'us-south';
        const vpcId = 'r006-2f3b3ab9-2149-49cc-83a1-30a5d93d59b2';
        const ifNoneMatch = 'testString';
        const validateProxyipParams = {
          instanceId,
          proxyip,
          vpcLocation,
          vpcId,
          ifNoneMatch,
        };

        const validateProxyipResult =
          drAutomationServiceService.validateProxyip(validateProxyipParams);

        // all methods should return a Promise
        expectToBePromise(validateProxyipResult);

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
        __validateProxyipTest();

        // enable retries and test again
        createRequestMock.mockClear();
        drAutomationServiceService.enableRetries();
        __validateProxyipTest();

        // disable retries and test again
        createRequestMock.mockClear();
        drAutomationServiceService.disableRetries();
        __validateProxyipTest();
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
        const validateProxyipParams = {
          instanceId,
          proxyip,
          vpcLocation,
          vpcId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        drAutomationServiceService.validateProxyip(validateProxyipParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await drAutomationServiceService.validateProxyip({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await drAutomationServiceService.validateProxyip();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('workspaceVpcgetoperation', () => {
    describe('positive tests', () => {
      function __workspaceVpcgetoperationTest() {
        // Construct the params object for operation workspaceVpcgetoperation
        const instanceId =
          'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::';
        const locationId = 'testString';
        const vpcId = 'r006-2f3b3ab9-2149-49cc-83a1-30a5d93d59b2';
        const tgId = '925a7b81-a826-4d0a-8ef9-7496e9dc58bc';
        const ifNoneMatch = 'testString';
        const workspaceVpcgetoperationParams = {
          instanceId,
          locationId,
          vpcId,
          tgId,
          ifNoneMatch,
        };

        const workspaceVpcgetoperationResult = drAutomationServiceService.workspaceVpcgetoperation(
          workspaceVpcgetoperationParams
        );

        // all methods should return a Promise
        expectToBePromise(workspaceVpcgetoperationResult);

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
        __workspaceVpcgetoperationTest();

        // enable retries and test again
        createRequestMock.mockClear();
        drAutomationServiceService.enableRetries();
        __workspaceVpcgetoperationTest();

        // disable retries and test again
        createRequestMock.mockClear();
        drAutomationServiceService.disableRetries();
        __workspaceVpcgetoperationTest();
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
        const workspaceVpcgetoperationParams = {
          instanceId,
          locationId,
          vpcId,
          tgId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        drAutomationServiceService.workspaceVpcgetoperation(workspaceVpcgetoperationParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await drAutomationServiceService.workspaceVpcgetoperation({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await drAutomationServiceService.workspaceVpcgetoperation();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('workspaceGetoperation', () => {
    describe('positive tests', () => {
      function __workspaceGetoperationTest() {
        // Construct the params object for operation workspaceGetoperation
        const instanceId =
          'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::';
        const schematicId = 'us-south.workspace.projects-service.3ae96a02';
        const locationId = 'testString';
        const ifNoneMatch = 'testString';
        const workspaceGetoperationParams = {
          instanceId,
          schematicId,
          locationId,
          ifNoneMatch,
        };

        const workspaceGetoperationResult = drAutomationServiceService.workspaceGetoperation(
          workspaceGetoperationParams
        );

        // all methods should return a Promise
        expectToBePromise(workspaceGetoperationResult);

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
        __workspaceGetoperationTest();

        // enable retries and test again
        createRequestMock.mockClear();
        drAutomationServiceService.enableRetries();
        __workspaceGetoperationTest();

        // disable retries and test again
        createRequestMock.mockClear();
        drAutomationServiceService.disableRetries();
        __workspaceGetoperationTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const instanceId =
          'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::';
        const schematicId = 'us-south.workspace.projects-service.3ae96a02';
        const locationId = 'testString';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const workspaceGetoperationParams = {
          instanceId,
          schematicId,
          locationId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        drAutomationServiceService.workspaceGetoperation(workspaceGetoperationParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await drAutomationServiceService.workspaceGetoperation({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await drAutomationServiceService.workspaceGetoperation();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('serviceInstanceFetchManageDr', () => {
    describe('positive tests', () => {
      function __serviceInstanceFetchManageDrTest() {
        // Construct the params object for operation serviceInstanceFetchManageDr
        const instanceId =
          'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::';
        const acceptLanguage = 'testString';
        const ifNoneMatch = 'testString';
        const serviceInstanceFetchManageDrParams = {
          instanceId,
          acceptLanguage,
          ifNoneMatch,
        };

        const serviceInstanceFetchManageDrResult =
          drAutomationServiceService.serviceInstanceFetchManageDr(
            serviceInstanceFetchManageDrParams
          );

        // all methods should return a Promise
        expectToBePromise(serviceInstanceFetchManageDrResult);

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
        __serviceInstanceFetchManageDrTest();

        // enable retries and test again
        createRequestMock.mockClear();
        drAutomationServiceService.enableRetries();
        __serviceInstanceFetchManageDrTest();

        // disable retries and test again
        createRequestMock.mockClear();
        drAutomationServiceService.disableRetries();
        __serviceInstanceFetchManageDrTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const instanceId =
          'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const serviceInstanceFetchManageDrParams = {
          instanceId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        drAutomationServiceService.serviceInstanceFetchManageDr(serviceInstanceFetchManageDrParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await drAutomationServiceService.serviceInstanceFetchManageDr({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await drAutomationServiceService.serviceInstanceFetchManageDr();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('serviceInstanceManageDr', () => {
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

      function __serviceInstanceManageDrTest() {
        // Construct the params object for operation serviceInstanceManageDr
        const instanceId =
          'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::';
        const standByRedeploy = 'false';
        const context = contextModel;
        const planId = 'plan1234';
        const serviceId = 'service1234';
        const action = 'done';
        const parameters = manageDrParametersModel;
        const acceptLanguage = 'testString';
        const ifNoneMatch = 'testString';
        const acceptsIncomplete = true;
        const serviceInstanceManageDrParams = {
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

        const serviceInstanceManageDrResult = drAutomationServiceService.serviceInstanceManageDr(
          serviceInstanceManageDrParams
        );

        // all methods should return a Promise
        expectToBePromise(serviceInstanceManageDrResult);

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
        __serviceInstanceManageDrTest();

        // enable retries and test again
        createRequestMock.mockClear();
        drAutomationServiceService.enableRetries();
        __serviceInstanceManageDrTest();

        // disable retries and test again
        createRequestMock.mockClear();
        drAutomationServiceService.disableRetries();
        __serviceInstanceManageDrTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const instanceId =
          'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::';
        const standByRedeploy = 'false';
        const context = contextModel;
        const planId = 'plan1234';
        const serviceId = 'service1234';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const serviceInstanceManageDrParams = {
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

        drAutomationServiceService.serviceInstanceManageDr(serviceInstanceManageDrParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await drAutomationServiceService.serviceInstanceManageDr({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await drAutomationServiceService.serviceInstanceManageDr();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('serviceInstanceDrdeployment', () => {
    describe('positive tests', () => {
      function __serviceInstanceDrdeploymentTest() {
        // Construct the params object for operation serviceInstanceDrdeployment
        const instanceId =
          'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::';
        const ifNoneMatch = 'testString';
        const serviceInstanceDrdeploymentParams = {
          instanceId,
          ifNoneMatch,
        };

        const serviceInstanceDrdeploymentResult =
          drAutomationServiceService.serviceInstanceDrdeployment(serviceInstanceDrdeploymentParams);

        // all methods should return a Promise
        expectToBePromise(serviceInstanceDrdeploymentResult);

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
        __serviceInstanceDrdeploymentTest();

        // enable retries and test again
        createRequestMock.mockClear();
        drAutomationServiceService.enableRetries();
        __serviceInstanceDrdeploymentTest();

        // disable retries and test again
        createRequestMock.mockClear();
        drAutomationServiceService.disableRetries();
        __serviceInstanceDrdeploymentTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const instanceId =
          'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const serviceInstanceDrdeploymentParams = {
          instanceId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        drAutomationServiceService.serviceInstanceDrdeployment(serviceInstanceDrdeploymentParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await drAutomationServiceService.serviceInstanceDrdeployment({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await drAutomationServiceService.serviceInstanceDrdeployment();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('serviceInstanceLastoperation', () => {
    describe('positive tests', () => {
      function __serviceInstanceLastoperationTest() {
        // Construct the params object for operation serviceInstanceLastoperation
        const instanceId =
          'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::';
        const acceptLanguage = 'testString';
        const ifNoneMatch = 'testString';
        const serviceInstanceLastoperationParams = {
          instanceId,
          acceptLanguage,
          ifNoneMatch,
        };

        const serviceInstanceLastoperationResult =
          drAutomationServiceService.serviceInstanceLastoperation(
            serviceInstanceLastoperationParams
          );

        // all methods should return a Promise
        expectToBePromise(serviceInstanceLastoperationResult);

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
        __serviceInstanceLastoperationTest();

        // enable retries and test again
        createRequestMock.mockClear();
        drAutomationServiceService.enableRetries();
        __serviceInstanceLastoperationTest();

        // disable retries and test again
        createRequestMock.mockClear();
        drAutomationServiceService.disableRetries();
        __serviceInstanceLastoperationTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const instanceId =
          'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const serviceInstanceLastoperationParams = {
          instanceId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        drAutomationServiceService.serviceInstanceLastoperation(serviceInstanceLastoperationParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await drAutomationServiceService.serviceInstanceLastoperation({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await drAutomationServiceService.serviceInstanceLastoperation();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('serviceInstanceEventsGetquery', () => {
    describe('positive tests', () => {
      function __serviceInstanceEventsGetqueryTest() {
        // Construct the params object for operation serviceInstanceEventsGetquery
        const provisionId =
          'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::';
        const time = '2025-06-19T23:59:59Z';
        const fromTime = '2025-06-19T00:00:00Z';
        const toTime = '2025-06-19T23:59:59Z';
        const acceptLanguage = 'testString';
        const ifNoneMatch = 'testString';
        const serviceInstanceEventsGetqueryParams = {
          provisionId,
          time,
          fromTime,
          toTime,
          acceptLanguage,
          ifNoneMatch,
        };

        const serviceInstanceEventsGetqueryResult =
          drAutomationServiceService.serviceInstanceEventsGetquery(
            serviceInstanceEventsGetqueryParams
          );

        // all methods should return a Promise
        expectToBePromise(serviceInstanceEventsGetqueryResult);

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
        __serviceInstanceEventsGetqueryTest();

        // enable retries and test again
        createRequestMock.mockClear();
        drAutomationServiceService.enableRetries();
        __serviceInstanceEventsGetqueryTest();

        // disable retries and test again
        createRequestMock.mockClear();
        drAutomationServiceService.disableRetries();
        __serviceInstanceEventsGetqueryTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const provisionId =
          'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const serviceInstanceEventsGetqueryParams = {
          provisionId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        drAutomationServiceService.serviceInstanceEventsGetquery(
          serviceInstanceEventsGetqueryParams
        );
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await drAutomationServiceService.serviceInstanceEventsGetquery({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await drAutomationServiceService.serviceInstanceEventsGetquery();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });

  describe('serviceInstanceEventsGet', () => {
    describe('positive tests', () => {
      function __serviceInstanceEventsGetTest() {
        // Construct the params object for operation serviceInstanceEventsGet
        const provisionId =
          'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::';
        const eventId = '00116b2a-9326-4024-839e-fb5364b76898';
        const acceptLanguage = 'testString';
        const ifNoneMatch = 'testString';
        const serviceInstanceEventsGetParams = {
          provisionId,
          eventId,
          acceptLanguage,
          ifNoneMatch,
        };

        const serviceInstanceEventsGetResult = drAutomationServiceService.serviceInstanceEventsGet(
          serviceInstanceEventsGetParams
        );

        // all methods should return a Promise
        expectToBePromise(serviceInstanceEventsGetResult);

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
        __serviceInstanceEventsGetTest();

        // enable retries and test again
        createRequestMock.mockClear();
        drAutomationServiceService.enableRetries();
        __serviceInstanceEventsGetTest();

        // disable retries and test again
        createRequestMock.mockClear();
        drAutomationServiceService.disableRetries();
        __serviceInstanceEventsGetTest();
      });

      test('should prioritize user-given headers', () => {
        // parameters
        const provisionId =
          'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::';
        const eventId = '00116b2a-9326-4024-839e-fb5364b76898';
        const userAccept = 'fake/accept';
        const userContentType = 'fake/contentType';
        const serviceInstanceEventsGetParams = {
          provisionId,
          eventId,
          headers: {
            Accept: userAccept,
            'Content-Type': userContentType,
          },
        };

        drAutomationServiceService.serviceInstanceEventsGet(serviceInstanceEventsGetParams);
        checkMediaHeaders(createRequestMock, userAccept, userContentType);
      });
    });

    describe('negative tests', () => {
      test('should enforce required parameters', async () => {
        let err;
        try {
          await drAutomationServiceService.serviceInstanceEventsGet({});
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });

      test('should reject promise when required params are not given', async () => {
        let err;
        try {
          await drAutomationServiceService.serviceInstanceEventsGet();
        } catch (e) {
          err = e;
        }

        expect(err.message).toMatch(/Missing required parameters/);
      });
    });
  });
});
