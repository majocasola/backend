/*
1- Definir la función mostrarLista que reciba una lista de datos y muestre su contenido, si no está vacía, o de lo contrario muestre el mensaje: “lista vacía”. Luego, invocarla con datos de prueba para verificar que funciona bien en ambos casos.
2- Definir una función anónima que haga lo mismo que la del punto 1, e invocarla inmediatamente, pasando una lista con 3 números como argumento.
3- Definir la función crearMultiplicador  que reciba un número y devuelva una función anónima que reciba segundo número y dé como resultado el producto de ambos. Luego, a partir de la función definida, crear dos funciones duplicar y triplicar, y probarlas con diferentes valores.*/

// 1 
function mostrarLista(datos) {


    if (datos.length !== 0) {
        console.log(datos);
        return
    } else { console.log("esta vacio") };



}
mostrarLista([1, 2, 3]);
mostrarLista([]);

// 2
(
    function mostrarLista(datos) {
        if (datos.length !== 0) {
            console.log(datos);
            return
        } else { console.log("esta vacio") };
    }
)([4, 5, 6]);

// 3


function crearMultiplicador(num1) {
    return (num2) => {
        return num2 * num1;
    }
}

function duplicar(doble) {
    return crearMultiplicador(doble)(2)
}

console.log(duplicar(10))

function triplicar(triple) {
    return crearMultiplicador(triple)(3)
}

console.log(triplicar(3))