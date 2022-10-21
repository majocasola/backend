// Callbacks / errors


/*
function algoritmoDificil(parametro, callback) {
    callback(null, resultado)
}
algoritmoDificil(345654, (err, res) => {
    if (err) {
        throw "Cortar JS"
    } else if (res) {

    }
});

*/

// PROMESAS  .catch()  .then()

algoritmoDificil(65644)
    .catch((e) => {
        console.log(e);
    })
    .then((res) => {
        console.log(res);
    })



// con catch then
lapromesademiex(528)
    .catch((err) => {
        console.log('no cumplio con la promesa')
    })
    .then((res) => {
        console.log('casorio')
    })


// con Callback
lapromesademiex(528, (err, res) => {
    if (err) {
        console.log('no cumplio con la promesa');
    }
    if (res) {
        console.log('carorio')
    }
})