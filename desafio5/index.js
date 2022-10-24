const express = require ('express')
const { engine } = require('express-handlebars')

const PORT = 8080
const app = express()
app.listen(PORT, ()=>{console.log(`server escuchando en puerto ${PORT}`)})

app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', './views')


app.get('/', (req, res)=>{
    const datos ={
        nombre:'ulises',
        apellido:'carrara',
        edad:'22',
        telefono:'3512420665'
    }
    res.render('datos', datos)
})