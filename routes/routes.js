const express = require('express')
const router = express.Router()
const db = require('../utils/db')

router.get('/', (req, res) => {
  return db.getAllSpells()
    .then(spells => {
      res.render('home', spells)
    })
    .catch(err => {
      console.log(err)
    })
    .finally(() => {
      db.close()
    })
})

router.get('/spell/:id', (req, res) => {
  const id = Number(req.params.id)
  db.getSpellById(id)
    .then(spell => {
      res.render('../views/spellsTemplate', spell)
    })
    .catch(err => {
      console.log(err)
    })
})

router.post('/addNewSpell', (req, res) => {
  res.render('newSpell')
})

router.post('/delete/:id', (req, res) => {
  const id = Number(req.params.id)
  db.deleteSpell(id)
    .then(() => {
      res.send('Successfully deleted!')
    })
    .catch(err => {
      console.log(err)
    })
})

module.exports = router
