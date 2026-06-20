# 🚀 Project 07 – Real-Time Chat Database

Enterprise Real-Time Chat Database built using MongoDB, NoSQL Relationship Design, and Aggregation Pipelines.

---

# Overview

This project demonstrates how messaging applications manage real-time communication using MongoDB.

The platform supports:

- Direct Messaging
- Group Chats
- Chat Rooms
- User Sessions
- Read Receipts
- Message Analytics
- User Activity Monitoring

---

# Business Scenario

Modern messaging platforms require scalable databases capable of handling:

- Millions of Messages
- Active Users
- Chat Rooms
- Group Conversations
- Real-Time Communication
- User Presence Tracking

MongoDB provides flexible document structures and scalability for messaging systems.

---

# Architecture

Users

↓

MongoDB Collections

├── Users

├── Chat Rooms

├── Messages

├── User Sessions

└── Read Receipts

↓

Analytics Engine

↓

Operational Reports

---

# Collections

## users

Stores user profiles.

## chat_rooms

Stores chat room information.

## messages

Stores direct and group messages.

## user_sessions

Stores online sessions.

## read_receipts

Stores message read confirmations.

---

# Sample Message Document

{
    "messageId": 9001,
    "chatRoomId": 10001,
    "senderId": 7001,
    "messageText": "Hello Team",
    "messageType": "TEXT",
    "sentDate": ISODate()
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

- Real-Time Messaging Design
- NoSQL Relationship Modeling
- MongoDB CRUD Operations
- Aggregation Pipelines
- User Activity Analytics
- Query Optimization
- Enterprise Chat Architecture

---

# Author

Alhanoof Alabdullah
