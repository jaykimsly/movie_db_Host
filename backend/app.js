// Initializing modules
const express = require('express');                             //back end web application framework
const path = require('path');                                   //provides utilities for working with file and directory paths
const request = require('request');                             //make http calls

const app = express();                                          //start a new Express application and put it inside app 

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static('public'));


app.get('/', (req, res)=>{
    res.render('search');
})

app.get('/result', (req, res)=>{
   
    let query = req.query.search;

    request("https://api.themoviedb.org/3/search/movie?api_key=80a33826576591aad78e11cfbde39527d&query="+query, (error, response, body)=>{
        if(error){
            console.log(error);
        }else{
            let data = JSON.parse(body);
            res.render('result', {data: data, querySearch: query});
        }  
    })
})


const port = process.env.PORT || 3000;
app.get(port, ()=>{
    console.log(`Server started on port: ${port}`);
})


// app.get('/movies', (req, res) => {
//     res.json({
//         "statusCode": 200,
//         "statusMessage": "success"
//     })
// })

// app.listen(3000, (req, res) => {
//     console.log('express api running at port 3000')
// })