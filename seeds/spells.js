exports.seed = knex =>
  knex('spells').del()
    .then(() =>
      knex('spells').insert([
        { name: '', description: '', img: '' },
        { name: '', description: '', img: '' },
        { name: '', description: '', img: '' },
        { name: '', description: '', img: '' },
        { name: '', description: '', img: '' },
        { name: '', description: '', img: '' },
        { name: '', description: '', img: '' },
        { name: '', description: '', img: '' },
        { name: '', description: '', img: '' },
        { name: '', description: '', img: '' },
        { name: '', description: '', img: '' },
        { name: '', description: '', img: '' },
        { name: '', description: '', img: '' },
        { name: '', description: '', img: '' },
        { name: '', description: '', img: '' }
      ]))
