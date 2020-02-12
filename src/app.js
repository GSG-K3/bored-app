const error  = require('./controllers/error')
const giphy = require('./controllers/giphy')
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname,'..','public'), { maxAge: '30d' }));


app.get('/giphy', giphy.getGiphy)
app.post('/giphy', giphy.postGiphy)

app.use(error.notFound)

app.use(error.severError);

app.listen(3000, ()=>{
    console.log('App running on port 3000')
})
    