const express = require("express");
const router = express.Router();

const bookController = require("../Controllers/books");

router.post("/books",bookController.addBooks);    //Adds book.

router.get("/books",bookController.getBooks);    //Fetched all books.

module.exports = router;
