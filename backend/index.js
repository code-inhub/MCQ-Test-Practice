const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Schema = require("./model.js");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/add", async (req, res) => {
  try {
  const Bdata = req.body.Bdata; // Extract Bdata from req.body
    const questions = Bdata.questions;
    const allOptions = Bdata.allOptions;
    await Schema.create({ questions, allOptions });

    console.log("Data added successfully", questions, allOptions);
    res.send("Data added successfully");
  } catch (err) {
    console.log(err);
    res.status(500).send("Error adding data");
  }
});

mongoose
  .connect(
    "mongodb+srv://anshulrana:anshulrana@cluster0.ghyh2xi.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("mongodb connected");
  })
  .catch((err) => console.log(err));

const port = 8000;
app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
