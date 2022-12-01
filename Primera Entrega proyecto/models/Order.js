<<<<<<< HEAD
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  // id del pedido, email cliente, array objetos
  email: {
    type: String,
    required: true,
  },
  items: [
    {
      _id: false,
      id: String,
      qty: Number,
    },
  ],
});

module.exports = mongoose.model('Order', orderSchema);
=======
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  // id del pedido, email cliente, array objetos
  email: {
    type: String,
    required: true,
  },
  items: [
    {
      _id: false,
      id: String,
      qty: Number,
    },
  ],
});

module.exports = mongoose.model('Order', orderSchema);
>>>>>>> 3af1cd2fcb1d92ec5f227fe2695ecad61a9b5b57
