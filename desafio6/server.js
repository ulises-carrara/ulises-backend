const express = require('express')
const { server: HttpServer } = require('http')
const { server: IOServer } = require('socket.io')
const app = express()
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)

app.use(express.static('./public'))

app.get('/', (req, res) =>{
    res.sendFile('index.html', {root:__dirname})
})

httpServer.listen(3000, ()=>console.log('server ON'))