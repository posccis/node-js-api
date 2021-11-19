const express = require('express');
const app = express();
const path = require('path');

require('dotenv').config({path: '../.env'});




const ip = require('ip').address();
const routes = require('./routes');



const protocol = process.env.PROTOCOL || "http";
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(routes);



app.listen(port, ()=>
    console.log(
        `Server started in https://localhost:${port} or ${protocol}://${ip}:${port}`
        )
);
