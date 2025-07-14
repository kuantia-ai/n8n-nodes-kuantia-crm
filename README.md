# @kuantia-ai/n8n-nodes-kuantia-crm

<p align="center">
  <img src="./kuantia.png" width='150px'/>
  <img src="./n8n.png" width='150px'/>
</p>

Automate your
[**Kuantia CRM**](https://www.kuantia.co/)
workflows with
[**n8n**](https://n8n.io/)
!

![screenshot](node.png)

[![npm version](https://img.shields.io/npm/v/@kuantia-ai/n8n-nodes-kuantia-crm.svg)](https://www.npmjs.com/package/@kuantia-ai/n8n-nodes-kuantia-crm)

- GitHub: [kuantia-ai/n8n-nodes-kuantia-crm](http://github.com/kuantia-ai/n8n-nodes-kuantia-crm)
- npm: [@kuantia-ai/n8n-nodes-kuantia-crm](https://www.npmjs.com/package/@kuantia-ai/n8n-nodes-kuantia-crm)
- Kuantia CRM API reference: [https://api.kuantia.co/api/swagger-json](https://api.kuantia.co/api/swagger-json)
- 👉 Generated from
  [Kuantia CRM OpenAPI](https://api.kuantia.co/api/swagger-json)
  using
  [**kuantia-ai/n8n-openapi-node**](https://github.com/kuantia-ai/n8n-openapi-node)

# Tables of Contents

<!-- toc -->

- [@kuantia-ai/n8n-nodes-kuantia-crm](#kuantia-ain8n-nodes-kuantia-crm)
- [Tables of Contents](#tables-of-contents)
- [Installation](#installation)
- [Usage](#usage)
  - [Credentials](#credentials)
    - [Platform](#platform)
    - [User](#user)
    - [Inbox](#inbox)
- [Development](#development)

<!-- tocstop -->

# Installation
Install [the community node package in your n8n instance](https://docs.n8n.io/integrations/community-nodes/installation/gui-install/):
```
@kuantia-ai/n8n-nodes-kuantia-crm
```

# Usage
1. Install the community package to your n8n instance.
2. Add **Kuantia CRM API** **credentials** in **n8n**.
3. Create a new workflow with the **Kuantia CRM** node.

## Credentials
There are few types of credentials (accounts) that you can use to authenticate with Kuantia CRM API.

For different Kuantia CRM API Endpoints you'll need different credentials - please
refer to the [Kuantia CRM API documentation](https://api.kuantia.co/api/swagger-json) for more information.

We suggest you create **Kuantia CRM API** credentials in **n8n** for each type of account and name it `Kuantia CRM - {TYPE}` 
for better clarity.

![](./screenshots/n8n-credentials.png)

### Platform
This token can be obtained by the system admin after creating a platformApp. This token should be used to provision agent bots, accounts, users and their roles.

![](./screenshots/kuantia-crm-platform-token.png)

### User
This token can be obtained by visiting the profile page or via rails console.
![](./screenshots/kuantia-crm-profile-token.png)

or **Super Admin** token in some cases

![](./screenshots/kuantia-crm-admin-token.png)

### Inbox
This token can be obtained by visiting the inbox settings page.

![](./screenshots/kuantia-crm-inbox-token.png)

# Development
The node is generated from the
[Kuantia CRM OpenAPI](https://api.kuantia.co/api/swagger-json)
using
[**kuantia-ai/n8n-openapi-node**](https://github.com/kuantia-ai/n8n-openapi-node).

Likely the fix should be done in the OpenAPI specification file or in the generator itself.