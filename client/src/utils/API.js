// Add the following Express routes for your app:
// /api/books (get) - Should return all saved books as JSON.
// /api/books (post) - Will be used to save a new book to the database.
// /api/books/:id (delete) - Will be used to delete a book from the database by Mongo _id.
// * (get) - Will load your single HTML page in client/build/index.html. Make sure you have 
// this after all other routes are defined.

import axios from "axios";

export default {
    // Retrieves Google books
    googleBooks: function(query) {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
    },
    // Gets all books
    getBooks: function() {
        return axios.get("/api/books");
    },
    // Saves book to the DB
    saveBook: function(bookData) {
        return axios.post("/api/books", bookData);
    },
    // Gets book with the given ID
    getBook: function(id) {
        return axios.get("/api/books/" + id);
    },
    // Deletes book with the given ID
    deleteBook: function(id) {
        return axios.delete("/api/books/" + id);
    }
};