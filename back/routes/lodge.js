const express = require('express')
const router = express.Router();
const Lodge = require('../models/Lodge')

// Getting all the lodges to rent
router.get('/', async (req, res) =>{
    try {
        const result = await Lodge.find()
        res.status(200).send(result)        
    } catch (err) {
        console.error(err.message);        
    }
})


// Getting one particular lodge infos
router.get('/:id', async (req, res) =>{
    try {
        const result = await Lodge.findById(req.params.id)    
        res.status(200).send({message:'Correctly found one lodge', data:result})        
    } catch (err) {
        console.error(err.message);        
    }
})

// Add a new lodge
router.post('/', async (req, res) =>{
    try {
        const {title, description, price}= req.body
        const lodge = new Lodge({
                title,
                description,
                price,
            })
        await lodge.save()  
        res.status(201).send({message:'correctly created', data:lodge})        
    } catch (err) {
        console.error(err.message);
    }
})

// Update an existing lodge
router.put('/:id', async (req, res) =>{
    try {
        const id = req.params.id
        const result = await Lodge.findByIdAndUpdate(id, req.body, {
            new:true,
        })
        res.send({message:'Lodge correctly updated', data:result})            
    } catch (err) {
        console.error(err.message);
    }
})

// Remove an existing lodge
router.delete('/:id', async (req, res) =>{
    try {
        const id = req.params.id
        await Lodge.findByIdAndDelete(id)
        res.send('logement correctement supprimé')        
    } catch (err) {
        console.log(err.message);
    }
})

module.exports = router