const express = require('express');
const router = express.Router();
const Post = require('../models/post'); // Import the Post model
const checkauth = require('./check-auth'); // Import the authentication middleware. Save and delete are protected via authentication.

// Define routes for handling posts

// GET route for retrieving posts
router.get('', checkauth, (req, res) => {
    // Find and retrieve posts from the database
    Post.find().then((posts) => {
        // Respond with a JSON object containing the found posts
        res.json({
            message: 'Posts found',
            posts: posts
        });
    });
});

// POST route for creating a new post
router.post('', checkauth, (req, res) => {
    // Create a new Post object with data from the request body
    const newPost = new Post({
        id: req.body.id,
        author: req.body.author, // Use the 'author' property
        postTitle: req.body.postTitle, // Include 'postTitle'
        description: req.body.description, // Include 'description'
    });

    // Save the new post to the database
    newPost.save()
        .then(savedPost => {
            // Respond with a success message and the created post
            res.status(201).json({
                message: 'Post created',
                post: savedPost // Use the saved post object in the response
            });
        })
        .catch(error => {
            // Handle and log any errors during the save operation
            console.error(error);
            res.status(500).json({ error: 'An error occurred while saving the post.' });
        });
});

// DELETE route for deleting a post by its ID
router.delete('/:id', checkauth, (req, res) => {
    // Delete a post based on the provided ID
    Post.deleteOne({ _id: req.params.id })
        .then((result) => {
            if (result.deletedCount === 1) {
                // Respond with a success message when the post is deleted
                res.status(200).json({ message: "Post Deleted" });
            } else {
                // Respond with a message indicating that the post was not found
                res.status(404).json({ message: "Post not found" });
            }
        })
        .catch(error => {
            // Handle and log any errors during the delete operation
            console.error(error);
            res.status(500).json({ error: 'An error occurred while deleting the post.' });
        });
});

module.exports = router; // Export the router for use in the application
