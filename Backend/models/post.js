// Import the Mongoose library
const mongoose = require('mongoose')

// Define a Mongoose schema for a "Post" object
const postschema = mongoose.Schema({
    // Property to store the ID of the post (string, required)
    id: { type: String, required: true },
    
    // Property to store the author of the post (string, required)
    author: { type: String, required: true },

    // Property to store the title of the post (string, required)
    postTitle: { type: String, required: true },

    // Property to store the description of the post (string, required)
    description: { type: String, required: true }
})

// Export the Mongoose model for the "Post" schema
module.exports = mongoose.model('post', postschema)
