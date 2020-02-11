const error  = require('error')
const gipyh = require('giphy')
const path = require('path')

const app = express();
const publicPath = path.join(__dirname,'..','public')

app.use(express.static(publicPath))

app.get('/giphy', giphy.gipyhSearch)

app.use(error.notFound)

app.use(error.severError);

app.listen(3000, ()=>{
    console.log('App running on port 3000')
})

