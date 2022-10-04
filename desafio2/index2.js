// segundo proyecto coder 


const fs = require("fs")

class Container {
    constructor(fileName) {
        this.filePath = `./${fileName}.json`
    }

    async getAll() {
        try {
            const file = await fs.promises.readFile(this.filePath, "utf-8")

            const element = JSON.parse(file)

            return element

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

            const id = elements.length === 0 ? 1 : [elements.length -1].id +1

            element.id = id

            elements.push(element)

            await fs.promises.writeFile(this.filePath, JSON.stringify(elements, null, 3))

            return element.id

        } catch (error) {

            console.log(error);
        }
    }
    async getById(id){
        try {
            const elements = await this.getAll()

            const foundElement = elements.find((element) => element.id === id)

            if (!foundElement) return null 
            
            return foundElement

        } catch (error) {
             console.log(error)
        }
    }
    async deleteById(id){
        try {
            const elements = await this.getAll()

            const foundElement = elements.find((element) => element.id === id)

            const filterElement = elements.filter((element) => element.id != id)

            await fs.promises.writeFile(this.filePath, JSON.stringify(filterElement, null, 3))

        } catch (error) {
            console.log(error);
        }
    }
    async deleteAll(){
        try {
            await fs.promises.writeFile(this.filePath, JSON.stringify([], null, 3))
        } catch (error) {
            console.log(error);
        }
    }
}



const productContainer = new Container("productos")

productContainer.getAll()
    .then((data) => console.log({ data }))
    .catch((error) => console.log({ error }))

productContainer.save({
    title:"Pantalon",
    price: 15000
})
.then((data) => console.log({ data }))
.catch((error) => console.log({ error }))

productContainer.getById(1)
.then((data) => console.log({ data }))
.catch((error) => console.log({ error }))

//productContainer.deleteById()
