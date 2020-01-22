const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const app            = express();

const port = 3000

app.use(bodyParser.urlencoded({ extended: true}))

require('./routes/routes')(app, {})

app.listen(port, ()=>{
    console.log('Listenting to port: ' + port)
})


