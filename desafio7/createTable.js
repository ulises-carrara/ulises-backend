const { dataBase } = require ('./conection')
const {ContainerFilesystem} = require('./container.js')


const baseData = new ContainerFilesystem(dataBase, 'pruebas')

module.exports = {
    baseData
  }