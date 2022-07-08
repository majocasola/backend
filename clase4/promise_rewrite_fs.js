// Sobreescribir un arhivo con promesa
// fs.promises.writeFile(ruta, datos)

const fs = require("fs");

async function escribir(){
    try {
        await fs.promises.writeFile("./files/archivo2.txt", "texto escribiendo con async funcion promises\n")
        console.log("se guardo la reescritura correctamente!!");
    } 
    catch (err){
        console.log("hubo un error no se pudo reescribir")
    }
}

escribir();

/*
// Renombrar archivo
// fs.promises.rename(rutaVieja, rutaNueva)


const fs = require("fs");

async function renombrear("./files/archivo2.txt", "./files/archivoNuevo2.txt" ){
    try {
        await fs.promises.rename("./files/archivo2.txt", "./files/archivoNuevo2.txt")
        console.log("renombrado")
    }
    catch (err){
        console.log("hubo un error, no se pudo renombrar")
    }
}

*/