const express = require("express");
const app = express()
const workoutsRoutes = require('./routes/workouts');
const mongoose = require('mongoose')
require('dotenv').config()

app.use(express.json())

app.use('/api/workouts',workoutsRoutes)

mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        app.listen(3000,()=>{
            console.log("server running")
        });
    })
    .catch((error)=>{
        console.log(error)
    })


