function foo() {
    return function() {
        console.log("Hola coders");
    }
}

//foo(); // asi solo no devuleve nada, para acceder al return hay que asignar la funcion a una variable 
// IMPORTANTE: 
const f = foo(); // en const f se almacena todo lo que esta despues de return
f(); // asi sí devuelve "Hola coders"

// ARROW
// arrow con IIFE para que se ejecute automaticamente

(() => { console.log("Funcion FLECHA"); })()

/*
se puede mostrar la funcion con console.log sin tener que asignarla antes a una variable

function foo (a,b){
    return a + b;
}

console.log(foo(2,5))

*/