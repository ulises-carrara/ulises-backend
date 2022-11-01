import { Router } from "express";
import { productsDao } from "../../Dao/index.js";
import { DATE_UTILS, JOI_VALIDATOR } from "../../utils/index.js"
import {verifyrole} from "../../middlewares/index.js"

const router = Router()

router.get("/", async (req, res) => {
    const product = await productsDao.getAll()

    res.send(product)
})

router.get("/:id", async (req, res) => {
    const {id} = req.params

    const product = await productsDao.getById(Number(id))

    res.send(product)
})

router.post("/",verifyrole, async (req, res) => {
    try {
        const { title, description, code, price, } = req.body

        const product = await JOI_VALIDATOR.product.validateAsync({
            title,
            description,
            code,
            price,
            timestamp: DATE_UTILS.getTimestamps()
        })


        const createdProduct = await productsDao.save(product)

        res.send(createdProduct)
    } catch (error) {
        res.send(error)
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const {id} = req.params

        await productsDao.deleteById(Number(id))
    
        res.send({success: true})
    } catch (error) {
        res.send(error)
    }
})

export { router as routerProducts }