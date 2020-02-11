const severError = app.use((error, req, res, next), ()=>{
    res.status(500).send("Server Erroor")
    next()
});

const notFound = app.use((error, req, res, next), () => {
    res.status(404).send("404 Page Not Found")
})

app.listen(3000, ()=>{
    console.log('App running on port 3000')
})

module.exports = {severError, notFound}