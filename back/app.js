const express = require('express')
require('./config/connexion.js');

const port = 3001

const app = express();

app.get('/', (req, res) =>{

})

app.post('/host/add-lodge', (req, res) =>{


    res.status(201).send('correctly created')
})

app.put('/host/update-lodge/:id', (req, res) =>{


    res.status(200).send('correctly updated')
})

app.delete('/host/delete-lodge/:id', (req, res) =>{

    
    res.send('correctly deleted')
})

// const index = require('./routes/index')
// const host = require('./routes/host')
// const lodge = require('./routes/lodge')

// app.use('/', index) // homepage with all the lodges to rent + search bar
// app.use('/host', host) // page to allow a user to add, update and remove lodges
// app.use('/lodge', lodge) // page to see details on a particular lodge

app.listen (port, () => console.log(`Server listening on port ${port}`))