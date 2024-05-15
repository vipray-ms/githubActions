# JSON API Spec

```json title="JSON API Spec"
{
    "swagger": "2.0",
    "info": {
        "title": "NewRelic.Observability",
        "version": "2022-07-01-preview",
        "x-cadl-generated": [
            {
                "emitter": "@azure-tools/cadl-autorest"
            }
        ]
    },
    "schemes": [
        "https"
    ],
    "host": "management.azure.com",
    "produces": [
        "application/json"
    ],
    "consumes": [
        "application/json"
    ],
    "security": [
        {
            "azure_auth": [
                "user_impersonation"
            ]
        }
    ],
    "securityDefinitions": {
        "azure_auth": {
            "type": "oauth2",
            "description": "Azure Active Directory OAuth2 Flow.",
            "flow": "implicit",
            "authorizationUrl": "https://login.microsoftonline.com/common/oauth2/authorize",
            "scopes": {
                "user_impersonation": "impersonate your user account"
            }
        }
    },
    "paths": {
        "/subscriptions/{subscriptionId}/providers/NewRelic.Observability/accounts": {
            "get": {
                "tags": [
                    "Accounts"
                ],
                "operationId": "Accounts_List",
                "description": "List all the existing accounts",
                "parameters": [
                    {
                        "$ref": "../../../../../common-types/resource-management/v3/types.json#/parameters/ApiVersionParameter"
                    },
                    {
                        "$ref": "../../../../../common-types/resource-management/v3/types.json#/parameters/SubscriptionIdParameter"
                    },
                    {
                        "$ref": "#/parameters/UserEmailParameter"
                    },
                    {
                        "$ref": "#/parameters/LocationParameter"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "ARM operation completed successfully.",
                        "schema": {
                            "$ref": "#/definitions/AccountsListResponse"
                        }
                    },
                    "default": {
                        "description": "An unexpected error response.",
                        "schema": {
                            "$ref": "../../../../../common-types/resource-management/v3/types.json#/definitions/ErrorResponse"
                        }
                    }
                },
                "x-ms-pageable": {
                    "nextLinkName": "nextLink"
                },
                "x-ms-examples": {
                    "Accounts_List_MaximumSet_Gen": {
                        "$ref": "./examples/Accounts_List_MaximumSet_Gen.json"
                    },
                    "Accounts_List_MinimumSet_Gen": {
                        "$ref": "./examples/Accounts_List_MinimumSet_Gen.json"
                    }
                }
            }
        },
        "/subscriptions/{subscriptionId}/providers/NewRelic.Observability/organizations": {
            "get": {
                "tags": [
                    "Organizations"
                ],
                "operationId": "Organizations_List",
                "description": "List all the existing organizations",
                "parameters": [
                    {
                        "$ref": "../../../../../common-types/resource-management/v3/types.json#/parameters/ApiVersionParameter"
                    },
                    {
                        "$ref": "../../../../../common-types/resource-management/v3/types.json#/parameters/SubscriptionIdParameter"
                    },
                    {
                        "$ref": "#/parameters/UserEmailParameter"
                    },
                    {
                        "$ref": "#/parameters/LocationParameter"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "ARM operation completed successfully.",
                        "schema": {
                            "$ref": "#/definitions/OrganizationsListResponse"
                        }
                    },
                    "default": {
                        "description": "An unexpected error response.",
                        "schema": {
                            "$ref": "../../../../../common-types/resource-management/v3/types.json#/definitions/ErrorResponse"
                        }
                    }
                },
                "x-ms-pageable": {
                    "nextLinkName": "nextLink"
                },
                "x-ms-examples": {
                    "Organizations_List_MaximumSet_Gen": {
                        "$ref": "./examples/Organizations_List_MaximumSet_Gen.json"
                    },
                    "Organizations_List_MinimumSet_Gen": {
                        "$ref": "./examples/Organizations_List_MinimumSet_Gen.json"
                    }
                }
            }
        },
        "/subscriptions/{subscriptionId}/providers/NewRelic.Observability/plans": {
            "get": {
                "tags": [
                    "Plan"
                ],
                "operationId": "Plans_List",
                "description": "List plans data",
                "parameters": [
                    {
                        "$ref": "../../../../../common-types/resource-management/v3/types.json#/parameters/ApiVersionParameter"
                    },
                    {
                        "$ref": "../../../../../common-types/resource-management/v3/types.json#/parameters/SubscriptionIdParameter"
                    },
                    {
                        "$ref": "#/parameters/AccountIdParameter"
                    },
                    {
                        "$ref": "#/parameters/OrganizationIdParameter"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "ARM operation completed successfully.",
                        "schema": {
                            "$ref": "#/definitions/PlanDataListResponse"
                        }
                    },
                    "default": {
                        "description": "An unexpected error response.",
                        "schema": {
                            "$ref": "../../../../../common-types/resource-management/v3/types.json#/definitions/ErrorResponse"
                        }
                    }
                },
                "x-ms-pageable": {
                    "nextLinkName": "nextLink"
                },
                "x-ms-examples": {
                    "Plans_List_MaximumSet_Gen": {
                        "$ref": "./examples/Plans_List_MaximumSet_Gen.json"
                    },
                    "Plans_List_MinimumSet_Gen": {
                        "$ref": "./examples/Plans_List_MinimumSet_Gen.json"
                    }
                }
            }
        }
    },
    "definitions": {
        "AccountCreationSource": {
            "type": "string",
            "description": "Source of Account creation",
            "enum": [
                "LIFTR",
                "NEWRELIC"
            ],
            "x-ms-enum": {
                "name": "AccountCreationSource",
                "modelAsString": true,
                "values": [
                    {
                        "name": "LIFTR",
                        "value": "LIFTR",
                        "description": "Account is created from LIFTR"
                    },
                    {
                        "name": "NEWRELIC",
                        "value": "NEWRELIC",
                        "description": "Account is created from NEWRELIC"
                    }
                ]
            }
        },
        "AccountIdParameter": {
            "type": "object",
            "properties": {},
            "description": "Account Id parameter"
        },
        "AccountInfo": {
            "type": "object",
            "properties": {
                "accountId": {
                    "type": "string",
                    "description": "Account id"
                },
                "ingestionKey": {
                    "$ref": "#/definitions/SecureString",
                    "description": "ingestion key of account"
                },
                "region": {
                    "type": "string",
                    "description": "NewRelic account region"
                }
            },
            "description": "Account Info of the NewRelic account"
        },
        "AccountProperties": {
            "type": "object",
            "properties": {
                "organizationId": {
                    "type": "string",
                    "description": "organization id"
                },
                "accountId": {
                    "type": "string",
                    "description": "account id"
                },
                "accountName": {
                    "type": "string",
                    "description": "account name"
                },
                "region": {
                    "type": "string",
                    "description": "region"
                }
            },
            "description": "List of all the New relic accounts for the given user"
        },
        "AccountsListResponse": {
            "type": "object",
            "properties": {
                "value": {
                    "type": "array",
                    "items": {
                        "$ref": "#/definitions/AccountResource"
                    },
                    "x-cadl-name": "AccountResource[]",
                    "description": "The AccountResource items on this page"
                },
                "nextLink": {
                    "type": "string",
                    "format": "uri",
                    "description": "The link to the next page of items",
                    "x-cadl-name": "Rest.ResourceLocation"
                }
            },
            "description": "Response of get all accounts Operation.",
            "required": [
                "value"
            ]
        },
        "AccountResource": {
            "type": "object",
            "properties": {
                "properties": {
                    "$ref": "#/definitions/AccountProperties",
                    "description": "The resource-specific properties for this resource.",
                    "x-ms-client-flatten": true,
                    "x-ms-mutability": [
                        "read",
                        "create"
                    ]
                }
            },
            "description": "The details of a account resource.",
            "allOf": [
                {
                    "$ref": "../../../../../common-types/resource-management/v3/types.json#/definitions/ProxyResource"
                }
            ]
        },
        "BillingCycle": {
            "type": "string",
            "description": "Different usage type like YEARLY/MONTHLY",
            "enum": [
                "YEARLY",
                "MONTHLY",
                "WEEKLY"
            ],
            "x-ms-enum": {
                "name": "BillingCycle",
                "modelAsString": true,
                "values": [
                    {
                        "name": "YEARLY",
                        "value": "YEARLY",
                        "description": "Billing cycle is YEARLY"
                    },
                    {
                        "name": "MONTHLY",
                        "value": "MONTHLY",
                        "description": "Billing cycle is MONTHLY"
                    },
                    {
                        "name": "WEEKLY",
                        "value": "WEEKLY",
                        "description": "Billing cycle is WEEKLY"
                    }
                ]
            }
        },
        "BillingSource": {
            "type": "string",
            "description": "Billing source",
            "enum": [
                "AZURE",
                "NEWRELIC"
            ],
            "x-ms-enum": {
                "name": "BillingSource",
                "modelAsString": true,
                "values": [
                    {
                        "name": "AZURE",
                        "value": "AZURE",
                        "description": "Billing source is Azure"
                    },
                    {
                        "name": "NEWRELIC",
                        "value": "NEWRELIC"
                    }
                ]
            }
        },
        "NewRelicAccountProperties": {
            "type": "object",
            "properties": {
                "userId": {
                    "type": "string",
                    "description": "User id"
                },
                "accountInfo": {
                    "$ref": "#/definitions/AccountInfo",
                    "description": "NewRelic Account Information"
                },
                "organizationInfo": {
                    "$ref": "#/definitions/OrganizationInfo",
                    "description": "NewRelic Organization Information"
                },
                "singleSignOnProperties": {
                    "$ref": "#/definitions/NewRelicSingleSignOnProperties",
                    "description": "date when plan was applied"
                }
            },
            "description": "Properties of the NewRelic account"
        },
        "NewRelicMonitorResource": {
            "type": "object",
            "properties": {
                "properties": {
                    "$ref": "#/definitions/MonitorProperties",
                    "description": "The resource-specific properties for this resource.",
                    "x-ms-client-flatten": true,
                    "x-ms-mutability": [
                        "read",
                        "create"
                    ]
                },
                "identity": {
                    "$ref": "../../../../../common-types/resource-management/v4/managedidentity.json#/definitions/ManagedServiceIdentity",
                    "description": "The managed service identities assigned to this resource."
                }
            },
            "description": "A Monitor Resource by NewRelic",
            "required": [
                "properties"
            ],
            "allOf": [
                {
                    "$ref": "../../../../../common-types/resource-management/v3/types.json#/definitions/TrackedResource"
                }
            ]
        },
        "NewRelicMonitorResourceListResult": {
            "type": "object",
            "properties": {
                "value": {
                    "type": "array",
                    "items": {
                        "$ref": "#/definitions/NewRelicMonitorResource"
                    },
                    "x-cadl-name": "NewRelicMonitorResource[]",
                    "description": "The NewRelicMonitorResource items on this page"
                },
                "nextLink": {
                    "type": "string",
                    "format": "uri",
                    "description": "The link to the next page of items",
                    "x-cadl-name": "Rest.ResourceLocation"
                }
            },
            "description": "The response of a NewRelicMonitorResource list operation.",
            "required": [
                "value"
            ]
        },
        "NewRelicMonitorResourceUpdate": {
            "type": "object",
            "properties": {
                "identity": {
                    "$ref": "../../../../../common-types/resource-management/v4/managedidentity.json#/definitions/ManagedServiceIdentity",
                    "description": "The managed service identities assigned to this resource."
                },
                "tags": {
                    "type": "object",
                    "additionalProperties": {
                        "type": "string"
                    },
                    "x-cadl-name": "Record<string>",
                    "description": "Resource tags."
                },
                "properties": {
                    "$ref": "#/definitions/NewRelicMonitorResourceUpdateProperties",
                    "x-ms-client-flatten": true
                }
            },
            "description": "The type used for update operations of the NewRelicMonitorResource."
        },
        "NewRelicMonitorResourceUpdateProperties": {
            "type": "object",
            "properties": {
                "newRelicAccountProperties": {
                    "$ref": "#/definitions/NewRelicAccountProperties",
                    "description": "MarketplaceSubscriptionStatus of the resource"
                },
                "userInfo": {
                    "$ref": "#/definitions/UserInfo",
                    "description": "User Info"
                },
                "planData": {
                    "$ref": "#/definitions/PlanData",
                    "description": "Plan details"
                },
                "orgCreationSource": {
                    "$ref": "#/definitions/OrgCreationSource",
                    "description": "Source of org creation"
                },
                "accountCreationSource": {
                    "$ref": "#/definitions/AccountCreationSource",
                    "description": "Source of account creation"
                }
            },
            "description": "The updatable properties of the NewRelicMonitorResource."
        },
        "NewRelicSingleSignOnProperties": {
            "type": "object",
            "properties": {
                "singleSignOnState": {
                    "$ref": "#/definitions/SingleSignOnStates",
                    "description": "Single sign-on state"
                },
                "enterpriseAppId": {
                    "type": "string",
                    "description": "The Id of the Enterprise App used for Single sign-on."
                },
                "singleSignOnUrl": {
                    "type": "string",
                    "description": "The login URL specific to this NewRelic Organization"
                },
                "provisioningState": {
                    "$ref": "#/definitions/ProvisioningState",
                    "description": "Provisioning state"
                }
            },
            "description": "Single sign on Info of the NewRelic account"
        },
        "OrgCreationSource": {
            "type": "string",
            "description": "Source of Org creation",
            "enum": [
                "LIFTR",
                "NEWRELIC"
            ],
            "x-ms-enum": {
                "name": "OrgCreationSource",
                "modelAsString": true,
                "values": [
                    {
                        "name": "LIFTR",
                        "value": "LIFTR",
                        "description": "Org is created from LIFTR"
                    },
                    {
                        "name": "NEWRELIC",
                        "value": "NEWRELIC",
                        "description": "Org is created from NEWRELIC"
                    }
                ]
            }
        },
        "OrganizationIdParameter": {
            "type": "object",
            "properties": {},
            "description": "Organization Id parameter"
        },
        "OrganizationInfo": {
            "type": "object",
            "properties": {
                "organizationId": {
                    "type": "string",
                    "description": "Organization id"
                }
            },
            "description": "Organization Info of the NewRelic account"
        },
        "OrganizationProperties": {
            "type": "object",
            "properties": {
                "organizationId": {
                    "type": "string",
                    "description": "organization id"
                },
                "organizationName": {
                    "type": "string",
                    "description": "organization name"
                },
                "billingSource": {
                    "$ref": "#/definitions/BillingSource",
                    "description": "Billing source"
                }
            },
            "description": "Details of Organizations"
        },
        "OrganizationsListResponse": {
            "type": "object",
            "properties": {
                "value": {
                    "type": "array",
                    "items": {
                        "$ref": "#/definitions/OrganizationResource"
                    },
                    "x-cadl-name": "OrganizationResource[]",
                    "description": "The OrganizationResource items on this page"
                },
                "nextLink": {
                    "type": "string",
                    "format": "uri",
                    "description": "The link to the next page of items",
                    "x-cadl-name": "Rest.ResourceLocation"
                }
            },
            "description": "Response of get all organizations Operation.",
            "required": [
                "value"
            ]
        },
        "OrganizationResource": {
            "type": "object",
            "properties": {
                "properties": {
                    "$ref": "#/definitions/OrganizationProperties",
                    "description": "The resource-specific properties for this resource.",
                    "x-ms-client-flatten": true,
                    "x-ms-mutability": [
                        "read",
                        "create"
                    ]
                }
            },
            "description": "The details of a Organization resource.",
            "allOf": [
                {
                    "$ref": "../../../../../common-types/resource-management/v3/types.json#/definitions/ProxyResource"
                }
            ]
        },
        "PlanData": {
            "type": "object",
            "properties": {
                "usageType": {
                    "$ref": "#/definitions/UsageType",
                    "description": "Different usage type like PAYG/COMMITTED. this could be enum"
                },
                "billingCycle": {
                    "$ref": "#/definitions/BillingCycle",
                    "description": "Different billing cycles like MONTHLY/WEEKLY. this could be enum"
                },
                "planDetails": {
                    "type": "string",
                    "description": "plan id as published by NewRelic"
                },
                "effectiveDate": {
                    "type": "string",
                    "format": "date-time",
                    "description": "date when plan was applied"
                }
            },
            "description": "Plan data of NewRelic Monitor resource"
        },
        "PlanDataResource": {
            "type": "object",
            "properties": {
                "properties": {
                    "$ref": "#/definitions/PlanDataProperties",
                    "description": "The resource-specific properties for this resource.",
                    "x-ms-client-flatten": true,
                    "x-ms-mutability": [
                        "read",
                        "create"
                    ]
                }
            },
            "description": "The details of a PlanData resource.",
            "allOf": [
                {
                    "$ref": "../../../../../common-types/resource-management/v3/types.json#/definitions/ProxyResource"
                }
            ]
        },
        "PlanDataListResponse": {
            "type": "object",
            "properties": {
                "value": {
                    "type": "array",
                    "items": {
                        "$ref": "#/definitions/PlanDataResource"
                    },
                    "x-cadl-name": "PlanDataResource[]",
                    "description": "The PlanDataResource items on this page"
                },
                "nextLink": {
                    "type": "string",
                    "format": "uri",
                    "description": "The link to the next page of items",
                    "x-cadl-name": "Rest.ResourceLocation"
                }
            },
            "description": "Response of get all plan data Operation.",
            "required": [
                "value"
            ]
        },
        "PlanDataProperties": {
            "type": "object",
            "properties": {
                "planData": {
                    "$ref": "#/definitions/PlanData",
                    "description": "Plan details"
                },
                "orgCreationSource": {
                    "$ref": "#/definitions/OrgCreationSource",
                    "description": "Source of org creation"
                },
                "accountCreationSource": {
                    "$ref": "#/definitions/AccountCreationSource",
                    "description": "Source of account creation"
                }
            },
            "description": "Plan details"
        },
        "UserEmailParameter": {
            "type": "object",
            "properties": {},
            "description": "User email specification."
        },
        "email": {
            "type": "string",
            "description": "Reusable representation of an email address",
            "pattern": "^[A-Za-z0-9._%+-]+@(?:[A-Za-z0-9-]+\\.)+[A-Za-z]{2,}$"
        }
    },
    "parameters": {
        "AccountIdParameter": {
            "name": "accountId",
            "in": "query",
            "required": false,
            "description": "Account Id.",
            "type": "string",
            "x-ms-parameter-location": "method"
        },
        "LocationParameter": {
            "name": "location",
            "in": "query",
            "required": true,
            "description": "Location for NewRelic.",
            "type": "string",
            "x-ms-parameter-location": "method"
        },
        "OrganizationIdParameter": {
            "name": "organizationId",
            "in": "query",
            "required": false,
            "description": "Organization Id.",
            "type": "string",
            "x-ms-parameter-location": "method"
        },
        "UserEmailParameter": {
            "name": "userEmail",
            "in": "query",
            "required": true,
            "description": "User Email.",
            "type": "string",
            "x-ms-parameter-location": "method"
        }
    }
}
```