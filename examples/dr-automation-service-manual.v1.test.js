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

const DrAutomationServiceV1 = require('../dr-automation-service/v1');
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

  //  ---------- 1. HA with SSHKey ----------
  test('ServiceInstanceManageDr HA with sshkey', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('\ncreate_manage_dr_ha_with_sshkey() result:');

    const params = {
      instanceId: '050ebe3b-13f4-4db8-8ece-501a3c13be80mh1',
      orchestratorHa: true,
      orchestratorLocationType: 'off-premises',
      locationId: 'dal10',
      orchestratorWorkspaceId: '75cbf05b-78f6-406e-afe7-a904f646d798',
      orchestratorName: 'drautomationprimarymh1',
      orchestratorPassword: 'EverytimeNewPassword@1',
      machineType: 's922',
      tier: 'tier1',
      sshKeyName: 'vijaykey',
      apiKey: 'apikey is required',

      // HA standby fields
      standbyOrchestratorName: 'drautomationstandbymh1',
      standbyOrchestratorWorkspaceId: '71027b79-0e31-44f6-a499-63eca1a66feb',
      standbyMachineType: 's922',
      standbyTier: 'tier1',
      standByRedeploy: 'false',

      // MFA
      clientId: '123abcd-97d2-4b14-bf62-8eaecc67a122',
      clientSecret: 'abcdefgT5rS8wK6qR9dD7vF1hU4sA3bE2jG0pL9oX7yC',
      tenantName: 'xxx.ibm.com',
    };

    let res;
    try {
      res = await drAutomationServiceService.createManageDr(params);
      expect(res).toBeDefined();
      expect(res.result).not.toBeNull();
      originalLog(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }
  }, 20000);

  // 2. ---------- 2. HA with Secrets ----------
  test('ServiceInstanceManageDr HA with secrets', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('\ncreate_manage_dr_ha_with_secrets() result:');

    const params = {
      instanceId: '050ebe3b-13f4-4db8-8ece-501a3c13be80mh1',
      orchestratorHa: true,
      orchestratorLocationType: 'off-premises',
      locationId: 'dal10',
      orchestratorWorkspaceId: '75cbf05b-78f6-406e-afe7-a904f646d798',
      orchestratorName: 'drautomationprimarymh3',
      orchestratorPassword: 'EverytimeNewPassword@1',
      machineType: 's922',
      tier: 'tier1',

      // Secrets Model
      guid: '397dc20d-9f66-46dc-a750-d15392872023',
      secretGroup: '12345-714f-86a6-6a50-2f128a4e7ac2',
      secret: '12345-997c-1d0d-5503-27ca856f2b5a',
      regionId: 'us-south',

      apiKey: 'apikey is required',

      // HA standby fields
      standbyOrchestratorName: 'drautomationstandbymh3',
      standbyOrchestratorWorkspaceId: '71027b79-0e31-44f6-a499-63eca1a66feb',
      standbyMachineType: 's922',
      standbyTier: 'tier1',
      standByRedeploy: 'false',

      // MFA
      clientId: '123abcd-97d2-4b14-bf62-8eaecc67a122',
      clientSecret: 'abcdefgT5rS8wK6qR9dD7vF1hU4sA3bE2jG0pL9oX7yC',
      tenantName: 'xxx.ibm.com',
    };

    let res;
    try {
      res = await drAutomationServiceService.createManageDr(params);
      expect(res).toBeDefined();
      expect(res.result).not.toBeNull();
      originalLog(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }
  }, 20000);

  // ---------- 3. Non-HA with SSHKey ----------
  test('ServiceInstanceManageDr Non-HA with sshkey', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('\ncreate_manage_dr_nonha_with_sshkey() result:');

    const params = {
      instanceId: '050ebe3b-13f4-4db8-8ece-501a3c13be80mh1',
      orchestratorHa: false,
      orchestratorLocationType: 'off-premises',
      locationId: 'dal10',
      orchestratorWorkspaceId: '75cbf05b-78f6-406e-afe7-a904f646d798',
      orchestratorName: 'drautomationprimarymnh5',
      orchestratorPassword: 'EverytimeNewPassword@1',
      machineType: 's922',
      tier: 'tier1',
      sshKeyName: 'vijaykey',
      apiKey: 'apikey is required',

      // MFA
      clientId: '123abcd-97d2-4b14-bf62-8eaecc67a122',
      clientSecret: 'abcdefgT5rS8wK6qR9dD7vF1hU4sA3bE2jG0pL9oX7yC',
      tenantName: 'xxx.ibm.com',
    };

    let res;
    try {
      res = await drAutomationServiceService.createManageDr(params);
      expect(res).toBeDefined();
      expect(res.result).not.toBeNull();
      originalLog(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }
  }, 20000);

  // ---------- 4. Non-HA with Secrets ----------
  test('ServiceInstanceManageDr Non-HA with secrets', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('\ncreate_manage_dr_nonha_with_secrets() result:');

    const params = {
      instanceId: '123456d3-1122-3344-b67d-4389b44b7bf9',
      orchestratorHa: false,
      orchestratorLocationType: 'off-premises',
      locationId: 'dal10',
      orchestratorWorkspaceId: '75cbf05b-78f6-406e-afe7-a904f646d798',
      orchestratorName: 'drautomationprimarymnh7',
      orchestratorPassword: 'EverytimeNewPassword@1',
      machineType: 's922',
      tier: 'tier1',

      guid: '397dc20d-9f66-46dc-a750-d15392872023',
      secretGroup: '12345-714f-86a6-6a50-2f128a4e7ac2',
      secret: '12345-997c-1d0d-5503-27ca856f2b5a',
      regionId: 'us-south',

      apiKey: 'apikey is required',

      // MFA
      clientId: '123abcd-97d2-4b14-bf62-8eaecc67a122',
      clientSecret: 'abcdefgT5rS8wK6qR9dD7vF1hU4sA3bE2jG0pL9oX7yC',
      tenantName: 'xxx.ibm.com',
    };

    let res;
    try {
      res = await drAutomationServiceService.createManageDr(params);
      expect(res).toBeDefined();
      expect(res.result).not.toBeNull();
      originalLog(JSON.stringify(res.result, null, 2));
    } catch (err) {
      console.warn(err);
    }
  }, 20000);
});
