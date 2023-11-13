require('dotenv').config()
const mongoose = require('mongoose')
const express = require('express') 
const workoutRoutes = require('./routes/workoutRoute')
const userRoute = require('./routes/userRoute')
const app = express()


// midlleware 
app.use(express.json())

// routes 
app.use('/api/workouts',workoutRoutes)
app.use('/api/user',userRoute)

// conect to db before starting the server

mongoose.connect(process.env.MONGO_URI).then(()=> {
const port = process.env.PORT;

    app.listen(port,()=> {
        console.log('connect to db & listening on port :' ,port )
    })

})
.catch((error)=> {
    console.log(error)
})
