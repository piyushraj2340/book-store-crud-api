const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@assignment.irsabln.mongodb.net/?retryWrites=true&w=majority`).then(() => {
    console.log("Connected to Mongoose database!...");
}).catch((error) => {
    console.log("Failed to connect to Mongoose database!...");
    console.log(error);
}); 