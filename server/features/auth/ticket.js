const { Schema, default: mongoose } = require("mongoose");


const TicketSchema = new Schema({
    id: {
        type: String
    },
    description: {
        type: String
    },
    destination: {
        type: String
    }
},{timestamps: true})

TicketSchema.pre('save', function(){
    if(this.id === null){
        this.id = mongoose.Schema.Types.ObjectId().toString()
    }
})

const Ticket = mongoose.model('Ticket', TicketSchema)

module.exports = Ticket;