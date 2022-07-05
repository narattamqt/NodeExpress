const express = require("express");
const app = express()
const PORT = 3000;
const hbs = require("express-handlebars").engine
const bodyParser = require('body-parser')
const morgan = require("morgan")

// All routes comes Here
const homeRoute = require("./src/routes/homeRoute");

// const ideaRoute = require("./src/routes/ideaRoute")

// Middlewares
app.engine('handlebars', hbs());
app.set('view engine', 'handlebars');
app.set('views', './src/views');
app.use(express.static('src/public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(morgan("dev"))
app.use(bodyParser.json())
// app.use(methodOverride('_method'))

// route
app.use("/", homeRoute)



// Listner
app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}`);
})