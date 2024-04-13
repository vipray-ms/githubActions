# JSON API Spec

```json title="JSON API Spec"
{
    "endpoints": {
        "/users": {
            "description": "Endpoint to manage user data",
            "methods": [
                "GET",
                "POST",
                "PUT",
                "DELETE"
            ],
            "requestFormats": {
                "GET": {
                    "params": [
                        "id"
                    ],
                    "description": "Retrieve user data by ID"
                },
                "POST": {
                    "body": {
                        "name": "string",
                        "email": "string",
                        "password": "string"
                    },
                    "description": "Create a new user"
                },
                "PUT": {
                    "params": [
                        "id"
                    ],
                    "body": {
                        "name": "string",
                        "email": "string",
                        "password": "string"
                    },
                    "description": "Update an existing user"
                },
                "DELETE": {
                    "params": [
                        "id"
                    ],
                    "description": "Delete a user by ID"
                }
            },
            "responseFormats": {
                "GET": {
                    "200": {
                        "id": "string",
                        "name": "string",
                        "email": "string"
                    },
                    "404": {
                        "message": "string"
                    }
                },
                "POST": {
                    "201": {
                        "id": "string",
                        "message": "string"
                    },
                    "400": {
                        "message": "string"
                    }
                },
                "PUT": {
                    "200": {
                        "message": "string"
                    },
                    "404": {
                        "message": "string"
                    }
                },
                "DELETE": {
                    "200": {
                        "message": "string"
                    },
                    "404": {
                        "message": "string"
                    }
                }
            },
            "errorHandling": {
                "400": "Bad request - Missing or invalid parameters",
                "401": "Unauthorized - Authentication required",
                "404": "Not found - Resource not found",
                "500": "Internal server error - Something went wrong on our end"
            },
            "authentication": true,
            "authorization": true,
            "rateLimiting": {
                "limit": 100,
                "interval": "hour",
                "message": "Rate limit exceeded, please try again later"
            }
        }
    }
}
```