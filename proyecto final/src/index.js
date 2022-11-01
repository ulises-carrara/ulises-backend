import express from 'express'
import { routerProducts, routerCart } from './router/index.js'
const app = express()
const PORT = process.env.PORT || 8080

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static("public"))

app.use('/api/products', routerProducts)
app.use('/api/cart', routerCart)


app.listen(PORT, ()=>console.log(`Server listening on port ${PORT}`))