# MongoDB Aggregation Notes

## What is Aggregation?

Aggregation means putting data together to get answers. It helps us count, add, find average, or group data.

This document contains simple observations about key MongoDB aggregation operators used to process and analyze data.

## Aggregation Operators

### $match

- Filters documents to include only those that meet specified conditions.
- Example: Find only orders with status "Delivered".

### $group

- Groups documents by a field and performs calculations like sum, count, or average.
- Example: Calculate total sales for each customer.

### $sort

- Orders documents by a specified field, ascending or descending.
- Example: Sort orders by date from newest to oldest.

### $project

- Selects which fields to include or exclude in the result.
- Example: Show only product names and prices from orders.

### $unwind

- Deconstructs an array field from documents into separate documents for each element.
- Example: Turn an array of items in an order into individual item records.

### $sum

- Calculates the sum of numeric values.
- Example: Add up total sales amount.

### $avg

- Calculates the average of numeric values.
- Example: Find the average order value per customer.

### $limit

- Limits the number of documents in the output.
- Example: Show only top 3 customers by spending.

## General Observations

- Aggregation pipelines run multiple stages one after another.
- Each stage modifies or filters data for the next stage.
- Combining these operators helps answer complex questions from data.
- Understanding these operators is key to writing efficient queries.
