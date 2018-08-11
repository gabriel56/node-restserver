const express = require('express')

const app = express()

app.get('/usuario', function (req, res) {
    
    res.json('get usuario local!')
})
 
app.post('/usuario', function (req, res) {
    
    let body = req.body;
    
    res.json({
       persona: body
    });
  });

  app.put('/usuario/:id', function (req, res) {
    let id = req.params.id;
    
    res.json({
        id
    });
  })

  app.delete('/', function (req, res) {
    res.json('Hello World')
  })


  module.exports = app;