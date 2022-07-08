// Leo el archivo usando sintaxis async/await

const fs = require("fs");

async function leerAA(){
    try {
    const contenido = await fs.promises.readFile('./files/archivo2.txt', 'utf-8')
    console.log(contenido);
    }
    catch (err){
        console.log("hubo un error de lectura", err);
    }
}
leerAA();