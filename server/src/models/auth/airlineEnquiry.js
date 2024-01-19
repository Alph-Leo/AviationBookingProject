const { Schema, default: mongoose } = require("mongoose");


const airLineEnquirySchema = new Schema({
    id: {
        type: String
    },
    title: {
        type: String
    },
    type: {
        type: String
    },

},{timestamps: true})

airLineEnquirySchema.pre('save', function(){
    if(this.id === null){
        this.id = mongoose.Schema.Types.ObjectId().toString()
    }
})
const AirlineEnquiry = mongoose.model('AirlineEnquiry', airLineEnquirySchema)

module.exports = AirlineEnquiry;