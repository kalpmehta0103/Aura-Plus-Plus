const mongoose = require("mongoose");
const dbConfig = require("./config/db.config.js"); // Adjust the path if needed

// Initialize an empty db object
const db = {};

// Define a function to connect to MongoDB
const connectMongo = () => {
    mongoose.connect(dbConfig.url, dbConfig.options)
        .then(() => {
            console.log("MongoDB connected");
        })
        .catch((err) => {
            console.error("Error connecting to MongoDB:", err);
            process.exit(1); // Exit the process if the connection fails
        });
};

// Add mongoose and models to db
db.mongoose = mongoose;
db.connect = connectMongo;
db.scheduler = require("./models/scheduler.js"); // Make sure this model exists

module.exports = db;
