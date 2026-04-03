require("dotenv").config(); 

const express = require("express");
const connectDB = require("./config/db");

const app = express();
app.use(express.json());

connectDB();

app.get("/", (req, res) => {
  res.send("Welcome to Oladimeji Rebecca Library System API");
});

app.use("/authors", require("./routes/authorRoutes"));
app.use("/books", require("./routes/bookRoutes"));
app.use("/students", require("./routes/studentRoutes"));
app.use("/attendants", require("./routes/attendantRoutes"));

const PORT = process.env.PORT || 5050;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});