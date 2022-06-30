const mongoose = require('mongoose')

const url = 'mongodb+srv://YGraffi:2RCwMHygGHUbYi4@cluster0.bjrbapv.mongodb.net/Yahdi'

function toConnect() {
    try{
        mongoose.connect(url)
        console.log('Connected to my DB on Atlas');
    } catch (err) {
        console.error(err.message);
    }
    
}