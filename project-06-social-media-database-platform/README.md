# 🚀 Project 06 – Social Media Database Platform

Enterprise Social Media Database Platform built using MongoDB, Aggregation Pipelines, and NoSQL Relationship Design.

---

# Overview

This project demonstrates how social media platforms manage users, posts, comments, reactions, and followers.

The platform supports:

- User Profiles
- Social Posts
- Comments
- Likes & Reactions
- Followers Management
- Engagement Analytics
- Trending Content Analysis

---

# Business Scenario

Social media platforms require scalable databases to manage:

- Millions of Users
- Content Publishing
- User Interactions
- Followers Networks
- Trending Topics
- Engagement Metrics

MongoDB is ideal due to flexible document structures and horizontal scalability.

---

# Architecture

Users

↓

MongoDB Collections

├── Users

├── Posts

├── Comments

├── Reactions

└── Followers

↓

Aggregation Engine

↓

Analytics Reports

---

# Collections

## users

Stores user profile information.

## posts

Stores social media posts.

## comments

Stores comments on posts.

## reactions

Stores likes and reactions.

## followers

Stores follower relationships.

---

# Sample User Document

{
    "userId": 6001,
    "username": "ahmed_tech",
    "fullName": "Ahmed Ali",
    "country": "Saudi Arabia",
    "followers": 2500,
    "status": "Active"
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

- NoSQL Relationship Design
- Social Media Data Modeling
- MongoDB CRUD Operations
- Aggregation Pipelines
- Analytics Reporting
- Query Optimization
- Scalable Database Design

---

# Author

Alhanoof Alabdullah
