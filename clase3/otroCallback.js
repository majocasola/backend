function escribirYLoguear(texto, callback) {
    console.log(texto);
    callback("Archivo escrito");
}

escribirYLoguear("Hola Mundo", (args)=>{
    const fecha = new Date().toLocaleDateString();
    console.log(`${fecha} : ${args}`);
});