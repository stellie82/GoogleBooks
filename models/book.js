// At a minimum, books should have each of the following fields:
// title - Title of the book from the Google Books API
// authors - The books's author(s) as returned from the Google Books API
// description - The book's description as returned from the Google Books API
// image - The Book's thumbnail image as returned from the Google Books API
// link - The Book's information link as returned from the Google Books API
// Creating documents in your books collection similar to the following:

// Required modules and files
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    authors: [
        {
            type: String, required: true
        }
    ],
    description: String,
    image: String,
    link: String,
    date: {
        type: Date,
        default: Date.now
    }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;