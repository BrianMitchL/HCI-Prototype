/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var Card = require('../api/card/card.model');


Thing.find({}).remove(function() {
  Thing.create({
    name : 'Server and Client integration',
    info : 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.'
  }, {
    name : 'Form Validation',
    info : 'Fields on the card adding page must all be correct in order to be added.'
  },  {
    name : 'Table View',
    info : 'Cards are shown in a neat and orderly way.'
  }, {
    name : 'Easy Sort',
    info : 'Sort your library of library alphabetically both ascending and descending based on several attributes of each card.'
  },  {
    name : 'Easy Search',
    info : 'Quickly search for library based on several different attributes.'
  },{
    name : 'Deck Building',
    info : 'Create decks of library and search through them.'
  });
});

//Card.find({}).remove(function() {
//  Card.create({
//    name : 'Sauce Boss',
//    description : 'Lathers opponents in delicious, distracting sauces.',
//    type : 'cook',
//    subType : 'sauces',
//    deck : 'Fun Times',
//    color: {
//      blue: true,
//      red : true,
//      black : true,
//      green : true,
//      white : true
//    },
//    colorID: {
//      blue: true,
//      red : true,
//      black : true,
//      green : true,
//      white : true
//    },
//    rules : 'Bring BBQ, be hungry, enjoy.',
//    flavor : 'BBQ',
//    power : 10,
//    toughness : 10,
//    rarity : 'moderate',
//    blockSet : '¯\\_(ツ)_/¯'
//  }, {
//    name : 'Crucial',
//    description : 'Throws SSDs at opponents.',
//    type : 'projectile',
//    deck : 'Fun Times',
//    color: {
//      black : true,
//      white : true
//    },
//    colorID: {
//      black : true,
//      white : true
//    }
//  }, {
//    name : 'Speaker Dude',
//    description : 'Drops the bass so hard he puts opponents into an uncontrollable dropped bass state.',
//    type : 'sound',
//    deck : 'Fun Times',
//    color: {
//      blue: true
//    },
//    colorID: {
//      blue: true
//    }
//  }, {
//    name : 'Swirly',
//    description : 'Holds the opponent\'s head in a toilet while flushing it.',
//    type : 'water',
//    deck : 'Fun Times',
//    color: {
//      red : true
//    },
//    colorID: {
//      red: true
//    }
//  }, {
//    name : 'Lighting',
//    description : 'Struck by lightning, -5 HP.',
//    type : 'electricity',
//    deck : 'Bad Times',
//    color: {
//      black : true
//    },
//    colorID: {
//      black: true
//    }
//
//  }, {
//    name : 'Flood',
//    description : 'Major flood, -3 HP.',
//    type : 'water',
//    deck : 'Bad Times',
//    color: {
//      green : true
//    },
//    colorID: {
//      green : true
//    }
//  }, {
//    name : 'Surprise Party',
//    description : 'Your friends throw a surprise party for you! +12 mana.',
//    type : 'party',
//    deck : 'Fun Times',
//    color: {
//      white : true
//    },
//    colorID: {
//      white : true
//    }
//  }, {
//    name : 'Mosh Pit',
//    description : 'You have a blast in a mosh pit, +3 mana.',
//    type : 'party',
//    deck : 'Fun Times',
//    color: {
//      blue: true,
//      red : true
//    },
//    colorID: {
//      blue: true,
//      red : true
//    }
//  }, {name : 'Textbook',
//    description : 'You read an entire textbook, wow. +6 HP',
//    type : 'knowledge',
//    deck : 'Bad Times',
//    color: {
//      green : true,
//      white : true
//    },
//    colorID: {
//      green : true,
//      white : true
//    }
//  }, {
//    name : 'Bling Bling',
//    description : 'You found $20 on the ground!',
//    type : 'money',
//    deck : 'Bad Times',
//    color: {
//      red : true,
//      black : true
//    },
//    colorID: {
//      red : true,
//      black : true
//    }
//  }, {
//    name : 'Dumbell',
//    description : 'You\'re either stronger or your enemies have bruises.',
//    type : 'strength',
//    deck : 'Bad Times',
//    color: {
//      red : true,
//      white : true
//    },
//    colorID: {
//      red : true,
//      white : true
//    }
//  }, {
//    name : 'Dessert',
//    description : 'Your mother makes you a delicious cherry pie, yum. +50 happiness.',
//    type : 'food',
//    deck : 'Bad Times',
//    color: {
//      blue: true,
//      green : true
//    },
//    colorID: {
//      blue: true,
//      green : true
//    }
//  }, {
//    name : 'JavaScript',
//    description : 'You lose track of your types, the world is too dynamic. -4 HP',
//    type : 'knowledge',
//    deck : 'Bad Times',
//    color: {
//      red : true,
//      green : true
//    },
//    colorID: {
//      red : true,
//      green : true
//    }
//  });
//});
