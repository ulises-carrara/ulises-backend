const express = require('express')
const { server: HttpServer } = require('http')
const { server: IOServer } = require('socket.io')

const app = express()
app.use(express.static('./public'))
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)



app.get('/', (req, res) =>{
    res.sendFile('index.html')
})

httpServer.listen(3000, ()=>console.log('server ON'))