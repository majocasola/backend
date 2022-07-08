const fs = require("fs");

fs.readFile("./files/archivo1.txt", "utf-8", (err, data) =>{
    if (err){
        console.log(err);
    } else {
        console.log(data);
    }
});
// lo que hicimos fue leer el archico1 de manera asyncronica

console.log("hola esto se ve primero aunque esta escrito despues");


// SOBREESCRIBIR UN ARCHIVO
// fs.writeDile (ruta, datos, callback)

fs.writeFile("./files/archivo1.txt","texto de prueba para sobreescribir archivo\n", error =>{
    if (error){
        console.log("hay un error al reescribir archivo")
    } else {
        console.log("Se guardo la sobreescritura!");
    }
});

