# 🚀 Project 15 – Enterprise Data Warehouse Platform

Enterprise Data Warehouse Platform built using MongoDB, ETL Processing, Business Intelligence, and Enterprise Analytics Architecture.

---

# Overview

This project demonstrates how organizations centralize enterprise data for reporting and analytics.

The platform supports:

- Enterprise Data Warehouse
- ETL Processing
- Historical Data Storage
- KPI Analytics
- Executive Dashboards
- Business Intelligence
- Performance Reporting

---

# Business Scenario

Large organizations collect data from multiple systems:

- ERP Systems
- CRM Platforms
- Financial Applications
- HR Systems
- Operational Databases

The Data Warehouse consolidates data into a single source of truth for analytics and decision-making.

---

# Architecture

Source Systems

├── ERP

├── CRM

├── HR

└── Finance

↓

ETL Layer

├── Extract

├── Transform

└── Load

↓

MongoDB Data Warehouse

├── Fact Tables

├── Dimension Tables

└── Historical Data

↓

Analytics Engine

↓

Executive Dashboards

---

# Features

## Data Warehouse

- Centralized Data Storage
- Historical Data Retention
- Data Consolidation
- Enterprise Reporting

---

## ETL Processing

- Data Extraction
- Data Transformation
- Data Loading
- ETL Monitoring

---

## KPI Analytics

- Revenue KPIs
- Operational KPIs
- Performance Metrics
- Trend Analysis

---

## Business Intelligence

- Executive Reporting
- Analytics Dashboards
- Data Visualization
- Decision Support

---

# Collections

## fact_sales

Stores transactional sales facts.

## dim_customers

Stores customer dimensions.

## dim_products

Stores product dimensions.

## dim_regions

Stores regional dimensions.

## dim_time

Stores calendar dimensions.

## etl_logs

Stores ETL execution history.

---

# Sample Fact Record

{
  "saleId": "SALE-10001",
  "customerId": 1001,
  "productId": 2001,
  "regionId": 1,
  "dateId": 20260101,
  "revenue": 5200,
  "quantity": 2
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

- Data Warehouse Design
- ETL Development
- Star Schema Modeling
- Business Intelligence
- KPI Analytics
- Historical Data Management
- Executive Reporting
- Enterprise Analytics Architecture

---

# Future Enhancements

- Power BI Integration
- Microsoft Fabric Integration
- Azure Data Factory
- Real-Time ETL
- Data Lake Integration
- Predictive Analytics

---

# Author

Alhanoof Alabdullah
