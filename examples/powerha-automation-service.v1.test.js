/**
 * @jest-environment node
 */
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

/* eslint-disable no-console */

const PowerhaAutomationServiceV1 = require('../dist/powerha-automation-service/v1');
// eslint-disable-next-line node/no-unpublished-require
const authHelper = require('../test/resources/auth-helper.js');
// You can use the readExternalSources method to access additional configuration values
// const { readExternalSources } = require('ibm-cloud-sdk-core');

//
// This file provides an example of how to use the PowerhaAutomation Service service.
//
// The following configuration properties are assumed to be defined:
// POWERHA_AUTOMATION_SERVICE_URL=<service base url>
// POWERHA_AUTOMATION_SERVICE_AUTH_TYPE=iam
// POWERHA_AUTOMATION_SERVICE_APIKEY=<IAM apikey>
// POWERHA_AUTOMATION_SERVICE_AUTH_URL=<IAM token service base URL - omit this if using the production environment>
//
// These configuration properties can be exported as environment variables, or stored
// in a configuration file and then:
// export IBM_CREDENTIALS_FILE=<name of configuration file>
//
const configFile = 'powerha_automation_service_v1.env';

const describe = authHelper.prepareTests(configFile);

// Save original console.log
const originalLog = console.log;
const originalWarn = console.warn;

// Mocks for console.log and console.warn
const consoleLogMock = jest.spyOn(console, 'log');
const consoleWarnMock = jest.spyOn(console, 'warn');

