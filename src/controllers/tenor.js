
const path = require('path');
const request = require('request')

const getTenor = (req, res) =>{
    res.sendFile(path.join(__dirname, '..', '..', 'public', 'tenor.html'))
}

const postTenor = (req,res) => {
    const activityType = req.body.type ; 

    request.get(`http://www.boredapi.com/api/activity?type=${activityType}`, (err,res, body) => {
       const activity = JSON.parse(body).activity;
       
        request.get(`https://api.tenor.com/v1/search?tag=${activity}&key=3KZ1MZUI974U`, (err,res, body) =>{
            const bodyy = JSON.parse(body);
            const imgUrl = bodyy.results[0].media[0].gif.url;
        } )
 
    })
 res.redirect('/tenor')

}

module.exports = {getTenor , postTenor};
