/* 
Un closure es un tipo especial de objeto que combina dos cosas: una funcion, y el entorno en que se creó la misma.
El entorno esta formado porlas variables locales que estaban dentro del alcance en el momento que se creó el closure. En este caso, gritarCH es un closure que incorpora la funcion anónima, junto con el parámetro nombre y el string "!!!", que existían cuando se creó.
*/
// funcion que retorna una funcion anonima para acceder al scope superior

function crearGritarNombre(nombre) {
    const signoDeExclamacion = '!!!';
    return function() {
        console.log(`${nombre}${signoDeExclamacion}`);
    }
}
const gritarCH = crearGritarNombre("Majo");
gritarCH();

crearGritarNombre("Pepe")(); // funciona igual que el anterior