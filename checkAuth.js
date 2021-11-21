const jwt = require("jsonwebtoken")

module.exports = async (req, res, next) => {
    const token = req.header('x-auth-token')
    const jwtsecret = "Rumia is my number ONE!!!!"
    // CHECK IF WE EVEN HAVE A TOKEN
    if(!token){
        res.status(401).json({
            errors: [
                {
                    msg: "No token found"
                }
            ]
        })
    }

    try {
        const user = await jwt.verify(token, jwtsecret)
        req.user = user.username
        next()
    } catch (error) {
        res.status(400).json({
            errors: [
                {
                    msg: 'Invalid Token'
                }
            ]
        })
    }
}
