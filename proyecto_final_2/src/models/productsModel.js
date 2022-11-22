import { Schema } from 'mongoose'

const productCollection = 'products'

const productSchema = new Schema({
    title:{type: String, required: true, max: 100},
    description:{type: String, required: true, max: 200},
    code:{type: String, required: true, max: 10},
    price:{type: Number, required: true},
    timestamp:{type: String, required: true, max: 100},
},
{
    virtuals:true
})

productSchema.set('toJSON',{
    transform:(_, response)=>{
        response.id = response._id
        delete response._id
        return response
    }
})

export const productModel = {productCollection, productSchema}