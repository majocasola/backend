const fs = require("fs");
const funcionGuarda = () =>{
    const date = new Date(Date.now()).toLocaleString();
    fs.writeFileSync("./fyh.txt", date);
}

const funcionLeer = ()=> {
    try {
        const data = fs.readFileSync("./fyh.txt", "utf-8");
        console.log(data);
    
    } catch (err){
        throw new Error("El archivo no se encontró")
    }

}

funcionGuarda(); // si sacamos esto y ejecutamos, en la consola nos tira el error diciendo que el archivo no se encontro, que es el texto que se puso para error
funcionLeer();
