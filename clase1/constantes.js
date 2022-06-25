/*
const i = 0;
console.log(i);

i = 3; // no se puede reasignar otro valor ya que i es una constantes, y deben inicializarse siempre

let miVAriable;// esto si se puede hacer porque es let, se puede declarar y luego inicializar
//const miConstante;  esto no se puede hacer

miVAriable = 5;
console.log(miVAriable);
*/

// en las constantes no se puede reasignar valor pero si pueden mutar, es decir, en un array se puede cambiar lo que hay dentro, no reasignable es diferente de inmutables

// MUTABILIDAD:

// a la constante se le pueden cambiar sus propiedades:

const user = { name: "juan", edad: 12, colorFavorito: "rojo" };
user.name = "maria";
console.log(user); // resultado= "maria"

// Lo que NO es posible:
const usuario = "pedro";
//TyperError: Assignment to constant
usuario = "pepe"; // error

// Tambien da error :

user = { name: "fulano" }; // da error porque se quiere reasignar valor a una constante

// si podemos cambiar la propiedad name
user.name = "marcos";
console.log(user);

user.edad = user.edad + 1; // si queremos sumarle 1 a la propiedad edad de user

// para agregar un elemento a los arreglos se usa "push"