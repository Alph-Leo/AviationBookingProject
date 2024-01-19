const AuthService = require('../service/auth');

const register = async (req, res) => {
    await AuthService.save(req.body)
    .then((Response) => res.json(Response))
    .catch((error) => res.json(error))
}

const login = async (req, res) => {
    await AuthService.login(req, res)
    .then((Response) => res.json(Response))
    .catch((error) => res.json(error))
}

module.exports = {register, login}