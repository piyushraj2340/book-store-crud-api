const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    author: {
        type: String,
        require: true
    },
    summary: {
        type: String,
        require: true
    },
    bookRating: {
        type: Number,
        default: 0
    }
});


const books = new mongoose.model('book', bookSchema);

module.exports = books;