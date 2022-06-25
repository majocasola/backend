/*
1-Definir variables que almacenen los siguiente datos:
Un nombre: “pepe”
Una edad: 25
Un precio: $99.90
Los nombres de mis series favoritas: “Dark”, “Mr Robot”, “Castlevania”
Mis películas favoritas, en donde cada película detalla su nombre, el año de estreno, y una lista con los nombres de sus protagonistas.
2-Mostrar todos esos valores por consola
3-Incrementar la edad en 1 y volver a mostrarla
4-Agregar una serie a la lista y volver a mostrarla
*/

// 1)
let nombre = "Pepe";
let edad = 25;
let precio = 99.9;
let series = ["Dark", "Mr Robot", "Castlevania"];
let peliculas = [
    batman = { año: 1999, protagonistas: ["pepe", "tom", "jen"] },
    superman = { año: 2000, protagonistas: ["josefa", "juancito", "lopez"] },
    monster = { año: 1988, protagonistas: ["majo", "sergio", "el pelu"] }
]

// 2)
console.log(nombre, edad, precio, series, peliculas);

// 3)
edad += 1;
console.log("se incrementa la edad en 1 : ", edad);

// 4)

series.push("la monja"); // asi se agregra a la ultima parte una nueva serie
console.log(series);