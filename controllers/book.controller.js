const Book = require("../models/Book.model");

const bookPost = async (req, res, next) => {
    try {

        const newBook = new Book({
            name : req.body.name,
            author: req.body.author,
            comment: req.body.comment,
            signature: req.body.signature,
        });
        const createdBook = await newBook.save();
        return res.status(200).json(createdBook);
    } catch (err) {
      
        console.log("book post error: ", err);
        return res.status(400).json("The body of the request is not valid");
    }
};

module.exports = {
    bookPost,
};