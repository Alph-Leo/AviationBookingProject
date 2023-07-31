const mongoose = require('mongoose');
const Schema = mongoose.Schema

const signupschema = new Schema({
    id: {
        type: String
    },
    firstNane: {
        type: String
    },
    lastName:{
        type: String
    },
    email:{
        type: String,
        unique: true
    },
    password:{
        type: String
    }
}, {timestamps: true})

signupschema.pre('save', function(){
    if(this.id === null){
        this.id = mongoose.Schema.Types.ObjectId().toString()
    }
})
const Login = mongoose.model('Login', signupschema);

module.exports = Login;