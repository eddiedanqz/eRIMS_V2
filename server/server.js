const express = require ('express');
const bp = require('body-parser')
const mysql = require ('mysql2');

//Initiate Express
const app = express();
//Initiate body parser
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

const db = require('./config/db.js');


//Test db connection
db.authenticate()
.then(()=> console.log('Database connected successfully...'))
.catch(err => console.log(`Error :+ ${err}`))

//Set Routes
const payee = require('./routes/apis/payee');
const payments = require('./routes/apis/payments');
const records = require('./routes/apis/records');
const agents = require('./routes/apis/agents');
const location = require('./routes/apis/location');
const user = require('./routes/apis/user');
const auth = require('./routes/apis/auth');


//API Endpoints for each Route
app.use('/api/payee', payee);
app.use('/api/payments', payments);
//app.use('/api/history', records);
//app.use('/api/agent', agents);
//app.use('api/location', location);
app.use('/api/user', user);
app.use('/api/auth', auth);



app.listen ('8000', ()=> {
    console.log('Server running on port 8000')
});