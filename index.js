const express = require('express');

const app = express();
const knex = require('./db/db')
const bodyParser = require('body-parser');
// app.use(express.json())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 

app.use('/api',require('./routes/router'))


app.listen(3000, () => console.log('server started'))