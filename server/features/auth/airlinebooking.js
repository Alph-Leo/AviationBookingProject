const mongoose = require('mongoose');
const Ticket = require('./ticket');
const Schema =  mongoose.Schema


const airlineBookingSchema = new Schema({
    id: {
        type: String
    },
    passengerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    ticketId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Ticket
    },
    description: {
        type: String
    }
}, {timestamps: true})

airlineBookingSchema.pre('save', async function (next){
    try{
        if(this._id){
            this._id = new mongoose.Types.ObjectId().toString();
        }
        
        if(!this.isModified('Passenager')){
            return next();
        }
        return next();
    } catch (error){
        return next(error);
    }
});

const AirlineBooking = mongoose.model('AirlineBooking', airlineBookingSchema)

module.exports = AirlineBooking