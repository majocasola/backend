/*
Desarrollar una función ‘mostrarLetras’ que reciba un string como parámetro y permita mostrar una vez por segundo cada uno de sus caracteres. 
Al finalizar, debe invocar a la siguiente función que se le pasa también  como parámetro: const fin = () => console.log('terminé')
Realizar tres llamadas a ‘mostrarLetras’ con el mensaje ‘¡Hola!’ y demoras de 0, 250 y 500 mS verificando que los mensajes de salida se intercalen.
*/

function mostrarLetras (cadena, time, cb) {
    let i = 0;
    const imprimir  = setInterval (
        () => {
            if (cadena[i] != undefined) {
                console.log(cadena[i])
            } else {
                cb();
                clearInterval(imprimir);
            }
            i++;
        }, 
        time
    );
}
const fin = () => console.log("Termine");

mostrarLetras("Hola", 0, fin);
mostrarLetras("Hola", 250, fin);
mostrarLetras("Hola", 500, fin);
// a lo ultimo muestra mal las letras porque es asincrono, es decir ejecuta todo, no espera, entonces sale lo que sale
