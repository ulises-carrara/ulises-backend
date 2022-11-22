import {MongoDBContainer} from '../../Container/index.js'
import {productModel} from '../../models/index.js'

export class productsMongo extends MongoDBContainer{
    constructor(){
        super({
            name: productModel.productCollection,
            schema: productModel.productSchema
        })
    }
}
