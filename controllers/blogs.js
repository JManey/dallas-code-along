const Blog = require('../models/blog')


module.exports = {
    index,
}

function index(req, res) {
    Blog.find({}, function(err, blogs) {
        if(err) {
            console.log(err);
            res.redirect('/');
        }
        res.render('index', { blogs });
    });
}
