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
  
  router.get('/user', async (req, res) => {

  const getAllQ = 'SELECT * from users';
  try {
    // const { rows } = qr.query(getAllQ);
    const { rows } = await db.query(getAllQ);
    return res.status(201).send(rows);
  } catch (error) {
    if (error.routine === '_bt_check_unique') {
      return res.status(400).send({ message: 'User with that EMAIL already exist' });
    }
    return res.status(400).send(`${error} jsh`);
  }
  })

module.exports = router;