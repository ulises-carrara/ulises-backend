//primer proyecto coder 

class usuario{
    //constructor
    constructor (nombre, apellido, libros=[], mascotas=[]) {
        this.nombre=nombre
        this.apellido=apellido
        this.libros=libros
        this.mascotas=mascotas
    }
    //metodos
    getFullName (){
        return `El nombre completo del usuario es ${this.nombre} ${this.apellido}`
    }
    addMascota(mascota){
        this.mascotas.push
        (mascota)
    }
    countMascotas(){
        return this.mascotas.length
    }
    addLibro(title, autor){
        this.libros.push({title: title, autor: autor})

    }
    getLibros(){
        const libroNombre = []
        this.libros.forEach((libro)=>libroNombre.push(libro.title))
        return libroNombre
    }
}

const usuario1 = new usuario(
    "ulises",
    "carrara",
    [{title:"Harry Poter", autor:"J.K rowlling"}],
    ["gato", "perro"]
     )

console.log(usuario1.getFullName());
console.log(usuario1.countMascotas());
usuario1.addMascota("canario")
console.log(usuario1.countMascotas());
console.log(usuario1.getLibros());

const { error } = require("console")
