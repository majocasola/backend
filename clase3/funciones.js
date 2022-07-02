function mostrar (params){
    console.log(params);
}

const mostrarv2 = function (params){
    console.log(params);
}

const mostrarv3 = (params) => {
    console.log(params);
}

mostrarv3(3);

// sin parentesis "params" solo si se pasa UN SOLO argumento
const mostrarv4 = params =>{
    console.log(params);
}
mostrarv4(4);

const mostrarv5 = (params, second) =>{
    console.log(params, second);
}
mostrarv5(8) // nos muestra 8 y undefind, porque solo tomar el primer argumento, y como no hay un segundo argumento y tiene dos parametros, al segundo devuelve "undefinded"


// las arrow functions si solo tiene una instruccion se puede sacar las llaves y se realiza en una sola linea, y el return es implicito
const sumar = (a,b) => a+b;
console.log(sumar(4,7));
// o es puede asignar a una variable el resultado
let resultado = sumar(10,20);
console.log(resultado);