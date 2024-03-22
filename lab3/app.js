const express = require("express");
const app = express();
const port = 3001;

// Import controllers
const {
  createItem,
  getOneItem,
  getAllItems,
  updateItem,
  deleteItem,
} = require("./controller3");

// Routes
app.post("/create", createItem);
app.get("/get", getAllItems);
app.get("/get/:id", getOneItem);
app.put("/update/:id", updateItem);
app.delete("/delete/:id", deleteItem);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});