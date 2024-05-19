const express = require('express');
const port = 8000;
var app=express();
const fs= require('fs-extra');
// const axios = require('axios');

// console.log(db);
var compiler = require('compilex');
var options={stats:true};
const cors= require('cors');
const db = require('./db/mongoose');
const Question= require('./model/question')
const {runCode} = require('./runCode');
compiler.init(options);
app.use(cors());
app.use(express.json());
app.get('/', (req,res)=>{
    return res.send("<h1>HELLO COMPILER</h1>")
})
app.post('/compile', (req,res)=>{
    const code = req.body.code;
    const input= req.body.input;
    let language=req.body.language;
    console.log(code);
    if(req.body.language==="python"){
        language="py";
    }

    async function run(){
        const output=await runCode({lang:language, code:code, input:input})
        console.log(output);
        res.status(200).send(output);
    }
    run();

    //  function calculate(code){
        
    //  }
    //  function calculatewithInput(code,input){
    //     compiler.compileJavaWithInput( { OS : "windows"} , code ,input, function(data){
    //         console.log(data);
    //         // fs.rmdir('temp',{recursive:true},()=>{console.log("Deleted temp folder")});
    //         fs.emptyDirSync('./temp');
    //         res.send(data);
    //     });  
    //  }
    //  if(!input){
    //     if(language==="java"){
    //         compiler.compileJava( { OS : "windows"} , code , function(data){
    //             console.log(data);
    //             // fs.rmdir('temp',{recursive:true},()=>{console.log("Deleted temp folder")});
    //             fs.emptyDirSync('./temp');
    //             res.send(data);
    //         });  
    //     }
    //     else{
    //         compiler.compilePython( { OS : "windows"} , code , function(data){
    //             console.log(data);
    //             // fs.rmdir('temp',{recursive:true},()=>{console.log("Deleted temp folder")});
    //             fs.emptyDirSync('./temp');
    //             res.send(data);
    //         });  
    //     }
    //  }
    //  else{
    //     if(language==="java"){
    //         compiler.compileJavaWithInput( { OS : "windows"} , code ,input, function(data){
    //             console.log(data);
    //             // fs.rmdir('temp',{recursive:true},()=>{console.log("Deleted temp folder")});
    //             fs.emptyDirSync('./temp');
    //             res.send(data);
    //         });  
    //     }
    //     else{
    //         compiler.compilePythonWithInput( { OS : "windows"} , code ,input, function(data){
    //             console.log(data);
    //             // fs.rmdir('temp',{recursive:true},()=>{console.log("Deleted temp folder")});
    //             fs.emptyDirSync('./temp');
    //             res.send(data);
    //         });  
    //     }
    //  }
})
// let xyz=`import java.util.Scanner;
// import java.util.*;

// class Main{
//   public static void main(String args[]){
//     //Write your code here
//     System.out.println("YASH");
//   }
// }`
// console.log(JSON.stringify(xyz))

app.listen(port, (err)=>{
     if(err) return;

     console.log(`Connected to port ${port}`);
})