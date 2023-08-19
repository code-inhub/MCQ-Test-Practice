const mongoose=require("mongoose");

const modelSchema= new mongoose.Schema({
      
    
    questions: String,

    allOptions:[
                {
                    Options:String,
                }
            ]   
} 
);

module.exports = mongoose.model('quesOptions',modelSchema);
