
exports.up = function (knex) {
	return knex.schema.createTable('spells', function (table) {
		table.increments('id').primary()
		table.string('name')
		table.string('description')
		table.string('img')
	})
};

exports.down = function (knex) {
	return knex.schema.dropTable('spells')
};
