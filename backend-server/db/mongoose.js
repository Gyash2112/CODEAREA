const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/codearea');

const db = mongoose.connection;

db.on('error', console.error.bind(console,'Error in creating connection with mongodb'));

db.once('open',function(){
    console.log("Connected to MongoDB");
})

module.exports=db;