const router = require('express').Router();

const blogCtrl = require('../controllers/blogs');

router.get('/', blogCtrl.blogs);


module.exports = router;
