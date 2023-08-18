const mongoose=require("mongoose");

const modelSchema= new mongoose.Schema({
    qustionNo: Number,        
    
    questions: String,

    allOptions:[
                {
                    Options:String,
                }
            ]   
} 
);

module.exports = mongoose.model('quesOptions',modelSchema);
