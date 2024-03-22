// controller.js

// Create operation
const createItem = (req, res) => {
    res.json({ message: "Endpoint create called" });
  };
  
  // Read operation
  const getAllItems = (req, res) => {
    res.json({ message: "Endpoint getAll called" });
  };
  
  // Read operation
  const getOneItem = (req, res) => {
    res.json({ message: `I am endpoint get /get/${req.params.id}` });
  };
  
  // Update operation
  const updateItem = (req, res) => {
    res.json({ message: `I am endpoint update /update/${req.params.id}` });
  };
  
  // Delete operation
  const deleteItem = (req, res) => {
    res.json({ message: `I am endpoint delete /delete/${req.params.id}` });
  };
  
  module.exports = {
    createItem,
    getOneItem,
    getAllItems,
    updateItem,
    deleteItem,
  };