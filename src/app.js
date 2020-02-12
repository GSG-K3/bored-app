const error  = require('./controllers/error')
const giphy = require('./controllers/giphy')
const bodyParser = require('body-parser')
const request = require('request')
const express = require('express')
const path = require('path')
const compression = require('compression')
const tenor = require('./controllers/tenor')
const app =express();

// disable powered by express header
app.disable('x-powered-by')

app.set('port',3000)

app.use(compression())


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname,'..','public'), { maxAge: '30d' }));


app.get('/giphy', giphy.getGiphy)
app.post('/giphy/:type', giphy.postGiphy)

app.get('/tenor', tenor.getTenor)
app.post('/tenor', tenor.postTenor)


// app.use(error.notFound)
// app.use(error.severError);


app.listen(app.get('port'), ()=> {
    console.log('app is running', app.get('port'))
})
