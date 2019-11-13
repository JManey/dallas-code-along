// require modules
const express = require('express');
const app = express();

// port for listener
const port = 3000;

//add listener
app.listen(port, () => {
    console.log(`Express is listening on port ${port}`);
});