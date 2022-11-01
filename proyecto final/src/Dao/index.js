import {ContainerFilesystem} from "../Container/index.js"

const productsDao = new ContainerFilesystem("products")

const cartDao = new ContainerFilesystem("cart")

export {productsDao, cartDao}