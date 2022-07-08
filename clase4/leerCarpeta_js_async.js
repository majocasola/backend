// Leer contenido de carpeta
// fs.readdir(ruta, callback)
const fs = require("fs");

fs.readdir("./", (error, files)=>{
    if(error){
        throw new Error ("no se pudo leer el contenido de la carpeta");
    } else {
        console.log(files);
    }
});

// nos da todos los archivos que tiene la carpeta clase4