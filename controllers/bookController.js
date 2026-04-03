const Book = require("../models/Book");

// CREATE
exports.createBook = async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.status(201).json(book);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// GET ALL (pagination + search)
exports.getBooks = async (req, res) => {
  try {
    const { page = 1, limit = 10, search } = req.query;

    let query = {};
    if (search) {
      query.title = { $regex: search, $options: "i" };
    }

    const books = await Book.find(query)
      .populate("authors")
      .skip((page - 1) * limit)
      .limit(Number(limit));

    res.json(books);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET ONE
exports.getBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id)
      .populate("authors")
      .populate("borrowedBy")
      .populate("issuedBy");

    if (!book) return res.status(404).json({ msg: "Not found" });

    res.json(book);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE
exports.updateBook = async (req, res) => {
  const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(book);
};

// DELETE
exports.deleteBook = async (req, res) => {
  await Book.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};

// BORROW
exports.borrowBook = async (req, res) => {
  try {
    const { studentId, attendantId, returnDate } = req.body;

    const book = await Book.findById(req.params.id);

    if (!book) return res.status(404).json({ msg: "Book not found" });

    if (book.status === "OUT") {
      return res.status(400).json({ msg: "Book already borrowed" });
    }

    book.status = "OUT";
    book.borrowedBy = studentId;
    book.issuedBy = attendantId;
    book.returnDate = returnDate;

    await book.save();

    res.json(book);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// RETURN
exports.returnBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);

    if (!book) return res.status(404).json({ msg: "Book not found" });

    if (book.status === "IN") {
      return res.status(400).json({ msg: "Book already returned" });
    }

    book.status = "IN";
    book.borrowedBy = null;
    book.issuedBy = null;
    book.returnDate = null;

    await book.save();

    res.json(book);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};