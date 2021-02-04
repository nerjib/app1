const express = require('express');
const db = require('../db/index');
const db1 = require('../db/queries')
const database = require('../db/database');
/*
export const messagesPage = async (req, res) => {
  try {
    const data = await messagesModel.select('name, message');
    res.status(200).json({ messages: data.rows });
  } catch (err) {
    res.status(200).json({ messages: err.stack });
  }
};
*/



const router = express.Router();

router.get('/hh', async (req, res) => {
   // res.status(200).json({ messages: 'data.rows '});
    try {
        const readAllQuery = 'SELECT * FROM users';
        const { rows } = await database.query(readAllQuery);
        return res.send({ rows });
      } catch (error) {
        return res.send(error);
      }
});

router.post('/', (req, res, next) => {  
   
        res.status(201).json({
          message: 'Post saved successfully!'
        });
    
  });
  
  router.get('/', (req, res, next) => {
        res.status(200).json({"ff":"hello"});
  });

  router.get('/ee', db1.getUserById);
  
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