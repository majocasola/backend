<<<<<<< HEAD
const multer = require("multer");
const storageFolder = "uploads";

let storage = multer.diskStorage({
    destination: function (req, res, next) {
        next(null, storageFolder);
    },
    filename: function (req, file, next) {
        next(null, Date.now() + "-" + file.originalname);
    }
});

let upload = multer({storage: storage});

=======
const multer = require("multer");
const storageFolder = "uploads";

let storage = multer.diskStorage({
    destination: function (req, res, next) {
        next(null, storageFolder);
    },
    filename: function (req, file, next) {
        next(null, Date.now() + "-" + file.originalname);
    }
});

let upload = multer({storage: storage});

>>>>>>> 3af1cd2fcb1d92ec5f227fe2695ecad61a9b5b57
module.exports = upload;