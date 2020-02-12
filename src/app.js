const express = require('express')
const path = require('path')
const request = require('request')
const bodyParser = require('body-parser')

const app =express();

app.set('port',3000)

app.use(express.static(path.join(__dirname,'..','public')))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.get('/tenor',(req,res) => {
    res.sendFile(path.join(__dirname,'..','public','index.html'))

})
app.post('/tenor',(req,res) => {
    res.send(req.body.activity)
    console.log("hi")
    res.redirect('index.html')
})

app.get('/tenor',(req,res,next) => {
    request.get(`http://www.boredapi.com/api/activity?type=music`,(error,response,body)=> {
        const activity = JSON.parse(body).activity;
        if(error){res.send(error)}
        else{
            res.send(activity)
        }
    })
  

})


app.listen(app.get('port'), ()=> {
    console.log('app is running', app.get('port'))
})
