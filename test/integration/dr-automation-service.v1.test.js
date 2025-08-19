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

  test('serviceInstanceGetKeyV1()', async () => {
    const params = {
      instanceId:
        'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::',
      acceptLanguage: 'testString',
      ifNoneMatch: 'testString',
    };

    const res = await drAutomationServiceService.serviceInstanceGetKeyV1(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('serviceInstanceValidateKey()', async () => {
    const params = {
      instanceId:
        'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::',
      apiKey: 'azGTyameQEAhya_IBL8EZXqTUaKTYg5IQR7z1_fxbEED',
      acceptLanguage: 'testString',
      ifNoneMatch: 'testString',
    };

    const res = await drAutomationServiceService.serviceInstanceValidateKey(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('serviceInstanceUpdateApiKey()', async () => {
    const params = {
      instanceId:
        'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf8::',
      apiKey: 'azGTyameQEAhya_IBL8EZXqTUaKTYg5IQR7z1_fxbEED',
      acceptLanguage: 'testString',
      ifNoneMatch: 'testString',
    };
    const res = await drAutomationServiceService.serviceInstanceUpdateApiKey(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('drGrsLocationPairsDetails()', async () => {
    const params = {
      instanceId:
        'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::',
      acceptLanguage: 'testString',
      ifNoneMatch: 'testString',
    };

    const res = await drAutomationServiceService.drGrsLocationPairsDetails(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('serviceInstanceGetdrlocations()', async () => {
    const params = {
      instanceId:
        'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::',
      acceptLanguage: 'testString',
      ifNoneMatch: 'testString',
    };

    const res = await drAutomationServiceService.serviceInstanceGetdrlocations(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('drManagedVmsDetails()', async () => {
    const params = {
      instanceId:
        'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::',
      acceptLanguage: 'testString',
      ifNoneMatch: 'testString',
    };

    const res = await drAutomationServiceService.drManagedVmsDetails(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('drSummaryDetails()', async () => {
    const params = {
      instanceId:
        'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::',
      acceptLanguage: 'testString',
      ifNoneMatch: 'testString',
    };

    const res = await drAutomationServiceService.drSummaryDetails(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('validateClusterType()', async () => {
    const params = {
      instanceId:
        'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::',
      orchestratorClusterType: 'on-premises',
      acceptLanguage: 'testString',
      ifNoneMatch: 'testString',
    };

    const res = await drAutomationServiceService.validateClusterType(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('machinetypesDetails()', async () => {
    const params = {
      instanceId:
        'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::',
      primaryWorkspaceName: 'Test-workspace-wdc06',
      acceptLanguage: 'testString',
      ifNoneMatch: 'testString',
      standbyWorkspaceName: 'Test-workspace-wdc07',
    };

    const res = await drAutomationServiceService.machinetypesDetails(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('schematicWorkspaceGetoperation()', async () => {
    const params = {
      instanceId:
        'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::',
      ifNoneMatch: 'testString',
    };

    const res = await drAutomationServiceService.schematicWorkspaceGetoperation(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('validatePowerVsWorkspace()', async () => {
    const params = {
      instanceId:
        'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::',
      workspaceId: '75cbf05b-78f6-406e-afe7-a904f646d798',
      crn: 'crn:v1:bluemix:public:power-iaas:dal10:a/094f4214c75941f991da601b001df1fe:75cbf05b-78f6-406e-afe7-a904f646d798::',
      locationUrl: 'https://us-south.power-iaas.cloud.ibm.com',
      ifNoneMatch: 'testString',
    };

    const res = await drAutomationServiceService.validatePowerVsWorkspace(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('validateProxyip()', async () => {
    const params = {
      instanceId:
        'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::',
      proxyip: '10.30.40.5:3128',
      vpcLocation: 'us-south',
      vpcId: 'r006-2f3b3ab9-2149-49cc-83a1-30a5d93d59b2',
      ifNoneMatch: 'testString',
    };

    const res = await drAutomationServiceService.validateProxyip(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('workspaceVpcgetoperation()', async () => {
    const params = {
      instanceId:
        'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::',
      locationId: 'testString',
      vpcId: 'r006-2f3b3ab9-2149-49cc-83a1-30a5d93d59b2',
      tgId: '925a7b81-a826-4d0a-8ef9-7496e9dc58bc',
      ifNoneMatch: 'testString',
    };

    const res = await drAutomationServiceService.workspaceVpcgetoperation(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('workspaceGetoperation()', async () => {
    const params = {
      instanceId:
        'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::',
      schematicId: 'us-south.workspace.projects-service.3ae96a02',
      locationId: 'testString',
      ifNoneMatch: 'testString',
    };

    const res = await drAutomationServiceService.workspaceGetoperation(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('serviceInstanceFetchManageDr()', async () => {
    const params = {
      instanceId:
        'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::',
      acceptLanguage: 'testString',
      ifNoneMatch: 'testString',
    };

    const res = await drAutomationServiceService.serviceInstanceFetchManageDr(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('serviceInstanceManageDr()', async () => {
    // Request models needed by this operation.

    // Context
    const contextModel = {
      dr_location_id: 'dal10',
      dr_orchestrator_name: 'drautomationprimarynew1',
      dr_orchestrator_password: 'Password1234567',
      dr_orchestrator_workspace_id: '75cbf05b-78f6-406e-afe7-a904f646d798',
      machine_type: 's922',
      orchestrator_cluster_type: 'off-premises',
      schematic_workspace_id: 'us-south.workspace.projects-service.3ae96a02',
      ssh_key_name: 'vijaykey',
      standby_machine_type: 's922',
      standby_orchestrator_name: 'drautomationstandbynew1',
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
        'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf7lal::',
      standByRedeploy: 'false',
      context: contextModel,
      planId: 'plan1234',
      serviceId: 'service1234',
      action: 'done',
      parameters: manageDrParametersModel,
      acceptLanguage: 'testString',
      ifNoneMatch: 'testString',
      acceptsIncomplete: true,
    };

    const res = await drAutomationServiceService.serviceInstanceManageDr(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('serviceInstanceDrdeployment()', async () => {
    const params = {
      instanceId:
        'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf7lal::',
      ifNoneMatch: 'testString',
    };

    const res = await drAutomationServiceService.serviceInstanceDrdeployment(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('serviceInstanceLastoperation()', async () => {
    const params = {
      instanceId:
        'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::',
      acceptLanguage: 'testString',
      ifNoneMatch: 'testString',
    };

    const res = await drAutomationServiceService.serviceInstanceLastoperation(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('serviceInstanceEventsGetquery()', async () => {
    const params = {
      provisionId:
        'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::',
      time: '2025-06-19T23:59:59Z',
      fromTime: '2025-06-19T00:00:00Z',
      toTime: '2025-06-19T23:59:59Z',
      acceptLanguage: 'testString',
      ifNoneMatch: 'testString',
    };

    const res = await drAutomationServiceService.serviceInstanceEventsGetquery(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('serviceInstanceEventsGet()', async () => {
    const params = {
      provisionId:
        'crn:v1:staging:public:power-dr-automation:global:a/a123456fb04ceebfb4a9fd38c22334455:123456d3-1122-3344-b67d-4389b44b7bf9::',
      eventId: '00116b2a-9326-4024-839e-fb5364b76898',
      acceptLanguage: 'testString',
      ifNoneMatch: 'testString',
    };

    const res = await drAutomationServiceService.serviceInstanceEventsGet(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });
});
