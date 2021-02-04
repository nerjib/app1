const express = require('express');
const db = require('../db/index');


const router = express.Router();


router.post('/', (req, res, next) => {
  
   
        res.status(201).json({
          message: 'Post saved successfully!'
        });
    
  });
  
  router.get('/', (req, res, next) => {
        res.status(200).json({"ff":"hello"});
  });
  


module.exports = router;