import { Schema } from 'mongoose'


const cartCollection = 'cart'

const cartSchema = new Schema({
    timestamp:{type: String, required: true, max: 100},
    products: [{type:Schema.Types.ObjectId, ref:'products'}]
},
{
    virtuals:true
})

cartSchema.set('toJSON',{
    transform:(_, response)=>{
        response.id = response._id
        delete response._id
        return response
    }
})

export const cartModel = {cartCollection, cartSchema}