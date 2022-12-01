<<<<<<< HEAD
function auth (req, res, next) {
    const token = req.body.token;
    if (!token) {
        res.send({error: "Necesita autenticarse"})
        return ;
    } else {
        req.token = token;
        next();
    }
}

module.exports = {
    auth
=======
function auth (req, res, next) {
    const token = req.body.token;
    if (!token) {
        res.send({error: "Necesita autenticarse"})
        return ;
    } else {
        req.token = token;
        next();
    }
}

module.exports = {
    auth
>>>>>>> 3af1cd2fcb1d92ec5f227fe2695ecad61a9b5b57
}