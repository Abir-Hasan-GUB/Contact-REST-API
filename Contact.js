const {Schema, model} = require("mongoose");

const ContactSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: true,
        minlength: 4
    },
    phone: {
        type: String,
        trim: true,
        unique: true,
        required: true,
        minlength: 11,
        maxlength: 11
    },
    email: {
        type: String,
        unique: true,
        minlength: 5,
        trim: true,
        required: true
    }
},{
    timestamps: true
}) 
const Contact = model('ContactCollection', ContactSchema)
module.exports = Contact