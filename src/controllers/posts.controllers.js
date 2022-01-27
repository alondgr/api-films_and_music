const Post = require('../models/post');

async function create(req, res) {

    const post = new Post(req.body);
    try {
        const savedPost = await post.save();
        res.status(201).send(savedPost);
    } catch (err) {
        res.status(400).json({ message: 'Error! Could not save post' });
    }
};

module.exports = {
    create
}