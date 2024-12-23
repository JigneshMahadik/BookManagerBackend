const bookModel = require("../Models/BookModel");


const addBooks = async(req,res)=>{
    console.log("Add Book API called");
    
    try {
        const { title, author } = req.body;
        const newBook = new bookModel({ title, author });
        await newBook.save();
        res.status(201).json(newBook);
    }
    catch (error) {
        console.error(error);
        res.status(400).json({ message: 'Error adding book' });
    }
}


const getBooks = async (req,res)=>{
    try {
        const books = await bookModel.find();
        res.json(books);
    } 
    catch (error) {
        res.status(500).json({ message: 'Error fetching books' });
    }
}



const bookController = {
    addBooks,
    getBooks
}

module.exports = bookController;
