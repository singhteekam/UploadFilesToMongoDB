const express= require('express');
var app= express();
require('dotenv').config();
var bodyParser= require('body-parser');
const connectDB= require('./config/db');
const dotenv= require('dotenv');


dotenv.config({path: '.env'});
connectDB();



app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));



app.use('/', require('./routes/server'));

let port = process.env.PORT || 1256;

app.listen(port,()=>{
    console.log("Server is started");
});




