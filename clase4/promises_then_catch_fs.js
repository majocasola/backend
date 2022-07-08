// Leer archivo
// fs.promises.readFile(ruta, encoding)

const fs = require("fs");
// leo el archivo usando sintaxis then/catch
function leerTC () {
    fs.promises.readFile('./files/archivo2.txt', 'utf-8')
    .then( contenido =>{
        console.log(contenido)
    })
    .catch (err => {
        console.log("Error de lectura", err)
    })
}
leerTC();

