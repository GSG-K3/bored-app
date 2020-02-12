const notFound = (req, res) => {
    res.status(404).send("404 Page Not Found")
};

const severError = (error, req, res, next)=> {
    res.status(500).send("Server Error")
}


module.exports = {notFound, severError}