# Descriptive API Spec

## API Contract Details:

The API contract defines the endpoints and data models for the NewRelic.Observability API. It is versioned as 2022-07-01-preview and hosted on management.azure.com. The API supports HTTPS protocol and JSON format for both input and output.

### Endpoints:

#### GET /subscriptions/{subscriptionId}/providers/NewRelic.Observability/accounts

List all the existing accounts

##### Parameters
- subscriptionId (required): The ID of the subscription to operate on.
- ApiVersionParameter: The version of the API to use.
- UserEmailParameter (required): The email address of the user.
- LocationParameter (required): The location for NewRelic.

##### Responses
- 200: ARM operation completed successfully.
- default: An unexpected error response.

##### Examples
- Accounts_List_MaximumSet_Gen.json
- Accounts_List_MinimumSet_Gen.json

#### GET /subscriptions/{subscriptionId}/providers/NewRelic.Observability/organizations

List all the existing organizations

##### Parameters
- subscriptionId (required): The ID of the subscription to operate on.
- ApiVersionParameter: The version of the API to use.
- UserEmailParameter (required): The email address of the user.
- LocationParameter (required): The location for NewRelic.

##### Responses
- 200: ARM operation completed successfully.
- default: An unexpected error response.

##### Examples
- Organizations_List_MaximumSet_Gen.json
- Organizations_List_MinimumSet_Gen.json

#### GET /subscriptions/{subscriptionId}/providers/NewRelic.Observability/plans

List plans data

##### Parameters
- subscriptionId (required): The ID of the subscription to operate on.
- ApiVersionParameter: The version of the API to use.
- AccountIdParameter (required): The ID of the account.
- OrganizationIdParameter (required): The ID of the organization.

##### Responses
- 200: ARM operation completed successfully.
- default: An unexpected error response.

##### Examples
- Plans_List_MaximumSet_Gen.json
- Plans_List_MinimumSet_Gen.json

### Definitions:

#### AccountCreationSource
- type: string
- description: Source of Account creation
- enum: LIFTR, NEWRELIC

#### AccountIdParameter
- type: object
- properties: {}
- description: Account Id parameter

#### AccountInfo
- type: object
- properties:
  - accountId: string
  - ingestionKey: SecureString
  - region: string
- description: Account Info of the NewRelic account

#### AccountProperties
- type: object
- properties:
  - organizationId: string
  - accountId: string
  - accountName: string
  - region: string
- description: List of all the New relic accounts for the given user

#### AccountsListResponse
- type: object
- properties:
  - value: array
    - items: AccountResource
  - nextLink: string
- description: Response of get all accounts Operation.

#### AccountResource
- type: object
- properties:
  - properties: AccountProperties
- description: The details of a account resource.

#### BillingCycle
- type: string
- description: Different usage type like YEARLY/MONTHLY
- enum: YEARLY, MONTHLY, WEEKLY

#### BillingSource
- type: string
- description: Billing source
- enum: AZURE, NEWRELIC

#### NewRelicAccountProperties
- type: object
- properties:
  - userId: string
  - accountInfo: AccountInfo
  - organizationInfo: OrganizationInfo
  - singleSignOnProperties: NewRelicSingleSignOnProperties
- description: Properties of the NewRelic account

#### NewRelicMonitorResource
- type: object
- properties:
  - properties: MonitorProperties
