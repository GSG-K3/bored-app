const path = require('path');
const request = require('request')


const getGiphy = (req, res) =>{
   
    res.sendFile(path.join(__dirname, '..', '..', 'public', 'giphy.html'))
}

const postGiphy = (req,res) => {
let type = req.params.type;
let gifUrl;

request.get(`http://www.boredapi.com/api/activity?type=${type}`, function (error, response, body) {
    let randomActivity = JSON.parse(body).activity;

    request.get(`http://api.giphy.com/v1/gifs/search?q=${randomActivity}&limit=3&api_key=${process.env.GIPHY_API_KEY}`, function (error, response, body) {
        let  result =   JSON.parse(body)
        gifUrl =result.data[0].id;
        res.send({gifurls: gifUrl, activityTitle: randomActivity})
})
})
}
module.exports = {getGiphy , postGiphy};
