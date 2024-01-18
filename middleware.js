// middleware.js
const express = require('express')
const router = express.Router(); 

const controller = require('./controller')
 



console.log(1)
router.get('/get',controller.get);
 
  
module.exports = router
  