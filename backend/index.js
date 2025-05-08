const express = require("express");
const app = express();
const userRoutes = require("./routes/userRoutes");
const cors = require("cors");
const connectDB = require("./db");
const canvasRoutes = require("./routes/canvasRoutes");
const { createServer } = require("http");
const { Server } = require("socket.io");
require('dotenv').config();

connectDB();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/users", userRoutes);
app.use("/canvas", canvasRoutes);

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: process.env.NODE_ENV === 'production' 
      ? process.env.FRONTEND_URL 
      : "http://localhost:3001",
    methods: ["GET", "POST"]
  }
});

// Socket.IO connection handling
io.on("connection", (socket) => {
  // Only log in development
  if (process.env.NODE_ENV !== 'production') {
    console.log("A user connected:", socket.id);
  }

  // Join a canvas room
  socket.on("joinCanvas", (canvasId) => {
    socket.join(canvasId);
    if (process.env.NODE_ENV !== 'production') {
      console.log(`User ${socket.id} joined canvas room: ${canvasId}`);
    }
  });

  // Handle canvas updates
  socket.on("canvasUpdate", (data) => {
    const { canvasId, elements } = data;
    // Broadcast the update to all clients in the same canvas room
    socket.to(canvasId).emit("canvasUpdated", elements);
  });

  // Handle disconnection
  socket.on("disconnect", () => {
    if (process.env.NODE_ENV !== 'production') {
      console.log("User disconnected:", socket.id);
    }
  });
});

httpServer.listen(3000, () => {
  console.log("Server is running on port 3000");
});


