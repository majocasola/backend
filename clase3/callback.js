// const ejecutar = unaFuncion => unaFuncion();
// const saludar = ()=> console.log("Saludos");
// ejecutar(saludar); // saludar es mi callback


const ejecutar = (unaFuncion, params) => unaFuncion(params);
const saludar = nombre => console.log(`Hola ${nombre}`);

ejecutar(saludar, "Maria");

//saludar("Jose")     --- como tiene el console.log nos da "Hola Jose"
// entonces se le delega la ejecucion de la funcion saludar a la funcion ejecutar y a la vez le pasamos el argumento que va a tomar esa funcion que seria el string del nombre Maria en este caso
// la funcion ejecutar seria un envoltorio(wraper), al que se le delega la ejecucion de otra funcion que se le pasa por argumento

ejecutar (
    (nombre) => console.log(`Chau ${nombre}`),
    "Antonio"
);

// la funcion "ejecutar" recibe un callback --- el callback es la funcion saludar
// si una funcion tiene muchos argumentos, el o los callbacks se pasan a lo ultimo

 