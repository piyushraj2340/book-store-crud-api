require('dotenv').config();
const express = require('express');
require('./src/db/database');
const bookRouter = require('./src/routers/books');

const app = express();

const port = 8000 || process.env.PORT;

app.use(express.json());
app.use(bookRouter);

app.get('/', (req, res) => {
    res.send("Welcome to Books Store");
});

app.listen(port, () => {
    console.log(`listening on port: ${port}`);
});