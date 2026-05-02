Overview

This project is a backend service for managing and delivering campus notifications efficiently. It supports fetching notifications with priority-based sorting and integrates a logging middleware for monitoring API activity.

Features
Fetch notifications via REST API
Pagination support
Priority-based sorting (higher priority first)
Logging middleware integrated across all routes
Scalable design considerations included
Tech Stack
Node.js
Express.js
JavaScript (ES6)
Axios (for logging API calls)
Project Structure

AP23110010121/
├── logging_middleware/
│ └── logger.js
├── notification_app_be/
│ ├── server.js
│ ├── routes/
│ ├── package.json
│ └── node_modules/
├── vehicle_maintenance_scheduler/
│ └── README.md
├── notification_system_design.md
├── .gitignore

Installation & Setup
Clone the repository
git clone <your-repo-link>
cd AP23110010121
Install dependencies
cd notification_app_be
npm install
Run the server
node server.js
API Endpoint

GET /notifications

Fetch notifications with optional pagination.

Example:
http://localhost:3000/notifications

Response:
{
"notifications": [
{
"id": "2",
"message": "Exam Tomorrow",
"priority": 10
},
{
"id": "1",
"message": "Microsoft Hiring",
"priority": 8
}
]
}

Logging Middleware

Logging is implemented in logging_middleware/logger.js and integrated across all routes.
Logs include request details, route accessed, and execution status.

Note: External logging API may timeout due to network/server limitations.
Fallback console logging ensures logging functionality is maintained.

Design Considerations

Detailed system design is included in notification_system_design.md

Covers:

API Design
Database Selection
Scalability
Performance Optimization
Async Processing
Priority Handling
Vehicle Maintenance Scheduler

Basic structure included.
Approach: Greedy / Knapsack-based optimization for task scheduling.

Status

Fully functional backend
Logging middleware integrated
Ready for submission

Author

Roll Number: AP23110010121
GitHub: jyothikagunta
