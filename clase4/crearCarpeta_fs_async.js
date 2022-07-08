// creamos carpeta
const fs = require("fs");

fs.mkdir("./creandoCarpeta", error =>{
    if (error){
        console.log("no se pudo crear carpeta");
    } else {
        console.log("se ha creado la carpeta");
    }
});
