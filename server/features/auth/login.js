const mongoose = require("mongoose");
const {Timestamp} = require("mongodb");
const Schema = mongoose.Schema

const loginSchema = new Schema({
        id:{
            type: String
        },
        email:{
            type: String
        },
        password:{
            type: String
        },

    }, {timestamps: true})

    loginSchema.pre('save', function(){
        if(this.id === null){
            this.id = mongoose.Schema.Types.ObjectId().toString();
        }
    })
    const SignUp = mongoose.model('SignUp', loginSchema);

    module.exports = SignUp;

