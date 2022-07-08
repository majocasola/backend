const moment = require("moment");

const actualDate = moment ();
const birthDate = moment("1988-04-11"); // 01 enero 2020

const deltaDays = actualDate.diff(birthDate, "days")
const deltaYears = actualDate.diff(birthDate, "years")

console.log(`La fecha actual es ${actualDate.format("DD/MM/YYYY")}`)
console.log(`La fecha de nacimiento es ${birthDate.format("DD/MM/YYYY")}`)
console.log(`Han pasado ${deltaDays} dias desde la fecha de mi nacimiento`);
console.log(`Han pasado ${deltaYears} años desde la fecha de mi nacimiento`);