# Collaborative Whiteboard Application

A real-time collaborative whiteboard application built with the MERN stack (MongoDB, Express.js, React.js, Node.js) and Socket.IO for real-time drawing capabilities.

## Features

- 🔐 User Authentication (Register/Login)
- 🎨 Real-time collaborative drawing
- 👥 Share canvases with other users
- 💾 Save and load drawings
- 🔄 Real-time updates across all connected users
- 🎯 Multiple canvas support
- 🔒 Secure JWT-based authentication

## Tech Stack

### Backend
- Node.js & Express.js
- MongoDB with Mongoose
- Socket.IO for real-time communication
- JWT for authentication
- Bcrypt for password hashing

### Frontend
- React.js
- Socket.IO Client
- Canvas API for drawing
- JWT for secure authentication

## Prerequisites

- Node.js (v14 or higher)
- MongoDB Atlas account or local MongoDB installation
- npm or yarn package manager

## Environment Variables

### Backend (.env)
```
MONGODB_URI=your_mongodb_connection_string
PORT=3000
NODE_ENV=development
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRE=24h
FRONTEND_URL=http://localhost:3001
```

### Frontend (.env)
```
REACT_APP_API_URL=http://localhost:3000
REACT_APP_SOCKET_URL=http://localhost:3000
```

## Installation

1. Clone the repository
```bash
git clone <repository-url>
cd whiteboard-app
```

2. Install backend dependencies
```bash
cd backend
npm install
```

3. Install frontend dependencies
```bash
cd ../frontend
npm install
```

## Running the Application

1. Start the backend server
```bash
cd backend
npm run dev
```

2. Start the frontend development server
```bash
cd frontend
npm start
```

The application will be available at:
- Frontend: http://localhost:3001
- Backend: http://localhost:3000

## API Endpoints

### Authentication
- POST `/user/register` - Register a new user
- POST `/user/login` - Login user
- GET `/user/profile` - Get user profile (protected)

### Canvas
- GET `/canvas` - Get all canvases (protected)
- POST `/canvas` - Create new canvas (protected)
- GET `/canvas/:id` - Get canvas by ID (protected)
- PUT `/canvas/:id` - Update canvas (protected)
- PUT `/canvas/:id/share` - Share canvas with user (protected)
- DELETE `/canvas/:id` - Delete canvas (protected)

## Socket.IO Events

- `joinCanvas` - Join a canvas room
- `canvasUpdate` - Update canvas elements
- `canvasUpdated` - Receive canvas updates

## Security Features

- Password hashing with bcrypt
- JWT token authentication
- Protected API routes
- CORS configuration
- Environment variable protection

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.

## Support

For support, email [your-email] or open an issue in the repository. 