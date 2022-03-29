require("dotenv").config();

const mongoose = require("mongoose");

const DB_URL = process.env.MONGO_DB_URL;

function connectDb() {
  return mongoose.connect(
    DB_URL,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (error) => {
      if (error) console.log("Connect to DB failed");
      else console.log("Connect to DB Success");
    }
  );
}

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error"));

module.exports = connectDb;
