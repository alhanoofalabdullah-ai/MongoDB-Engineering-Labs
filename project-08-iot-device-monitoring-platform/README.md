# 🚀 Project 08 – IoT Device Monitoring Platform

Enterprise IoT Device Monitoring Platform built using MongoDB, Time-Series Collections, and Aggregation Pipelines.

---

# Overview

This project demonstrates how organizations monitor IoT devices and sensor data using MongoDB.

The platform supports:

- Device Registration
- Sensor Monitoring
- Real-Time Telemetry
- Device Health Monitoring
- Alert Management
- Uptime Tracking
- Analytics Reporting

---

# Business Scenario

Organizations deploy thousands of connected devices that generate continuous sensor data.

The system helps monitor:

- Device Status
- Temperature Sensors
- Humidity Sensors
- Power Consumption
- Connectivity Health
- Operational Alerts

MongoDB provides scalable storage for time-series IoT workloads.

---

# Architecture

IoT Devices

↓

MongoDB Collections

├── Devices

├── Sensors

├── Telemetry

├── Alerts

└── Device Health

↓

Aggregation Analytics

↓

Operations Dashboard

---

# Collections

## devices

Stores IoT device information.

## sensors

Stores sensor metadata.

## telemetry

Stores time-series sensor readings.

## alerts

Stores generated alerts.

## device_health

Stores device health indicators.

---

# Sample Telemetry Document

{
    "telemetryId": 10001,
    "deviceId": "DEV-001",
    "sensorType": "Temperature",
    "value": 28.5,
    "unit": "Celsius",
    "timestamp": ISODate()
}

---

# Technologies Used

- MongoDB
- Mongo Shell
- MongoDB Compass
- Docker
- JavaScript
- Aggregation Framework
- Time-Series Collections

---

# Skills Demonstrated

- IoT Data Modeling
- Time-Series Databases
- MongoDB CRUD Operations
- Aggregation Pipelines
- Device Monitoring
- Alert Analytics
- Enterprise IoT Architecture

---

# Author

Alhanoof Alabdullah
