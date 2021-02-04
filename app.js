const express = require('express')
const app = express()
const bodyParser = require('body-parser');

const usersRoutes = require('./routes/users');

app.use(bodyParser.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

  app.use('/api/users', usersRoutes);

app.post('/api/stuff', (req, res) => {
    console.log(req.body);
    res.status(201).json({
      message: 'Thing created successfully!'
    });
  });


module.exports = app