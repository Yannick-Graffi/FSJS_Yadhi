const express = require('express');
require('dotenv').config();
require('./config/connexion.js')()

const app = express();

const lodge = require('./routes/lodge')

app.use(express.json());

app.use('/lodges', lodge) // page to see details on a particular lodge

app.listen (process.env.PORT, () => console.log(`Server listening on port ${process.env.port}`))