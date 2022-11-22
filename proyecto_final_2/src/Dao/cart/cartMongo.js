import {MongoDBContainer} from '../../Container/index.js'
import {cartModel} from '../../models/index.js'

export class cartMongo extends MongoDBContainer{
    constructor(){
        super({
            name: cartModel.cartCollection,
            schema: cartModel.cartSchema
        })
    }
}