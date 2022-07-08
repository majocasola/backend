// hay que definir una constante con el mismo nombre e importamos el modulo

const fs = require ("fs");

// es para escribir.. ojo si se hace de nuevo se ESCRIBE de nuevo, y se borra lo anterior

// const data = fs.readFileSync("./files/archivo1.txt", "utf-8");
// console.log(data);

// fs.writeFileSync("./files/archivo2.txt", "Bienvenidos\nCoders");

// para AGREGAR texto sin que se borre:

fs.appendFileSync("./files/archivo2.txt", "Hola");

// para borrar el archivo:

fs.unlinkSync("./files/archivo2.txt") // y me borra todo el archivo