const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  bio: String
}, { timestamps: { createdAt: true, updatedAt: false } });

module.exports = mongoose.model("Author", authorSchema);