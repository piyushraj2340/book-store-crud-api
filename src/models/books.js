const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    summary: {
        type: String,
        required: true,
    },
    bookRating: {
        type: Number,
        default: 0
    }
});


const books = new mongoose.model('book', bookSchema);

module.exports = books;