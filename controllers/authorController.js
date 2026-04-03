const Author = require("../models/Author");

exports.createAuthor = async (req, res) => {
  try {
    const author = await Author.create(req.body);
    res.status(201).json(author);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAuthors = async (req, res) => {
  const authors = await Author.find();
  res.json(authors);
};

exports.getAuthor = async (req, res) => {
  const author = await Author.findById(req.params.id);
  if (!author) return res.status(404).json({ msg: "Not found" });
  res.json(author);
};

exports.updateAuthor = async (req, res) => {
  const author = await Author.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(author);
};

exports.deleteAuthor = async (req, res) => {
  await Author.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};