const express = require('express');
require('dotenv').config();

const app = express()
const port = 4064

app.get('/', (req, res) => {
    res.send('hello adil, i am listening now');
})
app.get('/twitter', (req, res) => {
    res.send('hello user, adildotcom');
})
app.get('/login', (req, res) => {
    res.send('<h1>log in to chai aur code here</h1>')
})
app.get('/youtube', (req, res) => {
    res.send('<h2>chai aur code </h2>')
})


app.listen(process.env.PORT, () => {
    console.log(`example app listening on port ${process.env.PORT}`)
})