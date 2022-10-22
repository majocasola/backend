// BLOQUEANTE // PROCESO NO BLOQUEANTE

//SetTimeOut 
// 1,3,2 porque por mas que tarde 0 segundos es asincronico por ende va ultimo
console.log('tramite 1');

setTimeout(() => {
    console.log('tramite 2');
}, 0);

console.log('tramite 3');



// SetInterval

console.log('1')
setInterval(() => {
    console.log('2')
}, 1000);

console.log('3')

// agrega siempre la linea del intervalo indefinidamente