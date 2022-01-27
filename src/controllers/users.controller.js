
const User = require('../models/user');
const jwt = require('jsonwebtoken');


async function create(req, res) {

    const user = new User(req.body);
    try {
        const savedUser = await user.save();
        res.status(201).send(savedUser);
    } catch (err) {
        res.status(400).json({ message: 'One of the parameters is incorrect!' });
    }
};

async function login(req, res) {
    const { username, password } = req.body;
    if (!username || !password) {
        res.status(403).send('missing username and/or password');
        return;
    }
    const userExists = await User.findOne({ username, password });
    if (!userExists) {
        res.status(403).send('user does not exist');
        return;
    }
    const token = jwt.sign({ id: userExists._id }, 'user');
    console.log(token);
    res.json({ token })
}

async function me(req, res) {
    try {
        const user = await User.findById(req.userId);
        if (!user) {
            res.sendStatus(401);
            return;
        }
        res.send(user);
    } catch (err) {
        res.sendStatus(500);
    }
}

module.exports = {
    create,
    login,
    me
}