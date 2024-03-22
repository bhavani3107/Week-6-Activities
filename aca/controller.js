const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    address: { type: String },
  });

  const Contact  = mongoose.model("Contact", contactSchema);

// Get all Contacts
const getContacts = async (req, res) => {
  const Contacts = await Contact.find({});
  res.status(200).json(Contacts);
};

//Add contact
const addContacts = async (req, res) => {
  const { firstName, lastName, email, phone, address } = req.body;
  const newContact = new Contact({ firstName, lastName, email, phone, address });
  await newContact.save();
  res.status(201).json(newContact);
};

// Delete all Books
const deleteAllContacts = async (req, res) => {
  const result = await Contact.deleteMany({}); 
  res
    .status(200)
    .json({ message: `Deleted ${result.deletedCount} contacts successfully` });
};

// Delete Book by ID
const deleteContact = async (req, res) => {
  const { id } = req.params;

  const contact = await Contact.findByIdAndDelete(id);
  if (!contact) {
    return res.status(404).json({ message: "Contact not found" });
  }
  res.status(200).json({ message: "Contact deleted successfully" });
};

module.exports = { getContacts, addContacts, deleteAllContacts, deleteContact };