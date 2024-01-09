const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcrypt'); // Import bcrypt for password encryption
const jwt = require('jsonwebtoken'); // Import jsonwebtoken for generating tokens

// Route for user signup
router.post('/signup', (req, res) => {
    // Hash the user's password for security (with a salt round of 10)
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            // Create a new user with the provided username and hashed password
            const user = new User({
                username: req.body.username,
                password: hash,
                name: req.body.name,
                surname: req.body.surname,
                email: req.body.email
            });

            // Save the user to the database
            user.save()
                .then(result => {
                    res.status(201).json({
                        message: 'User created',
                        user: user
                    });
                })
                .catch(err => {
                    res.status(500).json({
                        error: err
                    });
                });
        });
});

// Route for user login
router.post('/login', (req, res) => {
    let fetchedUser;

    // Find a user in the database with the provided username
    User.findOne({ username: req.body.username })
        .then(user => {
            if (!user) {
                return res.status(401).json({
                    message: "Authentication failure: User not found. Sign Up"
                });
            }

            fetchedUser = user;

            // Compare the provided password with the hashed password in the database
            bcrypt.compare(req.body.password, user.password)
                .then(result => {
                    if (!result) {
                        return res.status(404).json({
                            message: "Authentication failure: Username/Password mismatch"
                        });
                    }

                    // Generate a JSON Web Token (JWT) for the user's authentication
                    const token = jwt.sign(
                        { username: fetchedUser.username, userid: fetchedUser._id },
                        'secret_this_should_be_no_longer_than_it_is',
                        { expiresIn: '1h' }
                    );

                    res.status(200).json({ token: token });
                })
        })
        .catch(err => {
            return res.status(401).json({
                message: "Authentication Failure",
                err: err
            });
        });
});

module.exports = router;
