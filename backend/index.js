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

app.get('/settings/:date', (req, res) => {
    const date = req.params['date'];
    let sql = `SELECT * FROM SETTINGS;SELECT meal_calories FROM MEAL_DETAILS where added_date='${date}'`
    let queryRes = connection.query(sql, [0,1], (err, results)=>{
        if(err) throw err;
        const settingsObj = results[0][0];
        let dailyCalories=0;

        results[1].forEach(element=>{
            dailyCalories += element.meal_calories
        });

        res.send([settingsObj, dailyCalories]); 
    })
});

app.get('/mealslist/:date', (req,res)=>{
    let returnArr = [];
    let dailyStandings= {
        kcal: 0,
        fat: 0,
        sugar: 0,
        carbs: 0,
        protein: 0,
    };

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

        results[1].forEach(element => {
            dailyStandings.kcal+=element.meal_calories;
            dailyStandings.fat+=element.meal_fat;
            dailyStandings.sugar+=element.meal_sugar;
            dailyStandings.carbs+=element.meal_carbs;
            dailyStandings.protein+=element.meal_protein;
        });

        res.send([returnArr, dailyStandings]);
    })
});


app.post('/settings', (req,res)=>{
    const data = req.body;
    let sql = `UPDATE SETTINGS SET kcal=${data.settings.calories}, fat=${data.settings.fat}, sugar=${data.settings.sugar}, carbs=${data.settings.carbs}, protein=${data.settings.protein}`
    let queryRes = connection.query(sql, (err,results)=>{
        if(err) throw err;
        res.send(200)
    })
})

app.post('/add-meal', (req,res)=>{
    const data = req.body;
    let sql = `INSERT INTO meal_details (id, meal_id, meal_name, meal_calories, meal_fat, meal_sugar, meal_carbs, meal_protein, added_date) VALUES ('','${data.meal.meal_id}', '${data.meal.meal_name}', '${data.meal.meal_calories}', '${data.meal.meal_fat}', '${data.meal.meal_sugar}', '${data.meal.meal_carbs}', '${data.meal.meal_protein}', '${data.meal.date}')`
    let queryRes = connection.query(sql, (err,results) => {
        if(err) throw err;
        res.send([results.insertId]);
    })
})

app.post('/deletemeal/:id', (req,res)=>{
    const id = req.params['id'];
    let sql = `DELETE FROM meal_details WHERE id='${id}'`
    let queryRes = connection.query(sql, (err,results) => {
        if(err) throw err;
        res.send(200);
    })
})

app.post('/edit-meal/:id/:date', (req,res)=>{
    let dailyStandings= {
        kcal: 0,
        fat: 0,
        sugar: 0,
        carbs: 0,
        protein: 0,
    };
    const id = req.params['id'];
    const date = req.params['date'];
    const data = req.body;
    let sql = `UPDATE meal_details SET meal_name='${data.meal.meal_name}', meal_calories='${data.meal.meal_calories}', meal_fat='${data.meal.meal_fat}', meal_sugar='${data.meal.meal_sugar}', meal_carbs='${data.meal.meal_carbs}', meal_protein='${data.meal.meal_protein}' wHERE id='${id}';SELECT * FROM MEAL INNER JOIN MEAL_DETAILS ON MEAL.id=MEAL_DETAILS.meal_id WHERE added_date='${date}'`
    let queryRes = connection.query(sql, [0,1],(err,results) => {
        if(err) throw err;
        results[1].forEach(element => {
            dailyStandings.kcal+=element.meal_calories;
            dailyStandings.fat+=element.meal_fat;
            dailyStandings.sugar+=element.meal_sugar;
            dailyStandings.carbs+=element.meal_carbs;
            dailyStandings.protein+=element.meal_protein;
        });
        res.send(dailyStandings);
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
