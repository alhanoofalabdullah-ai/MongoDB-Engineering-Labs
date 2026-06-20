# 🚀 Project 03 – Inventory Tracking System

Enterprise Inventory Tracking System built using MongoDB, NoSQL data modeling, indexing, and aggregation pipelines.

---

# Overview

This project demonstrates how organizations track inventory across warehouses using MongoDB.

The system supports:

- Inventory Tracking
- Warehouse Management
- Stock Movement History
- Low Stock Monitoring
- Reorder Level Reporting
- Inventory Analytics

---

# Business Scenario

Organizations need accurate inventory visibility across multiple warehouse locations.

This system helps track:

- Product Stock
- Warehouse Locations
- Stock In / Stock Out
- Reorder Levels
- Inventory Availability
- Stock Movement History

---

# Architecture

Inventory Data

↓

MongoDB Collections

├── Inventory

├── Warehouses

└── Stock Movements

↓

Aggregation Reports

↓

Operations Insights

---

# Collections

## inventory

Stores product stock levels and reorder information.

## warehouses

Stores warehouse details and locations.

## stock_movements

Stores stock movement history.

---

# Sample Inventory Document

```json
{
  "productId": 3001,
  "productName": "Laptop Pro 15",
  "warehouseId": "WH-RUH-01",
  "quantity": 45,
  "reorderLevel": 10,
  "status": "Available"
}
```

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

- NoSQL Inventory Modeling
- MongoDB CRUD Operations
- Indexing
- Query Optimization
- Aggregation Pipelines
- Warehouse Reporting
- Enterprise Inventory Design

---

# Author

Alhanoof Alabdullah
