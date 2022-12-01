<<<<<<< HEAD
const express = require("express");

const Contenedor = require("./utils/contenedor");
const dbName = "db.json";
const contenedor = new Contenedor(dbName);
const { auth } = require("./middlewares/auth");
const routerProductos = require("./routes/productos");
const upload = require("./storage");

app.set('view engine', 'pug');
app.set('views', './views');

const app = express();
const PORT = 8080;

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
})

app.use((req, res, next) => {
    const date = new Date(Date.now());
    console.log(date.toLocaleString());
    next();
} )


app.get("/api/productos", (req, res) => {
    const listadoProductos = contenedor.getAll();
    res.json(listadoProductos)
    console.log(req.query)
    
})

app.get("/api/producto/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const producto = contenedor.getById(id);
    res.json(producto);
});

app.use("/api/productos2", routerProductos);

const server = app.listen(PORT, (req, res) => {
    console.log(`Server listening on port: ${PORT}`)
=======
const express = require("express");

const Contenedor = require("./utils/contenedor");
const dbName = "db.json";
const contenedor = new Contenedor(dbName);
const { auth } = require("./middlewares/auth");
const routerProductos = require("./routes/productos");
const upload = require("./storage");

app.set('view engine', 'pug');
app.set('views', './views');

const app = express();
const PORT = 8080;

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
})

app.use((req, res, next) => {
    const date = new Date(Date.now());
    console.log(date.toLocaleString());
    next();
} )


app.get("/api/productos", (req, res) => {
    const listadoProductos = contenedor.getAll();
    res.json(listadoProductos)
    console.log(req.query)
    
})

app.get("/api/producto/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const producto = contenedor.getById(id);
    res.json(producto);
});

app.use("/api/productos2", routerProductos);

const server = app.listen(PORT, (req, res) => {
    console.log(`Server listening on port: ${PORT}`)
>>>>>>> 3af1cd2fcb1d92ec5f227fe2695ecad61a9b5b57
})