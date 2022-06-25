// Scope 
function exampleFunction() {
    // x solo se puede utilizar en exampleFunction
    const x = 'declarada en el scope local';
    console.log(x);
}

//console.log(x) // ReferenceError:  x is not defined

exampleFunction(); // asi se ve en consola el valor de x

// ahora si declaramos por fuera de la funcion la constante SI estara disponible