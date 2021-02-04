const http= require('http')
const app = require('./app')

app.set('PORT', process.env.port||5002)
const server = http.createServer(app)

server.listen(process.env.PORT||5002)