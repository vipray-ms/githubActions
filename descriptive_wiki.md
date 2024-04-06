## API Contract Details:

The following is a detailed description of the Sample API version 1.0. This API consists of a single endpoint `/users` that allows you to get a list of users and create a new user.

### Endpoints:

#### `/users`

This endpoint allows you to get a list of users and create a new user.

##### `GET`

This method allows you to get a list of users.

**Description:** Get a list of users.

**Responses:**

- `200` Success: Returns a list of users in JSON format.

##### `POST`

This method allows you to create a new user.

**Description:** Create a new user.

**Parameters:**

- `user` (type: object, in: body, schema: User) - The details of the user to be created.

**Responses:**

- `201` User created successfully.

### Definitions:

#### User

This is the data model for the user object.

**Properties:**

- `id` (type: integer) - The unique identifier for the user.
- `name` (type: string) - The name of the user.
- `email` (type: string, format: email) - The email address of the user.

## Descriptive Wiki:

The Sample API allows you to get a list of users and create a new user. To get a list of users, make a `GET` request to `/users`. The response will be a list of user objects in JSON format. To create a new user, make a `POST` request to `/users` with the details of the user in the request body.

The `POST` request requires a `user` object in the request body. The `user` object must contain the following properties:

- `name` - The name of the user.
- `email` - The email address of the user.

The `id` property is not required and will be generated automatically by the API.

Example usage:

**Get a list of users**

Request:

```
GET /users
```

Response:

```
HTTP/1.1 200 OK
Content-Type: application/json

[
  {
    "id": 1,
    "name": "John Doe",
    "email": "john.doe@example.com"
  },
  {
    "id": 2,
    "name": "Jane Doe",
    "email": "jane.doe@example.com"
  }
]
```

**Create a new user**

Request:

```
POST /users
Content-Type: application/json

{
  "name": "Bob Smith",
  "email": "bob.smith@example.com"
}
```

Response:

```
HTTP/1.1 201 Created
```