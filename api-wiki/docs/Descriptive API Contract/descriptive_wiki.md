# Descriptive API Spec

## API Contract Details:

The API contract is in JSON format and contains information about the NewRelic Observability API. It includes details about the API's title, version, host, security, paths, and definitions.

### Endpoints:

#### List all the existing accounts

```
GET /subscriptions/subscriptionId/providers/NewRelic.Observability/accounts
```

**Description**: This endpoint returns a list of all the existing accounts for the given user.

**Parameters**:

- `ApiVersionParameter` - The version of the API (query parameter, required)
- `SubscriptionIdParameter` - The subscription ID (query parameter, required)
- `UserEmailParameter` - The user email (query parameter, required)
- `LocationParameter` - The location for NewRelic (query parameter, required)

**Responses**:

- `200` - ARM operation completed successfully. Returns an object with a `value` property containing an array of `AccountResource` objects.
- `default` - An unexpected error response. Returns an object with an `error` property containing information about the error.

**Examples**:

- `Accounts_List_MaximumSet_Gen` - An example response for this endpoint with maximum set of values.
- `Accounts_List_MinimumSet_Gen` - An example response for this endpoint with minimum set of values.

#### List all the existing organizations

```
GET /subscriptions/subscriptionId/providers/NewRelic.Observability/organizations
```

**Description**: This endpoint returns a list of all the existing organizations for the given user.

**Parameters**:

- `ApiVersionParameter` - The version of the API (query parameter, required)
- `SubscriptionIdParameter` - The subscription ID (query parameter, required)
- `UserEmailParameter` - The user email (query parameter, required)
- `LocationParameter` - The location for NewRelic (query parameter, required)

**Responses**:

- `200` - ARM operation completed successfully. Returns an object with a `value` property containing an array of `OrganizationResource` objects.
- `default` - An unexpected error response. Returns an object with an `error` property containing information about the error.

**Examples**:

- `Organizations_List_MaximumSet_Gen` - An example response for this endpoint with maximum set of values.
- `Organizations_List_MinimumSet_Gen` - An example response for this endpoint with minimum set of values.

#### List plans data

```
GET /subscriptions/subscriptionId/providers/NewRelic.Observability/plans
```

**Description**: This endpoint returns a list of plan data.

**Parameters**:

- `ApiVersionParameter` - The version of the API (query parameter, required)
- `SubscriptionIdParameter` - The subscription ID (query parameter, required)
- `AccountIdParameter` - The account ID (query parameter, required)
- `OrganizationIdParameter` - The organization ID (query parameter, required)

**Responses**:

- `200` - ARM operation completed successfully. Returns an object with a `value` property containing an array of `PlanDataResource` objects.
- `default` - An unexpected error response. Returns an object with an `error` property containing information about the error.

**Examples**:

- `Plans_List_MaximumSet_Gen` - An example response for this endpoint with maximum set of values.
- `Plans_List_MinimumSet_Gen` - An example response for this endpoint with minimum set of values.

### Definitions:

#### AccountCreationSource

Source of Account creation.

- `LIFTR` - Account is created from LIFTR.
- `NEWRELIC` - Account is created from NEWRELIC.

#### AccountIdParameter

Account ID parameter.

#### AccountInfo

Account information for the NewRelic account.

- `accountId` - Account ID.
- `ingestionKey` - Ingestion key of the