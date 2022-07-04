const express = require("express");
const app = express();


//const bodyParser = require('body-parser');

app.use(express.json());                                //to get json
app.use(express.urlencoded({extended:false}));        //to get form data


//declaration of poert use 3000 upwards

const port = 3000;

//const router =express.Router();

//creating an end point for get
const viewMovie = require("./app/routers/viewMovie");
app.use('/main',viewMovie);
const sendMovie = require("./app/routers/sendMovie");
app.use('/main',sendMovie);

//server
app.listen(port,(err)=>{
if (err){
    console.log("server not running ");}
else
{
    console.log("server is running at port ", port);
}
})
