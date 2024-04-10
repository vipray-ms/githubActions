## API Contract Details:

The following document describes the Sample API version 1.0.

### Endpoints:

#### GET /users

Get a list of users.

##### Responses

| Code | Description | Body |
| --- | --- | --- |
| 200 | Success | `application/json`, `User[]` |

#### POST /users

Create a new user.

##### Parameters

| Name | In | Type | Schema |
| --- | --- | --- | --- |
| user | Body | Object | `User` |

##### Responses

| Code | Description |
| --- | --- |
| 201 | User created successfully |

### Definitions:

#### User

| Property | Type | Description |
| --- | --- | --- |
| id | Integer | The user's ID |
| name | String | The user's name |
| email | String | The user's email address |
| phoneNumber | String | The user's phone number |

## Descriptive Wiki:

### GET /users

This endpoint returns a list of users in JSON format. To use this endpoint, simply send a GET request to the `/users` path. The response will contain an array of user objects, where each object represents a single user. 

#### Example

```
GET /users HTTP/1.1
Host: example.com
```

```
HTTP/1.1 200 OK
Content-Type: application/json

[
    {
        "id": 1,
        "name": "John Doe",
        "email": "johndoe@example.com",
        "phoneNumber": "123-456-7890"
    },
    {
        "id": 2,
        "name": "Jane Doe",
        "email": "janedoe@example.com",
        "phoneNumber": "555-555-5555"
    }
]
```

### POST /users

This endpoint creates a new user. To use this endpoint, send a POST request to the `/users` path, with a request body containing a JSON object that represents the user to be created.

#### Parameters

The `user` parameter is required and should contain a JSON object with the following properties:

| Property | Type | Description |
| --- | --- | --- |
| name | String | The user's name |
| email | String | The user's email address |
| phoneNumber | String | The user's phone number |

#### Example

```
POST /users HTTP/1.1
Host: example.com
Content-Type: application/json

{
    "name": "John Doe",
    "email": "johndoe@example.com",
    "phoneNumber": "123-456-7890"
}
```

```
HTTP/1.1 201 Created
```