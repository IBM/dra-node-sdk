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

const { readExternalSources } = require('ibm-cloud-sdk-core');
const PowerhaAutomationServiceV1 = require('../../dist/powerha-automation-service/v1');
const authHelper = require('../resources/auth-helper.js');

// testcase timeout value (200s).
const timeout = 200000;

// Location of our config file.
const configFile = 'powerha_automation_service_v1.env';

const describe = authHelper.prepareTests(configFile);

describe('PowerhaAutomationServiceV1_integration', () => {
  jest.setTimeout(timeout);

  // Service instance
  let powerhaAutomationServiceService;

  test('Initialize service', async () => {
    powerhaAutomationServiceService = PowerhaAutomationServiceV1.newInstance();

    expect(powerhaAutomationServiceService).not.toBeNull();

    const config = readExternalSources(PowerhaAutomationServiceV1.DEFAULT_SERVICE_NAME);
    expect(config).not.toBeNull();

    powerhaAutomationServiceService.enableRetries();
  });

  test('createApiKey()', async () => {
    const params = {
      phaInstanceId: '122552533-4c02-0009-0086-8bd4dabc12',
      apiKey: 'adfadfdsafsdfdsf',
      acceptLanguage: 'en-US',
    };

    const res = await powerhaAutomationServiceService.createApiKey(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(201);
    expect(res.result).toBeDefined();
  });

  test('getClusterNode()', async () => {
    const params = {
      phaInstanceId: '122552533-4c02-0009-0086-8bd4dabc12',
      ifNoneMatch: 'abcdef',
    };

    const res = await powerhaAutomationServiceService.getClusterNode(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('createClusterNode()', async () => {
    const params = {
      phaInstanceId: '122552533-4c02-0009-0086-8bd4dabc12',
      primaryClusterNodes: ['ede4c36e-002c-48da-992e-6039d230c478'],
      secondaryClusterNodes: ['ede4c36e-1234-48da-992e-6039d230c478'],
      acceptLanguage: 'en-US',
      ifNoneMatch: 'abcdef',
    };

    const res = await powerhaAutomationServiceService.createClusterNode(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(201);
    expect(res.result).toBeDefined();
  });

  test('getPowervsWorkspace()', async () => {
    const params = {
      phaInstanceId: '122552533-4c02-0009-0086-8bd4dabc12',
      locationId: 'us-south',
      acceptLanguage: 'en-US',
      ifNoneMatch: 'abcdef',
    };

    const res = await powerhaAutomationServiceService.getPowervsWorkspace(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('getPhaLastOperation()', async () => {
    const params = {
      phaInstanceId: '122552533-4c02-0009-0086-8bd4dabc12',
      acceptLanguage: 'en-US',
      ifNoneMatch: 'abcdef',
    };

    const res = await powerhaAutomationServiceService.getPhaLastOperation(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('getPhaDeployment()', async () => {
    const params = {
      phaInstanceId: '122552533-4c02-0009-0086-8bd4dabc12',
      ifNoneMatch: 'abcdef',
    };

    const res = await powerhaAutomationServiceService.getPhaDeployment(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('createPhaDeployment()', async () => {
    const params = {
      phaInstanceId: '122552533-4c02-0009-0086-8bd4dabc12',
      locationId: 'loc-us-south-01',
      primaryWorkspace: 'workspace-primary',
      apiKey: '123635364646fghrtfhbfdhb',
      clusterType: 'standard',
      configureType: 'automatic',
      primaryClusterNodes: ['ede4c36e-002c-48da-992e-6039d230c478'],
      standbyClusterNodes: ['843a8e1f-05bb-4164-8c73-de39e016c2b4'],
      primaryLocation: 'us-south',
      secondaryLocation: 'us-east',
      secondaryWorkspace: 'workspace-secondary',
      acceptLanguage: 'en-US',
      ifNoneMatch: 'abcdef',
    };

    const res = await powerhaAutomationServiceService.createPhaDeployment(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(201);
    expect(res.result).toBeDefined();
  });

  test('getSupportedLocation()', async () => {
    const params = {
      phaInstanceId: '122552533-4c02-0009-0086-8bd4dabc12',
      ifNoneMatch: 'abcdef',
    };

    const res = await powerhaAutomationServiceService.getSupportedLocation(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('listServiceInstanceEvents()', async () => {
    const params = {
      phaInstanceId: '122552533-4c02-0009-0086-8bd4dabc12',
      time: '2025-06-19T23:59:59Z',
      fromTime: '2025-06-19T00:00:00Z',
      toTime: '2025-06-19T23:59:59Z',
      acceptLanguage: 'en-US',
      ifNoneMatch: 'abcdef',
    };

    const res = await powerhaAutomationServiceService.listServiceInstanceEvents(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('getServiceInstanceEvent()', async () => {
    const params = {
      phaInstanceId: '122552533-4c02-0009-0086-8bd4dabc12',
      eventId: '00116b2a-9326-4024-839e-fb5364b76898',
      acceptLanguage: 'en-US',
      ifNoneMatch: 'abcdef',
    };

    const res = await powerhaAutomationServiceService.getServiceInstanceEvent(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('getPhaAgentFileDownloadJobStatus()', async () => {
    const params = {
      phaInstanceId: '122552533-4c02-0009-0086-8bd4dabc12',
      phaJobId: '4235r23r5vdfdf-2323',
      acceptLanguage: 'en-US',
      ifNoneMatch: 'abcdef',
    };

    const res = await powerhaAutomationServiceService.getPhaAgentFileDownloadJobStatus(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('downloadPhaAgentFile()', async () => {
    const params = {
      phaInstanceId: '122552533-4c02-0009-0086-8bd4dabc12',
      acceptLanguage: 'en-US',
      ifNoneMatch: 'abcdef',
    };

    const res = await powerhaAutomationServiceService.downloadPhaAgentFile(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });

  test('deleteClusterNode()', async () => {
    const params = {
      phaInstanceId: '122552533-4c02-0009-0086-8bd4dabc12',
      vmId: 'r006-2f3b3ab9-2149-49cc-83a1-30a5d93d59b2',
      ifNoneMatch: 'abcdef',
    };

    const res = await powerhaAutomationServiceService.deleteClusterNode(params);
    expect(res).toBeDefined();
    expect(res.status).toBe(200);
    expect(res.result).toBeDefined();
  });
});
