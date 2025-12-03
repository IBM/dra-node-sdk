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

const DrAutomationServiceV1 = require('../dist/dr-automation-service/v1');
// eslint-disable-next-line node/no-unpublished-require
const authHelper = require('../test/resources/auth-helper.js');
// You can use the readExternalSources method to access additional configuration values
// const { readExternalSources } = require('ibm-cloud-sdk-core');

//
// This file provides an example of how to use the DrAutomation Service service.
//
// The following configuration properties are assumed to be defined:
// DR_AUTOMATION_SERVICE_URL=<service base url>
// DR_AUTOMATION_SERVICE_AUTH_TYPE=iam
// DR_AUTOMATION_SERVICE_APIKEY=<IAM apikey>
// DR_AUTOMATION_SERVICE_AUTH_URL=<IAM token service base URL - omit this if using the production environment>
//
// These configuration properties can be exported as environment variables, or stored
// in a configuration file and then:
// export IBM_CREDENTIALS_FILE=<name of configuration file>
//
const configFile = 'dr_automation_service_v1.env';

const describe = authHelper.prepareTests(configFile);

// Save original console.log
const originalLog = console.log;
const originalWarn = console.warn;

// Mocks for console.log and console.warn
const consoleLogMock = jest.spyOn(console, 'log');
const consoleWarnMock = jest.spyOn(console, 'warn');

describe('DrAutomationServiceV1', () => {
  // Service instance
  let drAutomationServiceService;

  // To access additional configuration values, uncomment this line and extract the values from config
  // const config = readExternalSources(DrAutomationServiceV1.DEFAULT_SERVICE_NAME);

  test('Initialize service', async () => {
    // begin-common

    drAutomationServiceService = DrAutomationServiceV1.newInstance();

    // end-common
  });

  test('updateApikey request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('updateApikey() result:');
    // begin-update_apikey

    const params = {
      instanceId: '123456d3-1122-3344-b67d-4389b44b7bf9',
      apiKey: 'adfadfdsafsdfdsf',
    };

    let res;
    try {
      res = await drAutomationServiceService.updateApikey(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-update_apikey
  });

  test('getDrGrsLocationPair request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('getDrGrsLocationPair() result:');
    // begin-get_dr_grs_location_pair

    const params = {
      instanceId: '123456d3-1122-3344-b67d-4389b44b7bf9',
    };

    let res;
    try {
      res = await drAutomationServiceService.getDrGrsLocationPair(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-get_dr_grs_location_pair
  });

  test('getDrLocations request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('getDrLocations() result:');
    // begin-get_dr_locations

    const params = {
      instanceId: '123456d3-1122-3344-b67d-4389b44b7bf9',
    };

    let res;
    try {
      res = await drAutomationServiceService.getDrLocations(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-get_dr_locations
  });

  test('getDrManagedVm request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('getDrManagedVm() result:');
    // begin-get_dr_managed_vm

    const params = {
      instanceId: '123456d3-1122-3344-b67d-4389b44b7bf9',
    };

    let res;
    try {
      res = await drAutomationServiceService.getDrManagedVm(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-get_dr_managed_vm
  });

  test('getDrSummary request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('getDrSummary() result:');
    // begin-get_dr_summary

    const params = {
      instanceId: '123456d3-1122-3344-b67d-4389b44b7bf9',
    };

    let res;
    try {
      res = await drAutomationServiceService.getDrSummary(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-get_dr_summary
  });

  test('getMachineType request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('getMachineType() result:');
    // begin-get_machine_type

    const params = {
      instanceId: '123456d3-1122-3344-b67d-4389b44b7bf9',
      primaryWorkspaceName: 'Test-workspace-wdc06',
      standbyWorkspaceName: 'Test-workspace-wdc07',
    };

    let res;
    try {
      res = await drAutomationServiceService.getMachineType(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-get_machine_type
  });

  test('getPowervsWorkspaces request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('getPowervsWorkspaces() result:');
    // begin-get_powervs_workspaces

    const params = {
      instanceId: '123456d3-1122-3344-b67d-4389b44b7bf9',
      locationId: 'testString',
    };

    let res;
    try {
      res = await drAutomationServiceService.getPowervsWorkspaces(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-get_powervs_workspaces
  });

  test('createManageDr request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('createManageDr() result:');
    // begin-create_manage_dr

    const params = {
      instanceId: '123456d3-1122-3344-b67d-4389b44b7bf9',
      locationId: 'dal10',
      machineType: 'bx2-4x16',
      orchestratorLocationType: 'off-premises',
      orchestratorName: 'adminUser',
      orchestratorPassword: 'testString',
      orchestratorWorkspaceId: 'orch-workspace-01',
    };

    let res;
    try {
      res = await drAutomationServiceService.createManageDr(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-create_manage_dr
  });

  test('getLastOperation request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('getLastOperation() result:');
    // begin-get_last_operation

    const params = {
      instanceId: '123456d3-1122-3344-b67d-4389b44b7bf9',
    };

    let res;
    try {
      res = await drAutomationServiceService.getLastOperation(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-get_last_operation
  });

  test('listEvents request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('listEvents() result:');
    // begin-list_events

    const params = {
      instanceId: '123456d3-1122-3344-b67d-4389b44b7bf9',
      time: '2025-06-19T23:59:59Z',
      fromTime: '2025-06-19T00:00:00Z',
      toTime: '2025-06-19T23:59:59Z',
    };

    let res;
    try {
      res = await drAutomationServiceService.listEvents(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-list_events
  });

  test('getEvent request example', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('getEvent() result:');
    // begin-get_event

    const params = {
      instanceId: '123456d3-1122-3344-b67d-4389b44b7bf9',
      eventId: '00116b2a-9326-4024-839e-fb5364b76898',
    };

    let res;
    try {
      res = await drAutomationServiceService.getEvent(params);
      console.log(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }

    // end-get_event
  });
});
