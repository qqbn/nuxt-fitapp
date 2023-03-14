const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
var bodyParser = require('body-parser');
require('dotenv').config();

const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.PORT,
})

const app = express()
const port = 5500
app.use(cors())

// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.get('/settings', (req, res) => {
    let sql = "SELECT * FROM SETTINGS"
    let queryRes = connection.query(sql, (err, results)=>{
        if(err) throw err;
        res.send(results[0]); 
    })
});

app.post('/settings', (req,res)=>{
    const data = req.body;
    let sql = `UPDATE settings SET kcal=${data.settings.calories}, fat=${data.settings.fat}, sugar=${data.settings.sugar}, carbs=${data.settings.carbs}, protein=${data.settings.protein}`
    let queryRes = connection.query(sql, (err,results)=>{
        if(err) throw err;
        res.send(data)
    })
})

app.post('/add-meal', (req,res)=>{
    const data = req.body;
    console.log(data);
    let sql = `INSERT INTO meal (Meal_name) VALUES ('${data.meal.name}')`
    let queryRes = connection.query(sql, (err,results) => {
        if(err) throw err;
        res.send(data);
    })
})

app.listen(port, ()=> {
    console.log('Server started')
})


connection.connect(function(error){
    if(error){
        throw error;
    }else{
        console.log('Connected to db');
    }
});
