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

const Lodges = mongoose.model('Lodges', LodgeSchema)

async function getLodge() {
    return await Lodges.find()
}

function addLodge(title, description, price) {
    return new Lodges({
        title,
        description,
        price,
    })
}

async function saveLodge(lodge) {
    return await lodge.save()    
}

module.exports = {getLodge, addLodge, saveLodge}