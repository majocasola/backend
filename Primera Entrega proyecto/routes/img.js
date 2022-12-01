<<<<<<< HEAD
const express = require('express');
const router = express.Router();

const path = require('path');
// IMAGE PATH
const imgFolderPath = path.join(__dirname, '../img/');

//IMAGES
router.get('/:imgName', (req, res) => {
  const image = req.params.imgName;
  res.sendFile(`${imgFolderPath}${image}`);
});

module.exports = router;
=======
const express = require('express');
const router = express.Router();

const path = require('path');
// IMAGE PATH
const imgFolderPath = path.join(__dirname, '../img/');

//IMAGES
router.get('/:imgName', (req, res) => {
  const image = req.params.imgName;
  res.sendFile(`${imgFolderPath}${image}`);
});

module.exports = router;
>>>>>>> 3af1cd2fcb1d92ec5f227fe2695ecad61a9b5b57
