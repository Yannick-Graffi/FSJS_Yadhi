const mongoose = require('mongoose')

const LodgeSchema = mongoose.Schema({
    title:{
        type: String,
        maxLength:20
    },
    description:{
        type: String,
        minLength:20,
        maxLength:400
    },
    price: Number,
    created_at: {
        type : Date,
        default: Date.now()
    },
})

const Lodge = mongoose.model('lodge', LodgeSchema)

module.exports = Lodge