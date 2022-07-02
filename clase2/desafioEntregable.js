
class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
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
    getBookNa(){
        let nombreL = this.libros.map(soloNombre => soloNombre.nombreLibro)
        return nombreL;
    } // devuelve solo el nombre del libro con el METODO .map()

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
console.log(usuario.getBookNa());


