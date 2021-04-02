const express = require('express')
const router = require('./routes/routes')
const server = express()
const hbs = require('express-handlebars')

server.use(express.static('public'))

server.use(express.urlencoded({ extended: true }))
server.engine('hbs', hbs({ extname: 'hbs' }))
server.set('view engine', 'hbs')

server.use(router)

module.exports = server
