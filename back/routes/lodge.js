const express = require('express')
const router = express.Router();
const Lodge = require('../models/Lodge')


router.get('/', async (req, res) =>{
    const result = await Lodge.find()

    res.status(200).send(result)
})

router.get('/:id', async (req, res) =>{
    const result = await Lodge.findById(req.params.id)    
    res.status(200).send(`Correctly found one lodge ${result}`)
})

router.post('/add-lodge', async (req, res) =>{
    const {title, description, price}= req.body
    const lodge = new Lodge({
            title,
            description,
            price,
        })

    await lodge.save()  
      
    res.status(201).send(`correctly created ${lodge}`)
})

router.put('/update-lodge/:id', (req, res) =>{
    const id = req.params.id


})

router.delete('/delete-lodge/:id', async (req, res) =>{
    const id = req.params.id

    await Lodge.findByIdAndDelete(id)

    res.send(`logement correctement supprimé`)
})



module.exports = router