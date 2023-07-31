const { Schema, default: mongoose } = require("mongoose");


const userSchema = new Schema({
    id:{
        type: String
    },
    firstName:{
        type: String
    },
    lastName:{
        type: String
    },
    email:{
        type: String,
        unique: true
    },
    phoneNumber:{
        type: String,
        unique: true
    },
    password: {
        type: String
    },
    role: {
        type: String,
        default: role.PASSENGER
    }

}, {timestamps: true})

userSchema.pre('save', function(){
    if(this.id === null){
        this.id = new mongoose.Types.ObjectId().toString()
    }
})

const User = mongoose.model('User',
userSchema);

module.exports = User;