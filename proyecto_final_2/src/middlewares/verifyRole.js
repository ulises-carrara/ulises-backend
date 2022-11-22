const IS_ADMIN = true

const verifyrole = (req, res, next) =>{
    if (!IS_ADMIN) return res.send({error:"usuario no autorisado"})
        
    next()
}

export {verifyrole}