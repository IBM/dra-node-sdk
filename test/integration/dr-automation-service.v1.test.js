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

const { readExternalSources } = require('ibm-cloud-sdk-core');
const DrAutomationServiceV1 = require('../../dist/dr-automation-service/v1');
const authHelper = require('../resources/auth-helper.js');

// testcase timeout value (200s).
const timeout = 200000;

// Location of our config file.
const configFile = 'dr_automation_service_v1.env';

const describe = authHelper.prepareTests(configFile);

describe('DrAutomationServiceV1_integration', () => {
  jest.setTimeout(timeout);

  // Service instance
  let drAutomationServiceService;

  test('Initialize service', async () => {
    drAutomationServiceService = DrAutomationServiceV1.newInstance();

    expect(drAutomationServiceService).not.toBeNull();

    const config = readExternalSources(DrAutomationServiceV1.DEFAULT_SERVICE_NAME);
    expect(config).not.toBeNull();

    drAutomationServiceService.enableRetries();
  });

  test('updateApikey()', async () => {
    const params = {
      instanceId: '123456d3-1122-3344-b67d-4389b44b7bf9',
      apiKey: 'adfadfdsafsdfdsf',
      acceptLanguage: 'testString',
    };

    const res = await drAutomationServiceService.updateApikey(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('getDrGrsLocationPair()', async () => {
    const params = {
      instanceId: '123456d3-1122-3344-b67d-4389b44b7bf9',
      acceptLanguage: 'testString',
    };

    const res = await drAutomationServiceService.getDrGrsLocationPair(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('getDrLocations()', async () => {
    const params = {
      instanceId: '123456d3-1122-3344-b67d-4389b44b7bf9',
      acceptLanguage: 'testString',
    };

    const res = await drAutomationServiceService.getDrLocations(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('getDrManagedVm()', async () => {
    const params = {
      instanceId: '123456d3-1122-3344-b67d-4389b44b7bf9',
      acceptLanguage: 'testString',
    };

    const res = await drAutomationServiceService.getDrManagedVm(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('getDrSummary()', async () => {
    const params = {
      instanceId: '123456d3-1122-3344-b67d-4389b44b7bf9',
      acceptLanguage: 'testString',
    };

    const res = await drAutomationServiceService.getDrSummary(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('getMachineType()', async () => {
    const params = {
      instanceId: '123456d3-1122-3344-b67d-4389b44b7bf9',
      primaryWorkspaceName: 'Test-workspace-wdc06',
      acceptLanguage: 'testString',
      standbyWorkspaceName: 'Test-workspace-wdc07',
    };

    const res = await drAutomationServiceService.getMachineType(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('getPowervsWorkspaces()', async () => {
    const params = {
      instanceId: '123456d3-1122-3344-b67d-4389b44b7bf9',
      locationId: 'testString',
    };

    const res = await drAutomationServiceService.getPowervsWorkspaces(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('createManageDr()', async () => {
    const params = {
      instanceId: '123456d3-1122-3344-b67d-4389b44b7bf9',
      locationId: 'dal10',
      machineType: 'bx2-4x16',
      orchestratorLocationType: 'off-premises',
      orchestratorName: 'adminUser',
      orchestratorPassword: 'testString',
      orchestratorWorkspaceId: 'orch-workspace-01',
      apiKey: 'testString',
      clientId: 'abcd-97d2-1234-bf62-8eaecc67a1234',
      clientSecret: 'abcd1234xM1y123wK6qR9123456789bE2jG0pabcdefgh',
      guid: '123e4567-e89b-12d3-a456-426614174000',
      orchestratorHa: true,
      proxyIp: '10.40.30.10:8888',
      regionId: 'us-south',
      resourceInstance: 'crn:v1:bluemix:public:resource-controller::res123',
      secret: 'testString',
      secretGroup: 'default-secret-group',
      sshKeyName: 'my-ssh-key',
      standbyMachineType: 'bx2-8x32',
      standbyOrchestratorName: 'standbyAdmin',
      standbyOrchestratorWorkspaceId: 'orch-standby-02',
      standbyTier: 'Premium',
      tenantName: 'xxx.ibm.com',
      tier: 'Standard',
      standByRedeploy: 'testString',
      acceptLanguage: 'testString',
      acceptsIncomplete: true,
    };

    const res = await drAutomationServiceService.createManageDr(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('getLastOperation()', async () => {
    const params = {
      instanceId: '123456d3-1122-3344-b67d-4389b44b7bf9',
      acceptLanguage: 'testString',
    };

    const res = await drAutomationServiceService.getLastOperation(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('listEvents()', async () => {
    const params = {
      instanceId: '123456d3-1122-3344-b67d-4389b44b7bf9',
      time: '2025-06-19T23:59:59Z',
      fromTime: '2025-06-19T00:00:00Z',
      toTime: '2025-06-19T23:59:59Z',
      acceptLanguage: 'testString',
    };

    const res = await drAutomationServiceService.listEvents(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('getEvent()', async () => {
    const params = {
      instanceId: '123456d3-1122-3344-b67d-4389b44b7bf9',
      eventId: '00116b2a-9326-4024-839e-fb5364b76898',
      acceptLanguage: 'testString',
    };

    const res = await drAutomationServiceService.getEvent(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });
});
