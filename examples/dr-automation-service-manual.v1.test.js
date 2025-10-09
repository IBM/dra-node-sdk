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

  // 1. ManageDR with HA + schematic id + sshkey
  test('ServiceInstanceManageDr with HA + schematic id + sshkey', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('\nServiceInstanceManageDr() - HA with schematic id + sshkey:');

    const params = {
      instanceId:
        'crn:v1:staging:public:power-dr-automation:global:a/6462f6198c864dd7b0cbf10ea0d073e4:f78deba4-3e87-4bd1-85c0-7c8412cdb14a::',
      standByRedeploy: 'true',
      orchestratorHa: true,
      orchestratorLocationType: 'off-premises',
      locationId: 'dal10',
      schematicWorkspaceId: 'us-south.workspace.projects-service.3ae96a02',
      orchestratorWorkspaceId: '75cbf05b-78f6-406e-afe7-a904f646d798',
      orchestratorName: 'drautomationprimarymh1dsdkks',
      orchestratorPassword: 'EverytimeNewPassword@1',
      machineType: 's922',
      tier: 'tier1',
      sshKeyName: 'vijaykey',
      action: 'done',
      apiKey: 'api-key-here',
      standbyOrchestratorName: 'drautomationstandbymh1dd',
      standbyOrchestratorWorkspaceId: '71027b79-0e31-44f6-a499-63eca1a66feb',
      standbyMachineType: 's922',
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

  // 2. ManageDR with HA + custom VPC + sshkey
  test('ServiceInstanceManageDr with HA + custom VPC + sshkey', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('\nServiceInstanceManageDr() - HA with custom VPC + sshkey:');

    const params = {
      instanceId:
        'crn:v1:staging:public:power-dr-automation:global:a/6462f6198c864dd7b0cbf10ea0d073e4:f78deba4-3e87-4bd1-85c0-7c8412cdb14a::',
      standByRedeploy: 'true',
      orchestratorHa: true,
      orchestratorLocationType: 'off-premises',
      locationId: 'dal10',
      vpcId: 'r006-2f3b3ab9-2149-49cc-83a1-30a5d93d59b2',
      transitGatewayId: '024fcff9-c676-46e4-ad42-3b2d349c9f8f',
      proxyIp: '10.30.40.4:3128',
      orchestratorWorkspaceId: '75cbf05b-78f6-406e-afe7-a904f646d798',
      orchestratorName: 'drautomationprimarymh2testkffff',
      orchestratorPassword: 'EverytimeNewPassword@1',
      machineType: 's922',
      tier: 'tier1',
      sshKeyName: 'vijaykey',
      action: 'done',
      apiKey: 'api-key-here',
      standbyOrchestratorName: 'drautomationstandbymh2testjd',
      standbyOrchestratorWorkspaceId: '71027b79-0e31-44f6-a499-63eca1a66feb',
      standbyMachineType: 's922',
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

  // 3. ManageDR with HA + schematic id + secrets
  test('ServiceInstanceManageDr with HA + schematic id + secrets', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('\nServiceInstanceManageDr() - HA with schematic id + secrets:');

    const params = {
      instanceId:
        'crn:v1:staging:public:power-dr-automation:global:a/6462f6198c864dd7b0cbf10ea0d073e4:f78deba4-3e87-4bd1-85c0-7c8412cdb14a::',
      standByRedeploy: 'true',
      orchestratorHa: true,
      orchestratorLocationType: 'off-premises',
      locationId: 'dal10',
      schematicWorkspaceId: 'us-south.workspace.projects-service.3ae96a02',
      orchestratorWorkspaceId: '75cbf05b-78f6-406e-afe7-a904f646d798',
      orchestratorName: 'drautomationprimarymh3testfd',
      orchestratorPassword: 'EverytimeNewPassword@1',
      machineType: 's922',
      tier: 'tier1',
      guid: '397dc20d-9f66-46dc-a750-d15392872023',
      secretGroup: 'secret-group-here',
      secret: 'secret-here',
      regionId: 'us-south',
      action: 'done',
      apiKey: 'api-key-here',
      standbyOrchestratorName: 'drautomationstandbymh2testjdd',
      standbyOrchestratorWorkspaceId: '71027b79-0e31-44f6-a499-63eca1a66feb',
      standbyMachineType: 's922',
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

  // 4. ManageDR with HA + custom VPC + secrets
  test('ServiceInstanceManageDr with HA + custom VPC + secrets', async () => {
    consoleLogMock.mockImplementation((output) => {
      originalLog(output);
    });
    consoleWarnMock.mockImplementation((output) => {
      // if an error occurs, display the message and then fail the test
      originalWarn(output);
      expect(true).toBeFalsy();
    });

    originalLog('\nServiceInstanceManageDr() - HA with custom VPC + secrets:');

    const params = {
      instanceId:
        'crn:v1:staging:public:power-dr-automation:global:a/6462f6198c864dd7b0cbf10ea0d073e4:f78deba4-3e87-4bd1-85c0-7c8412cdb14a::',
      orchestratorHa: true,
      orchestratorLocationType: 'off-premises',
      locationId: 'dal10',
      vpcId: 'r006-2f3b3ab9-2149-49cc-83a1-30a5d93d59b2',
      transitGatewayId: '024fcff9-c676-46e4-ad42-3b2d349c9f8f',
      proxyIp: '10.30.40.4:3128',
      orchestratorWorkspaceId: '75cbf05b-78f6-406e-afe7-a904f646d798',
      orchestratorName: 'drautomationprimarymnhdnn',
      orchestratorPassword: 'EverytimeNewPassword@1',
      machineType: 's922',
      tier: 'tier1',
      guid: '397dc20d-9f66-46dc-a750-d15392872023',
      secretGroup: 'secret-group-here',
      secret: 'secret-here',
      action: 'done',
      apiKey: 'api-key-here',
      standbyOrchestratorName: 'drautomationstandbymh2tesddadd',
      standbyOrchestratorWorkspaceId: '71027b79-0e31-44f6-a499-63eca1a66feb',
      standbyMachineType: 's922',
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

  // -------- Non-HA Cases ---------

  // 1. ManageDR without HA + schematic id + sshkey
  test('ServiceInstanceManageDr without HA + schematic id + sshkey', async () => {
    console.log('\nServiceInstanceManageDr() - HA without schematic id + sshkey:');

    const params = {
      instanceId:
        'crn:v1:staging:public:power-dr-automation:global:a/6462f6198c864dd7b0cbf10ea0d073e4:f78deba4-3e87-4bd1-85c0-7c8412cdb14a::',
      standByRedeploy: 'true',
      // instanceId: "crn:v1:staging:public:power-dr-automation:global:a/a09202c1bfb04ceebfb4a9fd38c87721:050ebe3b-13f4-4db8-8ece-501a3c13be80mh1::",
      orchestratorHa: false,
      orchestratorLocationType: 'off-premises',
      locationId: 'dal10',
      schematicWorkspaceId: 'us-south.workspace.projects-service.3ae96a02',
      orchestratorWorkspaceId: '75cbf05b-78f6-406e-afe7-a904f646d798',
      orchestratorName: 'drautomationprimarymh1dsds',
      orchestratorPassword: 'EverytimeNewPassword@1',
      machineType: 's922',
      tier: 'tier1',
      sshKeyName: 'vijaykey',
      action: 'done',
      apiKey: 'api-key-here',
      // standbyOrchestratorName: "drautomationstandbymh1",
      // standbyOrchestratorWorkspaceId: "71027b79-0e31-44f6-a499-63eca1a66feb",
      // standbyMachineType: "s922"
    };

    const response = await drAutomationServiceService.createManageDr(params);

    expect(response).toBeDefined();
    expect(response.result).toBeDefined();
    expect(response.status).toBe(200);

    console.log(JSON.stringify(response.result, null, 2));
  }, 20000);

  // 2. ManageDR without HA + custom VPC + sshkey

  test('ServiceInstanceManageDr without HA + custom VPC + sshkey', async () => {
    console.log('\nServiceInstanceManageDr() - without HA custom VPC + sshkey:');

    const params = {
      instanceId:
        'crn:v1:staging:public:power-dr-automation:global:a/6462f6198c864dd7b0cbf10ea0d073e4:f78deba4-3e87-4bd1-85c0-7c8412cdb14a::',
      standByRedeploy: 'true',
      orchestratorHa: false,
      orchestratorLocationType: 'off-premises',
      locationId: 'dal10',
      vpcId: 'r006-2f3b3ab9-2149-49cc-83a1-30a5d93d59b2',
      transitGatewayId: '024fcff9-c676-46e4-ad42-3b2d349c9f8f',
      proxyIp: '10.30.40.4:3128',
      orchestratorWorkspaceId: '75cbf05b-78f6-406e-afe7-a904f646d798',
      orchestratorName: 'drautomationprimarymh2testk',
      orchestratorPassword: 'EverytimeNewPassword@1',
      machineType: 's922',
      tier: 'tier1',
      sshKeyName: 'vijaykey',
      action: 'done',
      apiKey: 'api-key-here',
      // standbyOrchestratorName: "drautomationstandbymh2testj",
      // standbyOrchestratorWorkspaceId: "71027b79-0e31-44f6-a499-63eca1a66feb",
      // standbyMachineType: "s922",
    };

    const response = await drAutomationServiceService.createManageDr(params);

    // ✅ Wrap in expect so Jest knows this is part of the test
    await expect(Promise.resolve(response.status)).resolves.toBe(200);

    console.log('ServiceInstanceManageDr Response:', JSON.stringify(response.result, null, 2));

    expect(response.result).not.toBeNull();
  }, 20000);

  // 3. ManageDR without HA + schematic id + secrets
  test('ServiceInstanceManageDr without HA + schematic id + secrets', async () => {
    console.log('\nServiceInstanceManageDr() - HA without schematic id + secrets:');

    const params = {
      instanceId:
        'crn:v1:staging:public:power-dr-automation:global:a/6462f6198c864dd7b0cbf10ea0d073e4:f78deba4-3e87-4bd1-85c0-7c8412cdb14a::',
      standByRedeploy: 'true',
      orchestratorHa: false,
      orchestratorLocationType: 'off-premises',
      locationId: 'dal10',
      schematicWorkspaceId: 'us-south.workspace.projects-service.3ae96a02',
      orchestratorWorkspaceId: '75cbf05b-78f6-406e-afe7-a904f646d798',
      orchestratorName: 'drautomationprimarymh3testf',
      orchestratorPassword: 'EverytimeNewPassword@1',
      machineType: 's922',
      tier: 'tier1',
      guid: '397dc20d-9f66-46dc-a750-d15392872023',
      secretGroup: '12345-714f-86a6-6a50-2f128a4e7ac2',
      secret: '12345-997c-1d0d-5503-27ca856f2b5a',
      regionId: 'us-south',
      action: 'done',
      apiKey: 'api-key-here',
    };

    const response = await drAutomationServiceService.createManageDr(params);

    console.log(JSON.stringify(response.result, null, 2));

    expect(response.status).toBe(200);
    expect(response.result).not.toBeNull();
  }, 20000);

  // 4. ManageDR without HA + custom VPC + secrets
  test('ServiceInstanceManageDr without HA + custom VPC + secrets', async () => {
    console.log('\nServiceInstanceManageDr() - HA without custom VPC + secrets:');

    const params = {
      instanceId:
        'crn:v1:staging:public:power-dr-automation:global:a/6462f6198c864dd7b0cbf10ea0d073e4:f78deba4-3e87-4bd1-85c0-7c8412cdb14a::',
      standByRedeploy: 'true',
      orchestratorHa: false,
      orchestratorLocationType: 'off-premises',
      locationId: 'dal10',
      vpcId: 'r006-2f3b3ab9-2149-49cc-83a1-30a5d93d59b2',
      transitGatewayId: '024fcff9-c676-46e4-ad42-3b2d349c9f8f',
      proxyIp: '10.30.40.4:3128',
      orchestratorWorkspaceId: '75cbf05b-78f6-406e-afe7-a904f646d798',
      orchestratorName: 'drautomationprimarymnh8dddnn',
      orchestratorPassword: 'EverytimeNewPassword@1',
      machineType: 's922',
      tier: 'tier1',
      guid: '397dc20d-9f66-46dc-a750-d15392872023',
      secretGroup: 'secret-group-here',
      secret: 'secret-here',
      action: 'done',
      apiKey: 'api-key-here',
    };

    const response = await drAutomationServiceService.createManageDr(params);

    console.log(JSON.stringify(response.result, null, 2));

    expect(response.status).toBe(200);
    expect(response.result).not.toBeNull();
  }, 20000);
});
