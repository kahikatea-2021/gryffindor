const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('home')
})

router.get('/spell/:id', (req, res) => {
  res.send('Hello from /spell/:id')
})

router.post('/addNewSpell', (req, res) => {
  res.send('Hello from /addNewSpell')
})

router.post('/delete', (req, res) => {
  res.send('Hello from /delete')
})

module.exports = router
