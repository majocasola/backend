class Persona {
    constructor(name, age) {
        this.nombre = name;
        this.edad = age;
    }

    static saludo = "hola como estas"; // solo no se puede acceder porque es estatico, para usarlo se debe hacer con una funcion

    saludoCompleto() {
        console.log(`Hola soy ${this.nombre} y tengo ${this.edad} años`);
    }

    saludoEstatico() {
        console.log(Persona.saludo);
    }
}

const p1 = new Persona("maria", 25);
console.log(p1);

const p2 = new Persona("Juan", 25);
console.log(p2);
p2.saludoCompleto() // aca no se pone el console.log porque daria undefined, que dentro del saludo ya hay un console.log
p1.saludoEstatico()