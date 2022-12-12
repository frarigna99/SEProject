
const express = require('express')
const app = express()
const path = require('path');

app.use(express.static('public'))
const port  = 3000

// server get calls

// login
app.get('/', (req, res) => {
    res.sendFile('login.html', {root: __dirname + "/public"})
  })

// homepage
  app.get('/homepage', (req, res) => {
  res.sendFile('home.html', {root: __dirname + "/public"})
})

// panel parking
app.get('/panelparking', (req, res) => {
    res.sendFile('panelParking.html', {root: __dirname + "/public"})
  })

// school parking
app.get('/panelschool', (req, res) => {
    res.sendFile('panelschool.html', {root: __dirname + "/public"})
  })

// wallet
app.get('/wallet', (req, res) => {
  res.sendFile('wallet.html', {root: __dirname + "/public"})
})

// consumed energy
app.get('/cons', (req, res) => {
  res.sendFile('cons.html', {root: __dirname + "/public"})
})

//cost of energy
app.get('/costofe', (req, res) => {
  res.sendFile('costofe.html', {root: __dirname + "/public"})
})

// error 
app.all('*', (req, res) => {
    res.sendFile('error.html', {root: __dirname + "/public"})
})

//server listening on port 3000
app.listen(port)
