const jwt = require("jsonwebtoken");
const config = process.env;

const verifyToken = async (req, res, next) => {
    const token = req.body.token || req.query.token || req.headers["authorization"];

    if (!token) {
        return res.status(403).json({
            success: false,
            msg: 'A token is required for authentication'
        });
    }

    try {
        let bearerToken;

        if (token.startsWith('Bearer ')) {
            bearerToken = token.split(' ')[1];
        } else {
            bearerToken = token;
        }

        const decodedData = jwt.verify(bearerToken, config.ACCESS_TOKEN_SECRET);
        req.user = decodedData;
    } catch (error) {
        return res.status(401).json({
            success: false,
            msg: 'Invalid token'
        });
    }

    return next();
};

module.exports = verifyToken;