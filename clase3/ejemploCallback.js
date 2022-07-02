function escribirYLoguear (texto, callbackParaLoguear) {
    console.log(texto);
    callbackParaLoguear('archivo escrito con exito');
}

escribirYLoguear('Hola mundo de los callbacks', (mensajeParaLoguear) => {
    const fecha = new Date ().toLocaleDateString();
    console.log(`${fecha}:${mensajeParaLoguear}`)
})