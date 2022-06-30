const express = require('express')

const Router = express.Router();

const lodgesToRent = [];

Router.post('/add-lodge',(req, res) => {




    res.status(201).send('Logement correctement ajouté à la liste')
})

Router.put('/update-lodge/:id', (req, res) =>{
    const id = req.params.id

})

Router.delete('delete-lodge/:id', (req, res) =>{
    const id = req.params.id


    res.send('logement correctement supprimé')
})