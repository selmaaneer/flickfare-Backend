const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose');

const cors = require('cors');
const Movie = require('./models/movie');
const Person = require('./models/person')
const Language = require('./models/language')
const app = express()
const port = 3000

const movieRoutes = require('./routes/movieRoutes')
const personRoutes =require('./routes/personRoutes')
const languageRoutes = require('./routes/languageRoutes')
const castRoutes = require('./routes/castRoutes')
const theatreRoutes = require('./routes/theatreRoutes')
const screenRoutes = require('./routes/screenRoutes')
const showRoutes = require('./routes/showRoutes')
const bookingRoutes = require('./routes/bookingRoutes')
const userRoutes = require('./routes/userRoutes')

const corsConfig = {
  origin: "*", 
  credentials: true ,
  methods: ["GET", "POST", "PUT", "DELETE"],

};

app.options("", cors(corsConfig));

app.use(cors(corsConfig));


app.use(express.json())

app.get("/", (req, res) => {
  res.json("hello");
})

app.use('/movies', movieRoutes)
app.use('/persons', personRoutes)
app.use('/languages', languageRoutes)
app.use('/casts',castRoutes)
app.use('/theatres',theatreRoutes)
app.use('/screens',screenRoutes)
app.use('/shows',showRoutes)
app.use('/bookings',bookingRoutes)
app.use('/users',userRoutes)

main().then(()=>console.log("db connected")).catch(err => console.log(err));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

async function main() {
   
  const databaseUrl = process.env.DATABASE_URL
  const urlWithPassword = databaseUrl.replace('<password>',process.env.DB_PASSWORD) 

  await mongoose.connect(urlWithPassword);
  
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  }
