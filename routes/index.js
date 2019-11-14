const express = require('express')
const router = express.Router()
const model = require('../models/index')

router.get('/', function(req, res) {
    res.render('index', {
        user: model.getUserName(),
        post: model.getBlogPost()
    })
});




module.exports = router;
