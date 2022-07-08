// function randomInt(min, max){
//     return Math.floor((
//         Math.random() * (max - min +1)) 
//         + min);
// }

// const object ={};


// for (let i=0; i< 10000; i++){
//     let n = randomInt(1,20);

//     if(!object.hasOwnProperty(n)) { // si la llave no existe la agregamos
//     object[n] = 1;   
//     } else {
//         object[n]++;
//     }
    
// }

// console.log(object);



//-----------------------------------------------------

const productos = [
    {id: 1, nombre: "Escuadra", precio: 12.50},
    {id: 2, nombre: "Boligrafo", precio: 2.60},
    {id: 3, nombre: "Plumon", precio: 10.50},
    {id: 4, nombre: "Cuaderno", precio: 52.50},
    {id: 5, nombre: "Borrador", precio: 1.50},
    {id: 6, nombre: "Diccionario", precio: 70.50}
];

let buffer = "";
let precio_total = 0;
let menor = 10e99;
let mayor = -1e99;

productos.forEach((el)=>{
    buffer = (buffer + el.nombre + ",");
    precio_total = precio_total + el.precio;
});

console.log(buffer)
console.log(precio_total)

const precio_total2 = productos.reduce((acc,el)=>{
    return acc + el.precio
}, 0);
console.log(precio_total2);

let promedio = precio_total / productos.length;
console.log(promedio)

productos.forEach((el) =>{
    if (el.precio < menor){
        menor = el.precio;
    }
});
console.log(menor)

productos.forEach((el) =>{
    if (el.precio > mayor){
        mayor = el.precio;
    }
});
console.log(mayor);

// otra manera 
// ... convierte un arreglo a una lista de argumentos
console.log(Math.min(...productos.map(el=>el.precio)))
console.log(Math.max(...productos.map(el=>el.precio)))


const info = {
    mayor: mayor,
    menor: menor,
    promedio: promedio,
    precio_total: precio_total,
    listado: buffer

}

console.log(info);