const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();
const itemsMock = require('./mock/items.json');
// BB.DD
mongoose.connect(`mongodb+srv://german-guerrero:cNRImjgmIbr7Dpti@cluster0.of6jzem.mongodb.net/?retryWrites=true&w=majority`,
{useNewUrlParser: true, useUnifiedTopology: true},
()=> console.log('conectado a base de datos'));

/*process.env.DB_URL, {
   */
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Conectado a BB.DD'));

// Import Routes
const itemsRoutes = require('./routes/items');
const imgRoutes = require('./routes/img');
const paymentsIntentRoutes = require('./routes/paymentsIntent');
const ordersRoutes = require('./routes/orders');

// MIDDLEWARE
app.use(cors());
app.use(express.json());

app.use('/items', itemsRoutes);
app.use('/img', imgRoutes);
app.use('/create-payment-intent', paymentsIntentRoutes);
app.use('/order', ordersRoutes);

// Rutas
app.get('/', (req, res) => {
  res.send('Home');
});

app.get('/items', (req, res) =>{
  res.send(itemsMock);
})
app.get('/img/:imgName', (req, res)=>{
  const image = req.params.imgName;
  res.sendFile('${__dirname}/img/${image}');
});
// Start
app.listen(8080);
