const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    body: {
        type: String,
        // required: true,
    },
    likes: {
        type: Array,
        default: () => 0
    },
    author: {
        type: String,
        // required: true
    },
    createdAt: {
        type: Date,
        default: () => new Date()
    }
});


const Post = mongoose.model('Post', postSchema);

module.exports = Post;