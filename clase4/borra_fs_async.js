const fs = require("fs");
// para borrar archivo asyncronico con callbacks
fs.unlink("./files/archivo1.txt", error =>{
    if (error){
        console.log("no se pudo borrar el archivo");
    } else {
        console.log("El archivo se ha borrado");
    }
});