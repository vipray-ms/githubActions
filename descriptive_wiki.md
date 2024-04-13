## API Contract Details:

The following is an API contract for managing user data. The API supports the HTTP methods GET, POST, PUT, and DELETE. It also includes request and response formats, error handling, authentication, authorization, and rate limiting.

### Endpoints:

#### /users

- Methods: GET, POST, PUT, DELETE
- Description: Endpoint to manage user data
- Parameters:
  - GET: id (optional) - Retrieve user data by ID
  - POST: body - Create a new user with properties name, email, and password
  - PUT: id (required), body - Update an existing user with properties name, email, and password
  - DELETE: id (required) - Delete a user by ID
- Responses:
  - GET:
    - 200: Returns user data with properties id, name, and email
    - 404: Returns an error message if the user is not found
  - POST:
    - 201: Returns a message confirming the user creation
    - 400: Returns an error message if the request body is missing or invalid
  - PUT:
    - 200: Returns a message confirming the user update
    - 404: Returns an error message if the user is not found
  - DELETE:
    - 200: Returns a message confirming the user deletion
    - 404: Returns an error message if the user is not found
- Error Handling:
  - 400: Bad request - Missing or invalid parameters
  - 401: Unauthorized - Authentication required
  - 404: Not found - Resource not found
  - 500: Internal server error - Something went wrong on our end
- Authentication: Yes
- Authorization: Yes
- Rate Limiting: Limit of 100 requests per hour. If the limit is exceeded, a message is returned asking the user to try again later.

### Definitions:

There are no definitions or data models used in this API contract.

## Descriptive Wiki:

### /users

#### GET

This endpoint retrieves user data by ID. If the ID is not provided, it returns all user data. The response format includes the user's ID, name, and email. If the user is not found, a 404 error message is returned.

Example Request:

```
GET /users?id=123
```

Example Response:

```
{
  "id": "123",
  "name": "John Doe",
  "email": "johndoe@example.com"
}
```

#### POST

This endpoint creates a new user with properties name, email, and password. If the request body is missing or invalid, a 400 error message is returned. If the user is successfully created, a 201 message is returned.

Example Request:

```
POST /users
{
  "name": "Jane Doe",
  "email": "janedoe@example.com",
  "password": "password123"
}
```

Example Response:

```
{
  "id": "456",
  "message": "User created successfully"
}
```

#### PUT

This endpoint updates an existing user with properties name, email, and password. The user is identified by its ID. If the ID is not provided, a 404 error message is returned. If the user is successfully updated, a 200 message is returned.

Example Request:

```
PUT /users?id=123
{
  "name": "Jane Doe",
  "email": "janedoe@example.com",
  "password": "newpassword123"
}
```

Example Response:

```
{
  "message": "User updated successfully"
}
```

#### DELETE

This endpoint deletes an existing user by ID. If the ID is not provided, a 404 error message is returned. If the user is successfully deleted, a 200 message is returned.

Example Request:

```
DELETE /users?id=