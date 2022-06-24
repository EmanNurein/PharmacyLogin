const express = require('express');
const app = express();
const db = require('./db');
// const port = 5000;
const cors = require('cors');
app.use(cors());
const MongoClient = requier('mongo').MongoClient;
const dotenv = require('dotenv');
dotenv.config()
let port = process.env.PORT || 8230;

const mongoUrl = "mongodb+srv://eman:QT8LoVUWDt0uSVFu@cluster0.bvz0d.mongodb.net/janlogin?retryWrites=true&w=majority";


const AuthController = require('./controller/authController');
app.use('/api/auth', AuthController);

app.listen(port,() => {
    console.log(`Running on port ${port}`)
})