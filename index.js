// BACKEND

// funcion anonima (solo se puede hacer con una funcion)
//((a, b) => a + b)(); // el segundo parentesis es la llamada de la funcion

//const sumar = (x, v) => x + v;

((a, b) => {
    const resultado = a + b;
    console.log(resultado)
})(10, 20);

((r, e) => console.log(r + e))(20, 30);


// FUNCION DE ALTO ORDEN (Closure)
function pasaAMinuscula(nombre, funcExterna) {
    nombre = nombre.toLowerCase();
    funcExterna(nombre);
}

pasaAMinuscula('MAJO', (nombre) => console.log('hola ' + nombre))

//(nombre) => console.log('hola ' + nombre);
//(nombre) => enviarPorEmail('hola ' + nombre);
//(nombre) => hagoOtraCosa('hola ' + nombre);