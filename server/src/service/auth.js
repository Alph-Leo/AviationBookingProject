const { comparePassword } = require("../common/validators");
const { NotFoundException } = require("../exceptions/NotFoundException");


async function save(request) {
    const user = await UserService.createUser(request);

    const {id, userName} = user
    const token = jwt.sign({id, userName}, 'privateKey')

    return {
        token: token,
        message: user.message
    }
}


async function login(request) {
    const {password, email} = request

    const user = await UserService.findUserByEmail(email)

    if(!user){
        throw new NotFoundException('User Not Found')
    }

    const passwordDecode = await comparePassword(password, user.data.password)
    const foundUser = await user.findOne({passwordDecode})

    if(!foundUser){
        throw new NotFoundException('invalid password')
    }

    const {id, userName} = foundUser
    const token = jwt.sign({id, userName}, privateKey)
}