# HTTP Error Codes

## 1xx: Informational
**100 Continue**: Request received, client should continue.
**101 Switching Protocols**: Server is switching protocols.

## 2xx: Success
**200 OK**: Request was successful.
**201 Created**: Resource created successfully.
**204 No Content**: Request successful, but no content to return.

## 3xx: Redirection
**301 Moved Permanently**: Resource has moved permanently.
**302 Found**: Resource temporarily moved.

## 4xx: Client Errors
**400 Bad Request**: Server couldn't understand the request due to    invalid syntax.
**401 Unauthorized**: Authentication required.
**403 Forbidden**: Client doesn’t have permission.
**404 Not Found**: Requested resource could not be found.
**409 Conflict**: Request conflicts with current state of server.
**422 Unprocessable Entity**: Semantic errors in request data.

## 5xx: Server Errors
**500 Internal Server Error**: Generic server error.
**502 Bad Gateway**: Invalid response from upstream server.
**503 Service Unavailable**: Server is temporarily unavailable.
**504 Gateway Timeout**: Timeout from upstream server.

