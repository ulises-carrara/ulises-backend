import {ContainerFilesystem} from "../Container/index.js"
import { mongodbService } from "../service/mongoService/index.js"
import {cartMongo} from './cart/index.js'
import {productsMongo} from './products/index.js'

//const productsDao = new ContainerFilesystem("products")
//const cartDao = new ContainerFilesystem("cart")

const SELECTED_DB = 'mongo'

const getSelectedDaos = () =>{
    switch(SELECTED_DB){
        case 'mongo':{
            mongodbService.init()
            return{
                productsDao: new productsMongo(),
                cartDao: new cartMongo(),
            }
        }
    }
}

const {productsDao, cartDao} = getSelectedDaos()

export {productsDao, cartDao}