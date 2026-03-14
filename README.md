# Interactive Product Analytics Dashboard

## Overview
This project is a full-stack Product Analytics Dashboard that visualizes product feature usage and user interaction data.

The application allows product managers to analyze how users interact with dashboard features using interactive charts and filters.

A unique feature of this project is that the dashboard visualizes its own usage. Every interaction such as changing filters or clicking charts is tracked and stored as analytics data.

---

## Tech Stack

Frontend
- React
- Tailwind CSS
- Chart.js
- React Router

Backend
- Node.js
- Express.js
- PostgreSQL

Authentication
- JWT (JSON Web Tokens)

---

## Features

### Authentication
- User Registration
- User Login
- JWT based authentication
- Protected dashboard routes

### Dashboard Analytics
- Interactive analytics dashboard
- Bar chart showing feature usage
- Line chart showing time-based trends

### Filters
- Date range filter
- Age filter
- Gender filter

### Interaction Tracking
Every time a user interacts with the dashboard (changing filters or clicking charts), the interaction is recorded using the API endpoint:

POST /track

These interactions are stored in the database and visualized in the analytics charts.

### Users Page
Displays registered users with their age and gender information.

### Persistent Filters
Selected filters are stored in cookies so that the dashboard reloads with the same preferences after page refresh.

---

## Database Schema

### Users Table

Column | Type
------ | ------
id | Integer (Primary Key)
username | String
password | String (hashed)
age | Integer
gender | String

---

### Feature Clicks Table

Column | Type
------ | ------
id | Integer (Primary Key)
user_id | Foreign Key
feature_name | String
timestamp | DateTime

---

## API Endpoints

Authentication

POST /register  
POST /login  

Analytics

GET /analytics  
GET /trend/:feature  

Tracking

POST /track  

---

## Running the Project Locally

### Clone the Repository

git clone https://github.com/Alex5840/Analytics_Dashboard.git
cd product-analytics-dashboard  

---

### Backend Setup

cd backend  
npm install  

Create a .env file inside backend folder

DB_HOST=localhost  
DB_PORT=5432  
DB_USER=postgres  
DB_PASSWORD=yourpassword  
DB_NAME=analytics_dashboard  
JWT_SECRET=your_secret_key  

Start backend server

npm run dev  

---

### Frontend Setup

cd frontend  
npm install  
npm run dev  

Frontend will run at

http://localhost:5173

---

## Data Seeding

To populate the database with sample analytics data run:

npm run seed

The seed script will:

- Create sample users
- Insert 100 feature interaction records
- Generate timestamps across multiple days

This ensures the dashboard charts display meaningful data when opened.

---

## Project Architecture

The application follows a client-server architecture.

React Frontend  
↓  
Express Backend API  
↓  
PostgreSQL Database  

### Data Flow

1. User interacts with dashboard  
2. Interaction triggers /track API  
3. Event stored in PostgreSQL  
4. Analytics queries aggregate interaction data  
5. Charts display analytics insights  

---

## Handling 1 Million Events Per Minute

If the system needed to handle 1 million write events per minute, the backend architecture would be redesigned as follows:

Event Streaming  
Introduce a message queue such as Apache Kafka or RabbitMQ to handle high-throughput event ingestion.

Instead of writing events directly to the database, the application would push events into a queue.

Asynchronous Processing  
Worker services would process events in batches and write them efficiently to the database.

Distributed Analytics Databases  
Use analytics-focused databases optimized for event data such as:

- ClickHouse
- BigQuery
- Apache Druid

Caching Layer  
Use Redis to cache frequently requested analytics queries to reduce database load.

Horizontal Scaling  
Deploy multiple backend instances behind a load balancer to distribute incoming requests.

This architecture allows the system to process millions of analytics events efficiently while maintaining fast dashboard performance.

---

## Deployment

Backend Deployment Options

- Render
- Railway
- Heroku

Frontend Deployment Options

- Vercel
- Netlify

---

## Screenshots

Add screenshots of:

- Login Page
- Dashboard
- Analytics Charts

---

## Author

Alex