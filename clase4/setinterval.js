let i = 0;
const intervalo1 = setInterval(()=> {
    console.log("Esta cadena se imprime varias veces");
    if (i==5){
        clearInterval(intervalo1);
    }
    i++;
}, 500);

console.log("Este es un mensaje exterior");

clearInterval(intervalo1) // con esta sentencia se ejecuta pero no se ve en la consola porque se ejecuta inmediatamente, no espera el tiempo, por eso no se ve 
// setInterval es detener un intervalo                                                                                                                                  