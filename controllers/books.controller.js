const Book = require("../models/Book.model");


const booksGet = async (req, res) => {

	try {
		const books = await Book.find().sort({createdAt: -1});
		return res.status(200).json(books);

	} catch (err) {
		return res.status(400).json(err);
	}
};

module.exports = {
    booksGet,
};