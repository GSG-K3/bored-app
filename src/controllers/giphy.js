const path = require('path');
const request = require('request')


const getGiphy = (req, res) =>{
   
    res.sendFile(path.join(__dirname, '..', '..', 'public', 'giphy.html'))
}

const postGiphy = (req,res) => {
const type = req.params.type;
let gifUrl;

request.get(`http://www.boredapi.com/api/activity?type=${type}`, function (error, response, body) {
    const randomActivity = JSON.parse(body).activity;

    request.get(`http://api.giphy.com/v1/gifs/search?q=${randomActivity}&limit=3&api_key=PjePAILYBVdogMvZdg6PaRPNAQoLmbIX`, function (error, response, body) {
        const  body2 =   JSON.parse(body)
        gifUrl =body2.data[0].id;
        console.log(gifUrl)
        res.send({gifurls: gifUrl})
})
})
}
module.exports = {getGiphy , postGiphy};