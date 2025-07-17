# Middleware in Express.js

---

## What is Middleware?

Middleware functions are functions that have access to the **request object** (`req`), the **response object** (`res`), and the **next middleware function** in the application’s request-response cycle. Middleware functions can:

- Execute any code.
- Make changes to the request and response objects.
- End the request-response cycle.
- Call the next middleware function in the stack.

Middleware is essentially a chain of functions executed sequentially when a request hits your Express server.

---

## Why Use Middleware?

Middleware is a fundamental building block in Express apps because it allows you to:

- **Modularize your code** by separating concerns like authentication, logging, error handling.
- **Pre-process requests** before they reach your route handlers.
- **Post-process responses** before sending them to clients.
- **Handle errors** in a centralized way.
- **Integrate third-party libraries** (body-parser, CORS, compression).

---

## How Middleware Works

When a request arrives, Express executes middleware functions in the order they are registered. Each middleware can:

- Do some work.
- Call `next()` to pass control to the next middleware.
- Or send a response and end the cycle.

If `next()` is not called and no response is sent, the request will hang and eventually time out.

---
