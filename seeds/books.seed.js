const mongoose = require("mongoose");
const { DB_URL, DB_CONFIG } = require("../db");

const Book = require("../models/Book.model");

const booksArray = [
    {
        name : "Adiós a todo eso",
        author: "Robert Graves",
        comment: "Autobiografía de un joven poeta en la Primera Guerra Mundial",
        signature: "" 
    },    
    {
        name : "El libro de los cinco anillos",
        author: "Miyamoto Musashi",
        comment: "La filosofía samurái que alimentó al zen",
        signature: "Adriano" 
    }, 
    {
        name : "California 83",
        author: "Pepe Colubi",
        comment: "Nada esencial, pero te partes la caja",
        signature: "Miguel" 
    }, 
    
];

const bookDocuments = booksArray.map((book) => new Book(book));
mongoose
    .connect(DB_URL, DB_CONFIG)
    .then(async () => {
        console.log("Executing seed Book");

        const allBooks = await Book.find();

        if (allBooks.length) {
            await Book.collection.drop();
            console.log("Book collection dropped");
        }
    })
    .catch((error) => {
        console.log("Error searching db: ", error);
    })
    .then(async () => {

        await Book.insertMany(bookDocuments);
        console.log("seed executed");
    })
    .catch((error) => {
        console.log("Error inserting books: ", error);
    })
    .finally(() => mongoose.disconnect());