
# MongoDB Indexes Notes

## What is an Index?

An index is like a shortcut or a table of contents for a book.  
It helps MongoDB find data faster without checking every record one by one.

## Why Do We Use Indexes?

- To make searching faster.
- To make sorting faster.
- To make big databases work better.

## Things to Know About Indexes

- Indexes take extra space on the disk.
- When you add or change data, indexes need to update too, so it can slow down writing a bit.
- Use indexes carefully to keep a good balance between fast searching and fast writing.

## Types of Indexes

1. **Single Field Index**  
   Index on one field only, like `customerName`.

2. **Compound Index**  
   Index on two or more fields, like `status` and `orderDate`.

3. **Multiple Index**   
Automatically created when indexing fields that contain arrays.   
example - db.collection.createIndex({ items: 1 })  //items:{product, name, id}

4. **Text Index**  
   Special index to search words inside text fields.

## How to Work with Indexes

- **See all indexes on your collection:**  
 db.orders.getIndexes();

- **Create an index on one field**  
db.orders.createIndex({ customerName: 1 })

- **Create index on multiple field**  
 db.orders.createIndex({ status: 1, orderDate: -1 })   // -1 means desc order

 - **Create a text index for searching words**  
 db.create.createIndex({productName : {text}})




 # Some key points

- Indexes make searches and sorting much faster.

- Compound indexes help when filtering on multiple fields.

- Text indexes let us find words inside text easily.

- Removing unused indexes helps write data faster and saves space.

- Always test query speed before and after adding indexes. 