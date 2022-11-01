import { Router } from "express";
import {DATE_UTILS} from "../../utils/index.js"
import { cartDao, productsDao } from "../../Dao/index.js";
const router = Router()

router.post("/", async (req, res)=>{
    const baseCart = {timestamp: DATE_UTILS.getTimestamps(), products: []}

    const cart = await cartDao.save(baseCart)

    res.send({succsess: true, cartId: cart.id})
    
})
router.post("/:cartId/product", async (req, res)=>{
    const {productId} = req.body
    const {cartId} = req.params

    const cart = await cartDao.getById(Number(cartId))
    if(!cart)return res.send({error: true, message: "algo malio sal"})
    
    const product = await productsDao.getById(Number(productId)) 
    if(!product)return res.send({error: true, message: "algo malio sal"})

    cart.products.push(product)

    const updateCart = await cartDao.updateById(Number(cartId), cart)

    res.send({succsess: true, cart: updateCart})
})

export { router as routerCart }