const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'fitapp_db'
})
const app = express()
const port = 5500
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.get('/test', (req, res) => {
    let sql = "SELECT * FROM SETTINGS"
    let queryRes = connection.query(sql, (err, results)=>{
        if(err) throw err;
        res.send(results[0]); 
    })
});

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
