exports.seed = knex =>
  knex('spells').del()
    .then(() =>
      knex('spells').insert([
        {
          name: 'Expecto patronum',
          description: 'This spell evokes a positive energy force known as a patronus. It conjures joy, happiness, and hope, to ward off dementors! What more could you want!',
          img: 'ExpectoPatronum.jpeg'
        },
        {
          name: 'Accio',
          description: 'This spell is a summoning charm. Remote control too far away from the couch? Not to worry when you’ve got the accio charm up your sleeve!',
          img: 'accio.jpeg'
        },
        {
          name: 'Wingardium Leviosa',
          description: 'This spell levitates objects. Heavy suitcase? No problem.',
          img: 'wingardiumLeviosa.jpeg'
        },
        {
          name: 'Expelliarmus',
          description: 'This spell is a disarming charm. Quickly disarm your enemies!',
          img: 'expelliarmus.jpeg'
        },
        {
          name: 'Lumos',
          description: 'This spell makes your wand emit light. Perfect for when you need to get a drink of water in the middle of the night!',
          img: 'lumos.jpg'
        },
        {
          name: 'Alohomora',
          description: 'This spell opens locks. You’ll never have to worry about forgetting your keys again!',
          img: 'alohomora.jpeg'
        },
        {
          name: 'Glisseo',
          description: 'This spell turns a staircase into a slide. The possibilities are endless!',
          img: 'glisseo.jpg'
        },
        {
          name: 'Reparo',
          description: 'This spell repairs broken objects. No worries if you’re clumsy, or have a cheeky cat!',
          img: 'reparo.gif'
        },
        {
          name: 'Episkey',
          description: 'This spell heals minor injuries. Paper cut? No problem!',
          img: 'episkey.png'
        },
        {
          name: 'Scourgify',
          description: 'This spell cleans objects, fast! Never worry about a sink full of dishes again!',
          img: 'scourgify.jpeg'
        }
      ]))
