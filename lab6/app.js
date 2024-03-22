const express = require("express");
const app = express();

const connectDB = require("./db");
const {
  getInventorys,
  addInventory,
  getInventory,
  updateInventory,
  deleteInventory,
  deleteAllInventorys,
} = require("./controller");

//Important: will be discussed next week
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
// GET all Inventorys
app.get("/inventorys", getInventorys);

// POST a new Inventory
app.post("/inventorys", addInventory);

// GET a single Inventory
app.get("/inventorys/:id", getInventory);

// Update Inventory using PUT
app.put("/inventorys/:id", updateInventory);

// DELETE a Inventory
app.delete("/inventorys/:id", deleteInventory);

// DELETE all Inventorys
app.delete("/inventorys", deleteAllInventorys);

const PORT = 1000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});