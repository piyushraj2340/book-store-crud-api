const express = require('express');
const router = express.Router();

const booksModel = require('../models/books');

router.route('/books').post(async (req, res) => {
    try {
        const { title, author, summary, bookRating } = req.body;

        const newBook = new booksModel({ title, author, summary, bookRating });
        const result = await newBook.save();

        if (result) {
            const info = {
                status: true,
                message: "New book added to book store",
                result
            }
            res.status(201).send(info);
        } else {
            const info = {
                status: false,
                message: "Error while saving book information"
            }

            res.status(401).send(info);
        }

    } catch (error) {
        const info = {
            status: false,
            message: "Internal Server Error"
        }
        res.status(500).send(info)
        console.log(error);
    }
}).get(async (req, res) => {
    try {
        const result = await booksModel.find();

        if (result) {
            const info = {
                status: true,
                message: "List of all books in book store",
                result
            }
            res.status(200).send(info);
        } else {
            const info = {
                status: false,
                message: "Error while retrieving book information"
            }

            res.status(404).send(info);
        }
    } catch (error) {
        const info = {
            status: false,
            message: "Internal Server Error"
        }
        res.status(500).send(info)
        console.log(error);
    }
}).patch(async (req, res) => {
    try {
        const { _id, title, author, summary, bookRating } = req.body;
        const result = await booksModel.findOneAndUpdate({ _id }, {
            $set: {
                title,
                author,
                summary,
                bookRating
            }
        },
            {
                returnOriginal: false
            });

        if (result) {
            const info = {
                status: true,
                message: "Book Details updated",
                result
            }
            res.status(200).send(info);
        } else {
            const info = {
                status: false,
                message: "Error while update book information"
            }

            res.status(404).send(info);
        }
    } catch (error) {
        const info = {
            status: false,
            message: "Internal Server Error"
        }
        res.status(500).send(info)
        console.log(error);
    }
}).delete(async (req, res) => {
    try {
        const { _id } = req.body;
        const result = await booksModel.findOneAndDelete({ _id });
        if (result) {
            const info = {
                status: true,
                message: "Book information deleted",
                result
            }

            res.status(200).send(info);
        } else {
            const info = {
                status: false,
                message: "Error while delete book information"
            }

            res.status(404).send(info);
        }
    } catch (error) {
        const info = {
            status: false,
            message: "Internal Server Error"
        }
        res.status(500).send(info)
        console.log(error);
    }
});

router.get('/books/:_id', async(req, res) => {
    try {
        const { _id } = req.params;

        const result = await booksModel.findOne({_id});

        if(result) {
            const info = {
                status: true,
                message: "Retrieved book information",
                result
            }
            res.status(200).send(info);
        } else {
            const info = {
                status: false,
                message: "Error while retrieving book information"
            }

            res.status(404).send(info);
        }

    } catch (error) {
        const info = {
            status: false,
            message: "Internal Server Error"
        }
        res.status(500).send(info)
        console.log(error);
    }
});


module.exports = router;