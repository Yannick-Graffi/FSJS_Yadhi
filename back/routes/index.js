const express = require('express')

const Router = express.Router();

const lodgesToRent = [];

// Display all the lodges to rent

Router.get('/', (req, res) =>{
    res.send(lodgesToRent)
})