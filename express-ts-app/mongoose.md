# Introduction to MongoDB

MongoDB is a popular open-source, NoSQL database designed for high performance, high availability, and easy scalability. It stores data in a flexible, JSON-like format called BSON (Binary JSON), making it well-suited for modern applications with evolving data structures.

## Core Features

- **Document-Oriented:** Stores data in documents (key-value pairs).
- **Schema-less:** Flexible schema design.
- **High Performance:** Optimized for read/write throughput.
- **Scalability:** Built-in horizontal scaling via sharding.
- **Indexing:** Supports indexing on any field.

---

## What is ORM/ODM?

### ORM (Object-Relational Mapping)

- A programming technique used in traditional Relational Databases (SQL) like MySQL or PostgreSQL.
- It maps objects in code to relational tables in a database.
- Example tools: Sequelize (Node.js), Hibernate (Java), Django ORM (Python)

### ODM (Object Document Mapping)

- A similar concept for NoSQL databases like MongoDB.
- It maps objects in code to MongoDB documents.
- Example tools: Mongoose (Node.js), Morphia (Java)

---

## What is Mongoose?

Mongoose is a powerful ODM (Object Document Mapper) for Node.js that simplifies interactions with MongoDB by providing:

- Schema-based data modeling
- Validation, casting, and middleware
- Query building and population

### Key Features of Mongoose

1. **Built-in Validation**  
   Required fields, default values, enum, min/max, regex, etc.

2. **Middleware (Hooks)**  
   Pre/post operations like save, remove, validate, etc.

3. **Population**  
   Auto-resolves references between documents (like JOIN).

---

## RDBMS vs NoSQL (MongoDB)

| Feature           | RDBMS (e.g., MySQL)               | NoSQL (e.g., MongoDB)                     |
|-------------------|----------------------------------|------------------------------------------|
| Data Model        | Table - Row - Column             | JSON-like Documents (BSON)                |
| Schema            | Fixed schema                    | Dynamic / Flexible Schema                  |
| Scalability       | Vertical (Scale-Up)              | Horizontal (Scale-Out via Sharding)       |
| Relationships     | Strong ACID Transactions & JOINs| Weak JOIN support, Embedded documents     |
| Query Language    | SQL (Structured Query Language) | MongoDB Query Language (MQL)               |
| Use Cases         | Banking, ERP, Traditional Apps  | Real-time analytics, Social apps           |
| Speed             | Fast for structured data        | Fast for large, unstructured data          |
