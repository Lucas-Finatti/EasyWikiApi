const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(require('./router/Router'));
app.listen(3000, ()=>{
    console.log('connected')
});




 