const config = require('../knexfile').development
const database = require('knex')(config)

function getAllSpells(db = database) {
	
}

function close(db = database) {
	
}

function getSpeellById(id, db = database) {

}

function addNewSpell(spell, db = database) {
	
}

function deleteSpell(id, db = database) {

}

module.exports = {
	getWombles,
	getWombleById,
	addNewWomble,
	deleteWomble,
	close
}
