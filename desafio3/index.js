const express = require ("express")
const app = express()
const PORT = 8080
const { error } = require("console")
const fs = require("fs")

class Container {
    constructor(fileName) {
        this.filePath = `./${fileName}.json`
    }

    async getAll() {
        try {
            const file = await fs.promises.readFile(this.filePath, "utf-8")
            return JSON.parse(file)

        } catch (error) {
            if (error.code === "ENOENT") {

                await fs.promises.writeFile(this.filePath, JSON.stringify([], null, 3))

                return []
            }
        }
    }

    async save(element){
        try {
            const elements = await this.getAll()

            const id = 
            elements.length === 0 ? 1 : elements[elements.length -1].id + 1;

            element.id = id

            elements.push(element) 

            await fs.promises.writeFile(this.filePath, JSON.stringify(elements, null, 3))

            return element.id

        } catch (error) {

            console.log(error);
        }
    }
}
const productContainer = new Container("productos")
productContainer.getAll()
.then(data=> console.log({data}))
.catch(error => console.log({error}))

productContainer.save({
    title:"producto",
    price: 1500,
    stock: 150
}).then(data=> console.log({data}))
.catch(error => console.log({error}))



app.get("/productos", (req, res)=>{ 

    productContainer.getAll()
    .then(lista=>
      JSON.parse(lista)
    )
    .then(listaParse =>
        res.json(listaParse)
    )

})

app.get("/productoRandom", (req, res)=>{

    productContainer.getAll()
    .then(lista=>
        JSON.parse(lista)
      )
      .then(listaParse=>
        listaParse[randomFunction(listaParse.length)]
      )
      .then(itemLista=>
        res.json(itemLista)
        )

})

const server = app.listen(PORT, ()=> console.log(`server listening on port ${PORT}`) )

