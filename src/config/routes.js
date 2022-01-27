const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users.controller');
const postsController = require('../controllers/posts.controllers')
const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    const token = req.headers['authorization'];
    console.log(token);
    try {
        const user = jwt.verify(token, 'user');
        req.userId = user.id;
        next();  
    } catch (err) {
        res.status(403).send('Bad!')
    }
}
router.get('/user/me', auth, usersController.me);
router.post('/post', postsController.create);
router.post('/user', usersController.create);
router.post('/login', usersController.login)
router.get('/health', (req, res) => {
    res.sendStatus(200)
});



module.exports = router;