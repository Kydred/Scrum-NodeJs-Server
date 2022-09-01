function authUser(req, res, next) {
if (req.auth == null) {
    res.status(403)
    return res.send('You need to sign in')
}

next()
}

function authRole() {
    return (req, res, next) => {
        console.log(req)
        // if (req.user.role !== role) {
        // res.status(401)
        // return res.send('Not allowed')
        // }

        next()
    }
}

module.exports = {
    authUser,
    authRole
}