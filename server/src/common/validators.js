const bcrypt = require('bcrypt')

const hashPassword = async (password) => {
    const hashPassword = bcrypt.hash(password, 10)
    return hashPassword
}

const comparePassword = async (password, newPassword) => {
    const decodedPassword = bcrypt.compare(newPassword, password)
    return decodedPassword
}

module.exports = {hashPassword, comparePassword}