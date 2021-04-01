const express = require('express')
const router = express.Router()
const db = require('../utils/db')

router.get('/', (req, res) => {
  return db.getAllSpells()
    .then(spells => {
      console.log(spells)
      return null
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
      console.log(spell)
      res.render('../views/spellsTemplate', spell)
    })
    .catch(err => {
      console.log(err)
    })
})

router.post('/addNewSpell', (req, res) => {
  res.render('newSpell')
})

router.post('/delete', (req, res) => {
  res.send('Hello from /delete')
})

module.exports = router
