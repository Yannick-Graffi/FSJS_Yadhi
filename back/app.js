const express = require('express');
require('dotenv').config();
require('./config/connexion.js')()

const app = express();

app.use(express.json());

const lodge = require('./routes/lodge')

app.use('/lodge', lodge) // page to see details on a particular lodge

app.listen (process.env.PORT, () => console.log(`Server listening on port ${process.env.port}`))