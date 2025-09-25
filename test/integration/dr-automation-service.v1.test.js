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

  test('getServiceInstanceKeyV1()', async () => {
    const params = {
      instanceId:
        'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::',
      acceptLanguage: 'testString',
      ifNoneMatch: 'testString',
    };

    const res = await drAutomationServiceService.getServiceInstanceKeyV1(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('createServiceInstanceKeyValidation()', async () => {
    const params = {
      instanceId:
        'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::',
      apiKey: 'abcdefrg_izklmnop_fxbEED',
      acceptLanguage: 'testString',
      ifNoneMatch: 'testString',
    };

    const res = await drAutomationServiceService.createServiceInstanceKeyValidation(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('replaceServiceInstanceApiKey()', async () => {
    const params = {
      instanceId:
        'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::',
      apiKey: 'adfadfdsafsdfdsf',
      acceptLanguage: 'testString',
      ifNoneMatch: 'testString',
    };

    const res = await drAutomationServiceService.replaceServiceInstanceApiKey(params);
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

  test('getDrLocation()', async () => {
    const params = {
      instanceId:
        'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::',
      acceptLanguage: 'testString',
      ifNoneMatch: 'testString',
    };

    const res = await drAutomationServiceService.getDrLocation(params);
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

  test('getValidateClusterType()', async () => {
    const params = {
      instanceId:
        'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::',
      orchestratorClusterType: 'on-premises',
      acceptLanguage: 'testString',
      ifNoneMatch: 'testString',
    };

    const res = await drAutomationServiceService.getValidateClusterType(params);
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

  test('getValidatePowerVsWorkspace()', async () => {
    const params = {
      instanceId:
        'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::',
      workspaceId: '75cbf05b-78f6-406e-afe7-a904f646d798',
      crn: 'crn:v1:bluemix:public:power-iaas:dal10:a/094f4214c75941f991da601b001df1fe:75cbf05b-78f6-406e-afe7-a904f646d798::',
      locationUrl: 'https://us-south.power-iaas.cloud.ibm.com',
      ifNoneMatch: 'testString',
    };

    const res = await drAutomationServiceService.getValidatePowerVsWorkspace(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('getValidateProxyip()', async () => {
    const params = {
      instanceId:
        'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::',
      proxyip: '10.30.40.5:3128',
      vpcLocation: 'us-south',
      vpcId: 'r006-2f3b3ab9-2149-49cc-83a1-30a5d93d59b2',
      ifNoneMatch: 'testString',
    };

    const res = await drAutomationServiceService.getValidateProxyip(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('getPvsworkspacesCustomVpc()', async () => {
    const params = {
      instanceId:
        'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::',
      locationId: 'testString',
      vpcId: 'r006-2f3b3ab9-2149-49cc-83a1-30a5d93d59b2',
      tgId: '925a7b81-a826-4d0a-8ef9-7496e9dc58bc',
      ifNoneMatch: 'testString',
    };

    const res = await drAutomationServiceService.getPvsworkspacesCustomVpc(params);
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

    const params = {
      instanceId:
        'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::',
      standByRedeploy: 'true',
      context: contextModel,
      planId: 'plan1234',
      serviceId: 'service1234',
      action: 'done',
      parameters: manageDrParametersModel,
      acceptLanguage: 'testString',
      ifNoneMatch: 'testString',
      acceptsIncomplete: true,
    };

    const res = await drAutomationServiceService.createManageDr(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('getServiceInstanceDrDeployment()', async () => {
    const params = {
      instanceId:
        'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::',
      ifNoneMatch: 'testString',
    };

    const res = await drAutomationServiceService.getServiceInstanceDrDeployment(params);
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
