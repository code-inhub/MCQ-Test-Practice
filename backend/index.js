const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Schema = require("./model.js")

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://anshulrana:anshulrana@cluster0.ghyh2xi.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("mongodb connected");
  })
  .catch((err) => console.log(err));


app.get("/add",async(req,res)=>{
        const {questions,Options}=req.body;
        Schema.create({questions,Options})
        .then(
            console.log("data added successfully")
        )
        .catch(err=>{console.log(err)})
})







const port = 8000;
app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
