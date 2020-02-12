const path = require('path');
const request = require('request')

let img = document.createElement('img');
const gifs = document.getElementById('gifs')

const getGiphy = (req, res) =>{
   
    res.sendFile(path.join(__dirname, '..', '..', 'public', 'giphy.html'))
}

const postGiphy = (req,res) => {
const type = req.body.type;
console.log(type);
request.get(`http://www.boredapi.com/api/activity?type=${type}`, function (error, response, body) {
    const randomActivity = JSON.parse(body).activity;
    console.log(randomActivity)   
    request.get(`http://api.giphy.com/v1/gifs/search?q=${randomActivity}&limit=3&api_key=PjePAILYBVdogMvZdg6PaRPNAQoLmbIX`, function (error, response, body2) {
        
        const gifUrl =JSON.parse(body2).data[0].embed_url;
        console.log(gifUrl)
})
res.redirect('/giphy') 

})
}
module.exports = {getGiphy , postGiphy};