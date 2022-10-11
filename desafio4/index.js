const express = require ("express")

const routerProductos = require("./routes/productos.js")

const app = express()
const PORT = 8080

const server = app.listen(PORT, ()=> console.log(`server listening on port ${PORT}`) )
server.on("error" , err => console.log(`ERROR ${err}`))

app.use(express.json())

app.use("/productos", routerProductos)