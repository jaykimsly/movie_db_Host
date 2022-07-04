const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const port = 3000; 
const db = require('../backend/app/queries');

app.use(bodyparser.json());
app.use(
    bodyparser.urlencoded({
        extended: true,
    })
)

app.get('/', (req,res)=> {
    res.json({info: 'Node.js,Express, and Postgres API'})
})

app.get('/users',db.getUser);
// app.get('/users/:id',db.getUserById);
app.post('/users',db.createUser);
// app.put('/users/:id',db.updateUser);
// app.delete('/users/:id',db.deleteUser);

app.listen(port, ()=>{ 
console.log(`App running on Port ${port}`)
});

