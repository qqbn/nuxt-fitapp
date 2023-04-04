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
    multipleStatements: true,
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
        res.send(results); 
    })
});

app.get('/mealslist/:date', (req,res)=>{
    let returnArr = [];
    const date = req.params['date'];
    let sql = `SELECT * FROM MEAL; SELECT * FROM MEAL INNER JOIN MEAL_DETAILS ON MEAL.id=MEAL_DETAILS.meal_id WHERE added_date='${date}'`
    let queryRes = connection.query(sql, [1,2] ,(err,results)=>{
        if(err) throw err;
        for(i=0; i<results[0].length; i++){
            const obj = {
                mealName: results[0][i].meal_name,
                id: results[0][i].id,
                data: results[1].filter(id => id.meal_id === results[0][i].id),
            }

            returnArr.push(obj);
        }

        res.send(returnArr);
    })
});


app.post('/settings', (req,res)=>{
    const data = req.body;
    let sql = `UPDATE SETTINGS SET kcal=${data.settings.calories}, fat=${data.settings.fat}, sugar=${data.settings.sugar}, carbs=${data.settings.carbs}, protein=${data.settings.protein}`
    let queryRes = connection.query(sql, (err,results)=>{
        if(err) throw err;
        res.send(data)
    })
})

app.post('/add-meal', (req,res)=>{
    const data = req.body;
    let sql = `INSERT INTO meal_details (id, meal_id, meal_name, meal_calories, meal_fat, meal_sugar, meal_carbs, meal_protein, added_date) VALUES ('','${data.meal.meal_id}', '${data.meal.name}', '${data.meal.calories}', '${data.meal.fat}', '${data.meal.sugar}', '${data.meal.carbohydrate}', '${data.meal.protein}', '${data.meal.date}')`
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
