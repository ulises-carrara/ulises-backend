import joi from 'joi'

const product = joi.object({
    title: joi.string().min(3).max(20).required(),
    description: joi.string().min(3).max(50).required(), 
    code: joi.string().min(3).max(10).required(), 
    price: joi.number().required(), 
    timestamp: joi.string().required(),

})

export const JOI_VALIDATOR = { product }