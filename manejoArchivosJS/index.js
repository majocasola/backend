const fs = require('fs')
    // import fs from 'fs'


// SINCRONICO
/*
let dataRecuperadaDelArchivo;
try {
    fs.writeFileSync('./data.txt', 'INICIO\n');
    fs.appendFileSync('./data.txt', 'Otra cosa1\n')
    fs.appendFileSync('./data.txt', 'Otra cosa7\n')
    fs.appendFileSync('./data.txt', 'Otra cosa3\n')
    dataRecuperadaDelArchivo = fs.readFileSync('./data.txt', 'utf-8');

} catch (e) {
    console.log(e)
}
console.log(dataRecuperadaDelArchivo)
console.log('2')

let fecha;
try {
    fs.writeFileSync('./fyh.txt', Date.now().toLocaleString());
    fecha = fs.readFileSync('./fyh.txt', 'utf-8');
} catch (e) {
    console.log(e)
}
console.log(fecha)
*/

// SINCRONICO 
/*
fs.writeFileSync('./data.txt', 'INICIO\n');
fs.appendFileSync('./data.txt', 'Otra cosa1\n')
fs.appendFileSync('./data.txt', 'Otra cosa7\n')
fs.appendFileSync('./data.txt', 'Otra cosa3\n')
const dataRecuperadaDelArchivo = fs.readFileSync('./data.txt', 'utf-8');

console.log(dataRecuperadaDelArchivo);
*/

//ASINCRONICO   ----------- no dice AS, cuando no tiene el SYNC significa que es ASINCRONO

//--- PROMESAS
/*
function agregar() {
    fs.promises.appendFile('./data.txt', 'Otra cosa1\n').then(() => {
            console.log('no pude editar')
        })
        .catch((e) => {
            console.log('termine de agregar algo')
        })

}

function grabar() {
    fs.promises.writeFile('./data.txt', 'INICIO\n').then(() => {
        agregar()

    }).catch((e) => {
        console.log(`salio mal este es el error: ${e}`)
    })


}*/
// UNA MANERA FACIL DE HACERLO:
// async wait para volver sincrono algo asincrono

async function grabarYAgregar() {

    await fs.promises.writeFile('./data.txt', 'INICIO\n')
        .then(() => {
            console.log('salio bien')
        })
        .catch((e) => {
            console.log('salio mal')
        })

    await fs.promises.appendFile('./data.txt', 'Otra cosa1\n')
        .then(() => {
            console.log('salio bien')
        })
        .catch((e) => {
            console.log('salio mal')
        })

}
grabarYAgregar();




// /------------------------
// console.log('1')
// fs.writeFile('./data.txt', 'INICIO\n', (err) => {
//     if (err) {
//         console.log('no pude grabar')
//     } else {
//         console.log('cree el archivo y le puse algo adentro')
//     }
// });


// fs.appendFile('./data.txt', 'Otra cosa\n', (err) => {
//     if (err) {
//         console.log('no pude editar')
//     } else {
//         console.log('termine de agregar algo')
//     }
// });
// console.log('2')