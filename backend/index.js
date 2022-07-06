const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const cors=require('cors');

const port = 3000; 
const db = require('../backend/app/queries');

app.use(cors())
app.use(bodyparser.json());
app.use(
    bodyparser.urlencoded({
        extended: true,
    })
)

app.get('/', (req,res)=> {
    res.json({info: 'Node.js,Express, and Postgres API'})
})

app.get('/movies',db.getMovie);
// app.get('/movies/:id',db.getMovieById);
app.post('/movies',db.createMovie);
// app.put('/movies/:id',db.updateMovie);
// app.delete('/movies/:id',db.deleteMovie);

app.listen(port, ()=>{ 
console.log(`App running on Port ${port}`)
});

