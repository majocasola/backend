<<<<<<< HEAD
const getItemById = require('./getItemById');

module.exports = getOrderAmount = async (items) => {
  let amount = 0;

  for (let index = 0; index < items.length; index++) {
    const item = items[index];
    const itemDB = await getItemById(item.id);

    let operation = itemDB.price * item.qty;
    amount += operation;
  }
  const onlyTwoDecimals = amount.toFixed(2);
  const parsedAmount = parseInt(onlyTwoDecimals.replace('.', ''), 10);
  return parsedAmount;
};
=======
const getItemById = require('./getItemById');

module.exports = getOrderAmount = async (items) => {
  let amount = 0;

  for (let index = 0; index < items.length; index++) {
    const item = items[index];
    const itemDB = await getItemById(item.id);

    let operation = itemDB.price * item.qty;
    amount += operation;
  }
  const onlyTwoDecimals = amount.toFixed(2);
  const parsedAmount = parseInt(onlyTwoDecimals.replace('.', ''), 10);
  return parsedAmount;
};
>>>>>>> 3af1cd2fcb1d92ec5f227fe2695ecad61a9b5b57
