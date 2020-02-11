const express = require('express')
const request = require('request')

const giphySearch = app.get('/giphy', (req,res, next) => {
    request.get(`http://www.boredapi.com/api/activity?type=${type}`, function (error, response, body) {
        const randomActivity = JSON.parse(body).activity;
        request.get(`http://api.giphy.com/v1/gifs/search?q=${randomActivity}&limit=3&api_key=PjePAILYBVdogMvZdg6PaRPNAQoLmbIX`, (error,response2,body2)=>{
            const giphy =JSON.parse(body2).data[0].embed_url;
        })
}); });


module.exports = gipyhSearch;