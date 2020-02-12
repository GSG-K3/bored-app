const express = require('express')
const path = require('path')
const bodyParser = require('body-parser');
const compression = require('compression')
const tenor = require('./controllers/tenor')
const app =express();

// disable powered by express header
app.disable('x-powered-by')

app.set('port',3000)

app.use(compression())


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use(express.static(path.join(__dirname,'..','public')))


app.get('/tenor', tenor.getTenor)
app.post('/tenor', tenor.postTenor)




app.listen(app.get('port'), ()=> {
    console.log('app is running', app.get('port'))
})
