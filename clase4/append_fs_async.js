// AGREGAR contenido a un archivo
// fs.appendFile(ruta, datos, callback)
const fs = require("fs");

fs.appendFile("./files/archivo1.txt", "AGREGO nuevo contenido\n", error =>{
    if (error){
        console.log("Hubo error al agregar contenido");   
    } else {
        console.log("se agrego exitosamente el contenido");
    }
});