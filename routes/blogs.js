const router = require('express').Router();

const blogCtrl = require('../controllers/blogs');

router.get('/', blogCtrl.index);


module.exports = router;
