const express = require('express')
const port = 3001

const app = express();

const index = require('./routes/index')
const host = require('./routes/host')
const lodge = require('./routes/lodge')

app.use('/', index) // homepage with all the lodges to rent + search bar
app.use('/host', host) // page to allow a user to add, update and remove lodges
app.use('/lodge', lodge) // page to see details on a particular lodge

app.listen (port, () => console.log(`Server listening on port ${port}`))