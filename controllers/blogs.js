const Blog = require('../models/blog')


module.exports = {
    index,
}

function index(req, res) {
    const blogs = Blog.getAll();
    res.render('index', {blogs})
}
