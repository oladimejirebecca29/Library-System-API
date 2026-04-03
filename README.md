Library System API
A RESTful API for managing a school library system built with Node.js, Express.js, and MongoDB.

Features
CRUD operations for Authors, Books, Students, and Attendants
Book borrowing and returning system
Pagination and search for books
MongoDB relationships using references
Overdue book detection
Validation middleware

Tech Stack
Node.js
Express.js
MongoDB
Mongoose

Setup
1. Clone repository
git clone https://github.com/oladimejirebecca29/Library-System-API.git
cd Library-System-API
2. Install dependencies
npm install
3. Environment variables
Create a .env file:
PORT=5050
MONGO_URI=your_mongodb_connection_string
4. Run server
npm run dev
Server runs on:
http://localhost:5050

Main Endpoints
Authors
POST /authors
GET /authors
GET /authors/:id
PUT /authors/:id
DELETE /authors/:id
Books
POST /books
GET /books
GET /books/:id
PUT /books/:id
DELETE /books/:id
Borrow / Return
POST /books/:id/borrow
POST /books/:id/return

Search & Pagination
GET /books?page=1&limit=10&search=title
Author

Oladimeji Rebecca
https://github.com/oladimejirebecca29

Repository
https://github.com/oladimejirebecca29/Library-System-API.git
