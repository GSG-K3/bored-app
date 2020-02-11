const express = require('express')
const path = require('path')
const request = require('request')

const app =express();

app.use(express.static(path.join(__dirname,'..','public')))

app.get('/tenor',(req,res,next) => {
    request.get(`http://www.boredapi.com/api/activity?type=music`,(error,response,body)=> {
        const activity = JSON.parse(body).activity;
        if(error){res.send(error)}
        else{
            res.send(activity)
        }
    })
  

})


app.listen(3000)