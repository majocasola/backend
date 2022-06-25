/*
En este ejercicio construiremos una herramienta que permita que diferentes personas puedan llevar cuentas individuales sobre algo que deseen contabilizar, al mismo tiempo que nos brinde una contabilidad general del total contado. Para ello:
1-Definir la clase Contador.
2-Cada instancia de contador debe ser identificada con el nombre de la persona responsable de ese conteo.
3-Cada instancia inicia su cuenta individual en cero.
4-La clase en sí misma posee un valor estático con el que lleva la cuenta de todo lo contado por sus instancias, el cual también inicia en cero.
5-Definir un método obtenerResponsable que devuelva el nombre del responsable de la instancia.
6-Definir un método obtenerCuentaIndividual que devuelva la cantidad contada por la instancia.
7-Definir un método obtenerCuentaGlobal que devuelva la cantidad contada por todos los contadores creados hasta el momento.
8-Definir el método contar que incremente en uno tanto la cuenta individual como la cuenta general
*/




//--------------------------------------------------------








/*EJEMPLO DESAFIO BACK ANTERIOR NO VER

class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre
        this.apellido = apellido
        this.libros = libros
        this.mascotas = mascotas
    }

    getFullName() {
        return `${this.nombre} ${this.apellido}`;
    }

    addMascotas(mascota) {

        return this.mascotas.push(mascota);
    }

    countMascotas() {
        return this.mascotas.length;
    }
    addBook(libros) {
        return this.libros.push(libros);
    }

    getBookNames() {
        return this.libros;
    }

}

const usuario = new Usuario('Juan', 'Perez', [{ nombreLibro: "Dr. Sueño", autorLibro: "Stephen King" }], ["perro", "gato"]);
console.log(usuario);
console.log(usuario.getFullName());
console.log(usuario.countMascotas());
console.log(usuario.getBookNames());

usuario.addMascotas("pez");
usuario.addBook({ nombreLibro: "El señor de los anillos", autorLibro: "J.R.R. Tolkien" });


console.log(usuario.countMascotas());
console.log(usuario.getBookNames());

*/