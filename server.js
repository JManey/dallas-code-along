// require modules
const express = require('express');
const app = express();
const indexRouter = require('./routes/index');
// configure express app
app.set('view engine', 'ejs');
app.use('/', indexRouter);

// port for listener
const port = 3000;



// setup a route that resonds to requests to the root route
// 'http://localhost:3000'

// app.get('/', function(req, res) {
//     res.render('index', {
//         user: username,
//         post: blogPost
//     })
// });

//add listener
app.listen(port, () => {
    console.log(`Express is listening on port ${port}`);
});

