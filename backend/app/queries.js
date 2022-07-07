const { query } = require('express');
const { append } = require('express/lib/response');
const res = require('express/lib/response');

const Pool = require('pg').Pool                                                 // `declaring the Pool function from a postgress method
const pool = new Pool({                                                         //initializing all the pool to our own var pool and initializing its database extracts
    user: 'dam142',                                                              //init user to admin
    host: 'localhost',                                                          //
    database: 'moviedb',                                                        //
    password: '0000',                                                           //
    port:5432                                                                   //
});

const getMovie = (req,res) =>{                                                   //function for getting all users from the database
    pool.query('SELECT * From movies', (error, results)=> {                         //query for fetching all users and sorting them in ascending order
        if (error){                                                                 //checkin for error 
            throw error                                                             //throwing the error
        }
        res.set('Access-Control-Allow-Origin', 'http://localhost:4200');
        res.status(200).json(results.rows)                                          //fetching the results if the connection to database is succefull
    })
};

const getMovieByYear = (req,res)=>{                                                // function for getting a single user by his/er id
    const release_date = pool(req.params.release_date)                                          // creatign the var id and parsing it as an int for ech request as a pramaterized id 
    pool.query('SELECT * FROM movies WHERE release_date = $8',[release_date],(error,results) => {    // the query for fetching each Id
        if (error){                                                             //checkin for error 
            throw error                                                         //throwing the error
        }
        res.set('Access-Control-Allow-Origin', 'http://localhost:4200');
        res.status(200).json(results.rows)                                    //fetching the results if the connection to database is succefull
    })
};
const createMovie = (req,res) => {
    const {backdrop_path , genre_ids , original_language , original_title , overview , popularity , poster_path , 
        release_date , title , video , vote_average,vote_count} = req.body;
    pool.query ('INSERT INTO movies (backdrop_path , genre_ids , original_language , original_title , overview , popularity , poster_path , release_date , title , video , vote_average,vote_count) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12) ',[backdrop_path , genre_ids , original_language , original_title , overview , popularity , poster_path , release_date , title , video , vote_average,vote_count],(error,results)=>{
        if(error){
            throw error
        }
        res.status(201).send(`user added with ID :${results.rows[last]}`);
        
    });
};

// const updateUser = (req,res) => {
//     const id = parseInt(req.params.id)
//     const {name,email} = req.body;                                              //Define or initialize the values
//     pool.query ('UPDATE users SET name = $1,email = $2 WHERE id = $3',[name,email,id],(error,results)=>{
//             if(error){
//                 throw error
//             }
//             res.status(200).send(`user modified with ID :${results.rows[0].id}`);    
//     });    
// }; 

// const deleteUser = (req,res)=>{                                                // function for getting a single user by his/er id
//     const id = parseInt(req.params.id)                                          // creatign the var id and parsing it as an int for ech request as a pramaterized id 
//     pool.query('DELETE FROM users WHERE id = $1',[id],(error,results) => {    // the query for fetching each Id
//         if (error){                                                             //checkin for error 
//             throw error                                                         //throwing the error
//         }
//         res.status(200).send(`Users deleted with ID: ${id}`)                    //fetching the results if the connection to database is succefull
//     })
// };
module.exports = {
    getMovie,
    getMovieByYear,
    createMovie
    // deleteUser,
    // updateUser
}