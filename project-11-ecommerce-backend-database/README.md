# 🚀 Project 11 – E-Commerce Backend Database

Enterprise E-Commerce Backend Database built using MongoDB, Aggregation Pipelines, and NoSQL Data Modeling.

---

# Overview

This project demonstrates how e-commerce platforms manage customers, products, orders, shopping carts, and payments.

The platform supports:

- Customer Management
- Product Catalog
- Shopping Cart
- Order Processing
- Payment Tracking
- Product Reviews
- Recommendation Analytics

---

# Business Scenario

Online stores require scalable databases to manage:

- Customers
- Products
- Orders
- Shopping Carts
- Payments
- Product Ratings
- Recommendations

MongoDB enables flexible and scalable e-commerce architectures.

---

# Architecture

Customers

↓

MongoDB Collections

├── Customers

├── Products

├── Shopping Cart

├── Orders

├── Payments

└── Reviews

↓

Analytics Engine

↓

Business Reports

---

# Collections

## customers

Stores customer profiles.

## products

Stores product catalog information.

## shopping_cart

Stores shopping cart items.

## orders

Stores customer orders.

## payments

Stores payment transactions.

## reviews

Stores product ratings and reviews.

---

# Sample Order Document

{
    "orderId": "ORD-10001",
    "customerId": 1001,
    "orderDate": ISODate(),
    "totalAmount": 5600,
    "status": "Completed"
}

---

# Technologies Used

- MongoDB
- Mongo Shell
- MongoDB Compass
- Docker
- JavaScript
- Aggregation Framework

---

# Skills Demonstrated

- E-Commerce Data Modeling
- MongoDB CRUD Operations
- Aggregation Pipelines
- Recommendation Analytics
- Order Processing Design
- Query Optimization
- Enterprise E-Commerce Architecture

---

# Author

Alhanoof Alabdullah