describe('PowerhaAutomationServiceV1', () => {
  // Service instance
  let powerhaAutomationServiceService;

  // To access additional configuration values, uncomment this line and extract the values from config
  // const config = readExternalSources(PowerhaAutomationServiceV1.DEFAULT_SERVICE_NAME);

  test('Initialize service', async () => {
    // begin-common

    powerhaAutomationServiceService = PowerhaAutomationServiceV1.newInstance();

    // end-common
  });

  test('getApiKey request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('getApiKey() result:');
    // begin-get_api_key

    const params = {
      phaInstanceId: '8eefautr-4c02-0009-0086-8bd4d8cf61b6',
      acceptLanguage: 'en-US',
      ifNoneMatch: 'abcdef',
    };

    let res;
    try {
      res = await powerhaAutomationServiceService.getApiKey(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-get_api_key
  });

  test('createApiKey request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('createApiKey() result:');
    // begin-create_api_key

    const params = {
      phaInstanceId: '8eefautr-4c02-0009-0086-8bd4d8cf61b6',
      acceptLanguage: 'en-US',
      ifNoneMatch: 'abcdef',
      apiKey: 'test-string',
    };

    let res;
    try {
      res = await powerhaAutomationServiceService.createApiKey(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-create_api_key
  });

  test('getClusterNode request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('getClusterNode() result:');
    // begin-get_cluster_node

    const params = {
      phaInstanceId: '8eefautr-4c02-0009-0086-8bd4d8cf61b6',
      ifNoneMatch: 'abcdef',
    };

    let res;
    try {
      res = await powerhaAutomationServiceService.getClusterNode(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-get_cluster_node
  });

  test('createClusterNode request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('createClusterNode() result:');
    // begin-create_cluster_node

    const params = {
      phaInstanceId: '8eefautr-4c02-0009-0086-8bd4d8cf61b6',
      primaryClusterNodes: ['ede4c36e-002c-48da-992e-6039d230c478'],
      acceptLanguage: 'en-US',
      ifNoneMatch: 'abcdef',
    };

    let res;
    try {
      res = await powerhaAutomationServiceService.createClusterNode(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-create_cluster_node
  });

  test('getPowervsWorkspace request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('getPowervsWorkspace() result:');
    // begin-get_powervs_workspace

    const params = {
      phaInstanceId: '8eefautr-4c02-0009-0086-8bd4d8cf61b6',
      locationId: 'us-south',
      acceptLanguage: 'en-US',
      ifNoneMatch: 'abcdef',
    };

    let res;
    try {
      res = await powerhaAutomationServiceService.getPowervsWorkspace(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-get_powervs_workspace
  });

  test('getPhaLastOperation request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('getPhaLastOperation() result:');
    // begin-get_pha_last_operation

    const params = {
      phaInstanceId: '8eefautr-4c02-0009-0086-8bd4d8cf61b6',
      acceptLanguage: 'en-US',
      ifNoneMatch: 'abcdef',
    };

    let res;
    try {
      res = await powerhaAutomationServiceService.getPhaLastOperation(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-get_pha_last_operation
  });

  test('getPhaDeployment request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('getPhaDeployment() result:');
    // begin-get_pha_deployment

    const params = {
      phaInstanceId: '8eefautr-4c02-0009-0086-8bd4d8cf61b6',
      ifNoneMatch: 'abcdef',
    };

    let res;
    try {
      res = await powerhaAutomationServiceService.getPhaDeployment(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-get_pha_deployment
  });

  test('createPhaDeployment request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('createPhaDeployment() result:');
    // begin-create_pha_deployment

    const params = {
      phaInstanceId: '8eefautr-4c02-0009-0086-8bd4d8cf61b6',
      locationId: 'loc-us-south-01',
      primaryWorkspace: 'workspace-primary',
      acceptLanguage: 'en-US',
      ifNoneMatch: 'abcdef',
    };

    let res;
    try {
      res = await powerhaAutomationServiceService.createPhaDeployment(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-create_pha_deployment
  });

  test('getSupportedLocation request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('getSupportedLocation() result:');
    // begin-get_supported_location

    const params = {
      phaInstanceId: '8eefautr-4c02-0009-0086-8bd4d8cf61b6',
      ifNoneMatch: 'abcdef',
    };

    let res;
    try {
      res = await powerhaAutomationServiceService.getSupportedLocation(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-get_supported_location
  });

  test('listServiceInstanceEvents request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('listServiceInstanceEvents() result:');
    // begin-list_service_instance_events

    const params = {
      phaInstanceId: '4c02-0009-0086-8bd4d8cf61b6',
      time: '2025-06-19T23:59:59Z',
      fromTime: '2025-06-19T00:00:00Z',
      toTime: '2025-06-19T23:59:59Z',
      acceptLanguage: 'en-US',
      ifNoneMatch: 'abcdef',
    };

    let res;
    try {
      res = await powerhaAutomationServiceService.listServiceInstanceEvents(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-list_service_instance_events
  });

  test('getServiceInstanceEvent request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('getServiceInstanceEvent() result:');
    // begin-get_service_instance_event

    const params = {
      phaInstanceId: '8eefautr-4c02-0009-0086-8bd4d8cf61b6',
      eventId: '00116b2a-9326-4024-839e-fb5364b76898',
      acceptLanguage: 'en-US',
      ifNoneMatch: 'abcdef',
    };

    let res;
    try {
      res = await powerhaAutomationServiceService.getServiceInstanceEvent(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-get_service_instance_event
  });

  test('getPhaAgentFileDownloadJobStatus request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('getPhaAgentFileDownloadJobStatus() result:');
    // begin-get_pha_agent_file_download_job_status

    const params = {
      phaInstanceId: '8eefautr-4c02-0009-0086-8bd4d8cf61b6',
      phaJobId: '4235r23r5vdfdf-2323',
      acceptLanguage: 'en-US',
      ifNoneMatch: 'abcdef',
    };

    let res;
    try {
      res = await powerhaAutomationServiceService.getPhaAgentFileDownloadJobStatus(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-get_pha_agent_file_download_job_status
  });

  const fs = require('fs');
  const path = require('path');

  test('downloadPhaAgentFile request example', async () => { 

    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('downloadPhaAgentFile() result:');
    // begin-download_pha_agent_file
    const params = {
      phaInstanceId: '8eefautr-4c02-0009-0086-8bd4d8cf61b6',
      phaPvmInstanceName: 'Vm-name-5',
      acceptLanguage: 'en-US',
      ifNoneMatch: 'abcdef',
    };
    try {
      const response = await powerhaAutomationServiceService.downloadPhaAgentFile(params);
      const filePath = path.join(__dirname, 'result.out');
      const writeStream = fs.createWriteStream(filePath);
      response.result.pipe(writeStream);
    } catch (err) {
        if (err.result && typeof err.result.pipe === 'function') {
          let errorData = '';
          err.result.on('data', chunk => {
            errorData += chunk;
          });
          err.result.on('end', () => {
            console.warn('Error response body:', errorData);
            try {
              const parsedError = JSON.parse(errorData);
              console.warn('Parsed error:', parsedError);
            } catch (e) {
              console.warn('Raw error:', errorData);
            }
          });
        } else {
          console.warn(err);
        }
    }
    // end-download_pha_agent_file
  }, 20000);

  test('deleteClusterNode request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('deleteClusterNode() result:');
    // begin-delete_cluster_node

    const params = {
      phaInstanceId: '8eefautr-4c02-0009-0086-8bd4d8cf61b6',
      vmId: 'r006-2f3b3ab9-2149-49cc-83a1-30a5d93d59b2',
      ifNoneMatch: 'abcdef',
    };

    let res;
    try {
      res = await powerhaAutomationServiceService.deleteClusterNode(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-delete_cluster_node
  });
});
