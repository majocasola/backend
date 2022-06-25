/*
let i = 0; // ambito global 

function foo() {
    i = 1;
    let j = 2; // la variable J es de ambito local

    if (true) {
        console.log(i);
        console.log(j);
    }

}

foo();
console.log(j); // me da error ya que trato de ver la variable por fuera de la funcion, cuando esta se declaro dentro de la funcion 

*/

function foo2() {
    let a = 0;
    if (true) {
        let a = 1;
        console.log(a);
    }
    console.log(a);
}
foo2();