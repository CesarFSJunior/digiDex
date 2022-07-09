const express = require('express')
const app = express()
const PORT = 8081
const path = require("path")
const { engine } = require("express-handlebars")
const bodyParser = require('body-parser')
const axios = require('axios').default;



// BodyParser

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// Handlebars

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

// Static

app.use(express.static(path.join(__dirname,"public")))



app.get("/", (req, res) => {
    axios.get("https://digimon-api.vercel.app/api/digimon")
        .then(data => {
            res.render("index", {digimon: data.data})
    })
})

app.get("/fresh", (req, res) => {
    axios.get("https://digimon-api.vercel.app/api/digimon/level/fresh")
        .then(data => {
            res.render("index", {digimon: data.data})
    })
})

app.get("/inTraining", (req, res) => {
    axios.get("https://digimon-api.vercel.app/api/digimon/level/intraining")
        .then(data => {
            res.render("index", {digimon: data.data})
    })
})

app.get("/Training", (req, res) => {
    axios.get("https://digimon-api.vercel.app/api/digimon/level/training")
        .then(data => {
            res.render("index", {digimon: data.data})
    })
})

app.get("/Rookie", (req, res) => {
    axios.get("https://digimon-api.vercel.app/api/digimon/level/rookie")
        .then(data => {
            res.render("index", {digimon: data.data})
    })
})

app.get("/Champion", (req, res) => {
    axios.get("https://digimon-api.vercel.app/api/digimon/level/champion")
        .then(data => {
            res.render("index", {digimon: data.data})
    })
})

app.get("/Ultimate", (req, res) => {
    axios.get("https://digimon-api.vercel.app/api/digimon/level/ultimate")
        .then(data => {
            res.render("index", {digimon: data.data})
    })
})

app.get("/Mega", (req, res) => {
    axios.get("https://digimon-api.vercel.app/api/digimon/level/mega")
        .then(data => {
            res.render("index", {digimon: data.data})
    })
})

app.get('/Favoritos', (req, res) => {
    res.render("favourite")
})

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})