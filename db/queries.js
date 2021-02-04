const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: '1886',
  port: 5432,
})


const getUserById = (request, response) => {
   // const id = parseInt(request.params.id)
  
    pool.query('SELECT * FROM users ', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  }
  
  
module.exports = {
    getUserById
  
  }