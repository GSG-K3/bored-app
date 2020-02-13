
const path = require('path');
const request = require('request')

const getTenor = (req, res) =>{
    res.sendFile(path.join(__dirname, '..', '..', 'public', 'tenor.html'))
}

const postTenor = (req,postRes) => {
    
    
    let activityType = req.params.type;
    let imgUrl;
    request.get(`http://www.boredapi.com/api/activity?type=${activityType}`, (err,res, body) => {
       let activity = JSON.parse(body).activity;
       
        request.get(`https://api.tenor.com/v1/search?tag=${activity}&key=3KZ1MZUI974U`, (err,res, body) =>{
            let bodyObject = JSON.parse(body);
            imgUrl  = bodyObject.results[0].media[0].gif.url;
            
            postRes.send({imgurls:imgUrl, activityTitle: activity})
          
        } )
        
    })
    
}

module.exports = {getTenor , postTenor};
