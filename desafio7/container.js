class ContainerFilesystem {
  constructor(options, nameTable) {
    options.schema.createTable(`${nameTable}`, table => {
      table.increments('id')
      table.string('name')
      table.string('code')
      table.integer('stock')
      table.integer('price')
    })

      .then(() => console.log('tabla creada'))
      .catch(err => { console.log(err); throw err })
      .finally(() => options.destroy())
  }


  insert(options, tableName, element) {
    options(`${tableName}`).insert(element)
      .then(() => console.log('primer id: ', PrimerID))
      .catch(err => { console.log(err); })
      .finally(() => options.destroy())
  }

  select(options, tableName) {
    options.from(`${tableName}`).select('name')
      .then(rows => {
        console.log(rows);
      })
      .catch(err => console.log(err))
      .finally(() => options.destroy())

  }
  deleteById(options, tableName, id) {
    options.from(`${tableName}`).where('id', id).del()
      .then(() => console.log(`auto eliminado, id: ${id}`))
      .catch(err => { console.log(err); throw err })
      .finally(() => options.destroy())
  }

  deleteAll(options, tableName) {
    options.from(`${tableName}`).del()
      .then(() => console.log('todos los autos fueron eliminados'))
      .catch(err => { console.log(err); throw err })
      .finally(() => options.destroy())
  }

  update(options, tableName, id, newValeu) {
    options.from(`${tableName}`).where('id', `${id}`).update({ name: `${newValeu}` })
      .then((cant) => console.log('Car updated: ', cant))
      .catch(err => { console.log(err); throw err })
      .finally(() => options.destroy())
  }
}



module.exports = {
  ContainerFilesystem
}




//export { ContainerFilesystem };
//const productsDao = new ContainerFilesystem("products")
//this.filePath = `./src/db/${fileName}.json`;