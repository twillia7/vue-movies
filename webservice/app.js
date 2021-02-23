const express = require('express')
const bodyParser = require('body-parser')
const moviesRoutes = require('./routes/movies-routes')

const app = express()

app.use('/movies', moviesRoutes)

app.listen(5000)