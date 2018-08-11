require('./config/config.js');

const express = require('express');
const mongoose = require('mongoose');

const app = express();
const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.use( require('./routes/usuarios'));


  ////// Conexión a la base de Datos ///

mongoose.connect('mongodb://localhost:27017/noderest', (err, res) => {
  if (err) throw err;

  console.log('base de datos ONLINE');
});


app.listen(process.env.PORT, ()=> {
    console.log('escuchando en puerto:', process.env.PORT);
});