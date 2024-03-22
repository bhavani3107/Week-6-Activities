const express = require("express");
const app = express();

const connectDB = require("./db");
const {
  getBooks,
  addBook,
  deleteAllBooks,
} = require("./controller");

app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.get("/books", getBooks);
app.post("/books", addBook);
app.delete("/books", deleteAllBooks);

const PORT = 5000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});