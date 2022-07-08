/*
Consigna: Implementar programa que contenga una clase llamada Contenedor que reciba el nombre del archivo con el que va a trabajar e implemente los siguientes métodos:

save(Object): Number - Recibe un objeto, lo guarda en el archivo, devuelve el id asignado.
getById(Number): Object - Recibe un id y devuelve el objeto con ese id, o null si no está.
getAll(): Object[] - Devuelve un array con los objetos presentes en el archivo.
deleteById(Number): void - Elimina del archivo el objeto con el id buscado.
deleteAll(): void - Elimina todos los objetos presentes en el archivo.


Aspectos a incluir en el entregable: 
El método save incorporará al producto un id numérico, que deberá ser siempre uno más que el id del último objeto agregado (o id 1 si es el primer objeto que se agrega) y no puede estar repetido.
Tomar en consideración el contenido previo del archivo, en caso de utilizar uno existente.
Implementar el manejo de archivos con el módulo fs de node.js, utilizando promesas con async/await y manejo de errores.
Probar el módulo creando un contenedor de productos, que se guarde en el archivo: “productos.txt”
Incluir un llamado de prueba a cada método, y mostrando por pantalla según corresponda para verificar el correcto funcionamiento del módulo construído. 
El formato de cada producto será : 

*/
const fs = require("fs");


const data = fs.readFileSync("productos.json", "utf-8");
const nuevoProducto = JSON.parse(data);  // archivito

class Contenedor{
    constructor (productos){  // archivo
    this.productos=productos;
    }

    save(object){
        this.productos = nuevoProducto;
        const nuevoArray = [];
        const idGenerico = 1;
        try {
            const nuevoProducto =  this.readFile(data);
            
        
            if(nuevoProducto.length <1){
                nuevoProducto=this.productos;
                nuevoProducto.push(object);

            }
         
            console.log(`el contenido de nuevoProducto es: ${nuevoProducto}`);
        }
        catch(err){
            console.log("hubo error",err)
        }
        
        console.log(`el contenido de data es: ${data}`);
        console.log(`el contenido de object es: ${object}`);
                
        
    }

     getById(numero){
        const nuevoProducto = [];
        this.productos = nuevoProducto;
        const item = nuevoProducto.find(item=> item.id === numero);
        console.log(item)
    }


    getAll(){
        try{
            const nuevoProducto = [];
            this.productos = nuevoProducto;

        }
    }


    
    

    
}


//console.log("productos--> ", products[0]);

// insertamos productos nuevos
// products.push({
//     nombre:"HP1",
//     precio:555,
//     id:2,
//     categoria:"impresora"
// });

// console.log(products)

// //fs.writeFileSync("productos.json",JSON.stringify(products, null, 4))


// const {nombre} = "Dell1";
// const produc = nombre.filter((nomb) => nomb.nombre ===nombre);
// //console.log(`el nombre es ${produc}`)
// console.log(produc)
// console.log(nomb);
// console.log(nombre)

module.exports = Contenedor