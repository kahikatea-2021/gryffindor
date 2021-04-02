const config = require('../knexfile').development
const database = require('knex')(config)

function getAllSpells (db = database) {
  return db('spells').select()
}

function close (db = database) {
  db.destroy()
}

function getSpellById (id, db = database) {
  return db('spells')
    .where('spells.id', id).first()
}

function addNewSpell (newSpell, db = database) {
  return db('spells')
    .insert({
      name: newSpell.name,
      description: newSpell.description,
      img: newSpell.img
    })
    .then(result => {
      console.log('result: ', result)
      return db('spells')
    })
}

function deleteSpell (id, db = database) {
  return db('spells')
    .where({ id: id }).del()
}

module.exports = {
  getAllSpells,
  getSpellById,
  addNewSpell,
  deleteSpell,
  close
}
