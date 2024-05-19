const mongoose= require('mongoose');

const exampleSchema= new mongoose.Schema({
    input:{
        type:String,
        required:true
    },
    output:{
        type:String,
        required:true
    },
    explaination:{
        type:String
    }
})

const questionSchema = new mongoose.Schema({
    qno:{
        type:Number,
        unique:true,
        required:true
    },
    qtitle:{
        type:String,
        unique:true,
        required:true
    },
    level:{
        type:String,
        unique:true,
        required:true
    },
    description:[{
        type:String
    }],
    example:[{
        type:exampleSchema
    }],
    constraints:[{
        type:String
    }]
});


const Question= mongoose.model('Question', questionSchema);

module.exports=Question;