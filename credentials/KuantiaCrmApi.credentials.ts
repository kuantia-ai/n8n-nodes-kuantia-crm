import {
    IAuthenticateGeneric, ICredentialTestRequest,
    ICredentialType,
    INodeProperties,
} from 'n8n-workflow';

export class KuantiaCrmApi implements ICredentialType {
    name = 'kuantiaCrmApi';
    displayName = 'Kuantia CRM API';
    documentationUrl = 'https://api.kuantia.co/api/swagger-json';
    properties: INodeProperties[] = [
        {
            displayName: 'Kuantia CRM API URL',
            name: 'url',
            placeholder: "https://api.kuantia.co",
            type: 'string',
            default: '',
            required: true,
        },
        {
            displayName: 'Bot Token',
            name: 'botToken',
            type: 'string',
            placeholder: "Paste your bot token here",
            default: '',
            required: true,
            typeOptions: {password: true},
        },
        {
            displayName: 'CRM Account Id',
            name: 'crmAccountId',
            type: 'string',
            placeholder: "Paste your CRM account id here",
            default: '',
            required: true,
        },
    ];

    authenticate: IAuthenticateGeneric = {
        type: 'generic',
        properties: {
            headers: {
                'Authorization': 'Bearer ={{$credentials.botToken}}',
                'X-ACTIVE-ACCOUNT-ID': '={{$credentials.crmAccountId}}',
            },
        },
    };

    test: ICredentialTestRequest = {
        request: {
            baseURL: '={{$credentials.url}}',
            url: '/api',
        },
    };
}
