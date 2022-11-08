
const options ={
    client: 'sqlite',
    connection: {
        filename:'./db .sqlite'
    }
}
const dataBase = require ('knex')(options)

module.exports = {
    dataBase
}

//client: 'mysql',
//connection: {
//   host: '127.0.0.1',
//    user: 'root',
//    password:'',
//    database:'test'
//}