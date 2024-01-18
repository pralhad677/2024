// controller.js
const express = require('express');
const app = express();
 exports.get = (req,res,next)=>{
    console.log(2)
    res.status(200).json({
        1:1
    });

    
 }
  