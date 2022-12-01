<<<<<<< HEAD
const Item = require('../models/Item');

module.exports = async function getItemById(id) {
  const itemFromDB = await Item.findById(id);
  return itemFromDB;
};
=======
const Item = require('../models/Item');

module.exports = async function getItemById(id) {
  const itemFromDB = await Item.findById(id);
  return itemFromDB;
};
>>>>>>> 3af1cd2fcb1d92ec5f227fe2695ecad61a9b5b57
