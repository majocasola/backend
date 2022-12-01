<<<<<<< HEAD
const { Router } = require("express")

const routerProductos = new Router();

// routerPersonas.use(nombre_funcion);

routerProductos.get("/", (req, res) => {
    res.json({message: "Productos Router"})
})

module.exports = routerProductos;


=======
const { Router } = require("express")

const routerProductos = new Router();

// routerPersonas.use(nombre_funcion);

routerProductos.get("/", (req, res) => {
    res.json({message: "Productos Router"})
})

module.exports = routerProductos;


>>>>>>> 3af1cd2fcb1d92ec5f227fe2695ecad61a9b5b57
// /api/personas2/