// require modules
const express = require('express');
const app = express();

// configure express app
app.set('view engine', 'ejs');


// port for listener
const port = 3000;

const user = "jmoney";

// setup a route that resonds to requests to the root route
// 'http://localhost:3000'
app.get('/', function(req, res) {
    res.render('index', {user});
});
//add listener
app.listen(port, () => {
    console.log(`Express is listening on port ${port}`);
});

