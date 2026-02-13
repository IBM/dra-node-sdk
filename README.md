[![Build Status](https://v3.travis-ci.com/DRAutomation/dra-node-sdk.svg?token=Z799xXryYYPor3yyJxEs&branch=main)](https://v3.travis.ibm.com/DRAutomation/dra-node-sdk)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://cloud.ibm.com/docs/dr-automation-powervs)
<!--
[![npm-version](https://img.shields.io/npm/v/DRAutomation/dra-node-sdk.svg)](https://www.npmjs.com/package/)
-->
# IBM Cloud DrAutomation Node SDK
Node.js client library to interact with various [IBM Cloud DrAutomation services](https://cloud.ibm.com/docs/dr-automation-powervs).

Disclaimer: this SDK is being released initially as a **pre-release** version.
Changes might occur which impact applications that use this SDK.

## Table of Contents

<!--
  The TOC below is generated using the `markdown-toc` node package.

      https://github.com/jonschlinkert/markdown-toc

  You should regenerate the TOC after making changes to this file.

      npx markdown-toc -i README.md
  -->

<!-- toc -->

- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Using the SDK](#using-the-sdk)
- [Questions](#questions)
- [Issues](#issues)
- [Open source @ IBM](#open-source--ibm)
- [Contributing](#contributing)
- [License](#license)

<!-- tocstop -->

<!-- --------------------------------------------------------------- -->
## Overview

The IBM Cloud DrAutomation services Node.js SDK allows developers to programmatically interact with the following
IBM Cloud services:

Service Name | Import Path
--- | ---
[DrAutomation Service](https://cloud.ibm.com/apidocs/dr-automation-powervs) | dra-node-sdk/dr-automation-service/v1

## Prerequisites
* You need an [IBM Cloud][ibm-cloud-onboarding] account.
* **Node.js >=18**: This SDK is tested with Node.js versions 18 and up. It may work on previous versions but this is not officially supported.

[ibm-cloud-onboarding]: http://cloud.ibm.com/registration

## Installation

```sh
npm install @ibm-cloud/ibm-dr-automation-service
```

## How to Import 

```sh
const DrAutomationServiceV1 = require('@ibm-cloud/ibm-dr-automation-service');
```


## Using the SDK
For general SDK usage information, please see
[this link](https://github.com/IBM/ibm-cloud-sdk-common/blob/main/README.md)

### Environment Configuration

The SDK can be configured using environment variables. Here's an example configuration:

```bash
# Service URL (for development/testing)
export DR_AUTOMATION_SERVICE_URL=https://power-dra.cloud.ibm.com

# Authentication type
export DR_AUTOMATION_SERVICE_AUTH_TYPE=bearerToken

# Bearer token for authentication
export DR_AUTOMATION_SERVICE_BEARER_TOKEN=eyJraWQiOiIyMDE5MD......
```

**Note:** The bearer token shown above is an example. For production use:
- Use the actual service endpoint URL 
- Generate your own valid IAM bearer token

## Questions

If you are having difficulties using this SDK or have a question about the IBM Cloud services,
please ask a question at
[Stack Overflow](http://stackoverflow.com/questions/ask?tags=ibm-cloud).

## Issues
If you encounter an issue with the SDK, you are welcome to submit
a [bug report](https://github.com/IBM/dra-node-sdk/issues).
Before that, please search for similar issues. It's possible someone has
already encountered this issue.

## Open source @ IBM
Find more open source projects on the [IBM Github Page](http://ibm.github.io/)

## Contributing
See [CONTRIBUTING](CONTRIBUTING.md).

## License

This project is released under the Apache 2.0 license.
The license's full text can be found in
[LICENSE](LICENSE).
