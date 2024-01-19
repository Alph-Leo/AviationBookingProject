const { default: mongoose } = require("mongoose")


const Connectdb = async (url) => {
    return await mongoose.connect(url, {
        useNewRrlParser: true,
        useUnifiedTopology: true
    })
}

module.exports = Connectdb