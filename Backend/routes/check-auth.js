const jwt = require('jsonwebtoken');

// Middleware to verify the authentication token
module.exports = (req, res, next) => {
    try {
        // Extract the token from the request headers (commonly passed as "Bearer Token")
        const token = req.headers.authorization.split(" ")[1];

        // Verify the token using a shared secret key (in this case, 'secret_this_should_be_no_longer_than_it_is')
        jwt.verify(token, 'secret_this_should_be_no_longer_than_it_is');

        // If the token is valid, continue to the next middleware or route handler
        next();
    } catch (error) {
        // If there's an error in token verification, return a 401 Unauthorized status and an error message
        res.status(401).json({
            message: "Invalid token",
            error: error
        });
    }
}
