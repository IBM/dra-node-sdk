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
      instanceId:
        'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::',
      apiKey: 'adfadfdsafsdfdsf',
      acceptLanguage: 'testString',
      ifNoneMatch: 'testString',
    };

    const res = await drAutomationServiceService.updateApikey(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('getDrGrsLocationPair()', async () => {
    const params = {
      instanceId:
        'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::',
      acceptLanguage: 'testString',
      ifNoneMatch: 'testString',
    };

    const res = await drAutomationServiceService.getDrGrsLocationPair(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('getDrLocations()', async () => {
    const params = {
      instanceId:
        'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::',
      acceptLanguage: 'testString',
      ifNoneMatch: 'testString',
    };

    const res = await drAutomationServiceService.getDrLocations(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('getDrManagedVm()', async () => {
    const params = {
      instanceId:
        'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::',
      acceptLanguage: 'testString',
      ifNoneMatch: 'testString',
    };

    const res = await drAutomationServiceService.getDrManagedVm(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('getDrSummary()', async () => {
    const params = {
      instanceId:
        'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::',
      acceptLanguage: 'testString',
      ifNoneMatch: 'testString',
    };

    const res = await drAutomationServiceService.getDrSummary(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('getMachineType()', async () => {
    const params = {
      instanceId:
        'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::',
      primaryWorkspaceName: 'Test-workspace-wdc06',
      acceptLanguage: 'testString',
      ifNoneMatch: 'testString',
      standbyWorkspaceName: 'Test-workspace-wdc07',
    };

    const res = await drAutomationServiceService.getMachineType(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('getSchematicWorkspace()', async () => {
    const params = {
      instanceId:
        'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::',
      ifNoneMatch: 'testString',
    };

    const res = await drAutomationServiceService.getSchematicWorkspace(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('getPowervsWorkspacesForCustomVpc()', async () => {
    const params = {
      instanceId:
        'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::',
      locationId: 'testString',
      vpcId: 'r006-2f3b3ab9-2149-49cc-83a1-30a5d93d59b2',
      tgId: '925a7b81-a826-4d0a-8ef9-7496e9dc58bc',
      ifNoneMatch: 'testString',
    };

    const res = await drAutomationServiceService.getPowervsWorkspacesForCustomVpc(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('getPvsworkspaceSchematic()', async () => {
    const params = {
      instanceId:
        'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::',
      schematicId: 'us-south.workspace.projects-service.3ae96a02',
      locationId: 'testString',
      ifNoneMatch: 'testString',
    };

    const res = await drAutomationServiceService.getPvsworkspaceSchematic(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('getManageDr()', async () => {
    const params = {
      instanceId:
        'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::',
      acceptLanguage: 'testString',
      ifNoneMatch: 'testString',
    };

    const res = await drAutomationServiceService.getManageDr(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('createManageDr()', async () => {
    const params = {
      instanceId:
        'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::',
      action: 'done',
      apiKey: 'testString',
      guid: '123e4567-e89b-12d3-a456-426614174000',
      locationId: 'dal10',
      machineType: 'bx2-4x16',
      orchestratorHa: true,
      orchestratorLocationType: 'off-premises',
      orchestratorName: 'adminUser',
      orchestratorPassword: 'testString',
      orchestratorWorkspaceId: 'orch-workspace-01',
      orchestratorWorkspaceLocation: 'us-south',
      proxyIp: '192.168.1.10',
      regionId: 'us-south',
      resourceInstance: 'crn:v1:bluemix:public:resource-controller::res123',
      schematicWorkspaceId: 'workspace123',
      secondaryWorkspaceId: 'secondary-workspace789',
      secret: 'testString',
      secretGroup: 'default-secret-group',
      sshKeyName: 'my-ssh-key',
      sshPublicKey: 'ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEAr...',
      standbyMachineType: 'bx2-8x32',
      standbyOrchestratorName: 'standbyAdmin',
      standbyOrchestratorWorkspaceId: 'orch-standby-02',
      standbyOrchestratorWorkspaceLocation: 'us-east',
      standbySchematicWorkspaceId: 'standby-workspace456',
      standbyTier: 'Premium',
      tier: 'Standard',
      transitGatewayId: 'tgw-67890',
      vpcId: 'vpc-12345',
      standByRedeploy: 'testString',
      acceptLanguage: 'testString',
      ifNoneMatch: 'testString',
      acceptsIncomplete: true,
    };

    const res = await drAutomationServiceService.createManageDr(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('getLastOperation()', async () => {
    const params = {
      instanceId:
        'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::',
      acceptLanguage: 'testString',
      ifNoneMatch: 'testString',
    };

    const res = await drAutomationServiceService.getLastOperation(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('listEvents()', async () => {
    const params = {
      provisionId:
        'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::',
      time: '2025-06-19T23:59:59Z',
      fromTime: '2025-06-19T00:00:00Z',
      toTime: '2025-06-19T23:59:59Z',
      acceptLanguage: 'testString',
      ifNoneMatch: 'testString',
    };

    const res = await drAutomationServiceService.listEvents(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('getEvent()', async () => {
    const params = {
      provisionId:
        'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::',
      eventId: '00116b2a-9326-4024-839e-fb5364b76898',
      acceptLanguage: 'testString',
      ifNoneMatch: 'testString',
    };

    const res = await drAutomationServiceService.getEvent(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });
});
