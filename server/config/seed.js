/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var Card = require('../api/card/card.model');


Thing.find({}).remove(function() {
  Thing.create({
    name : 'Development Tools',
    info : 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.'
  }, {
    name : 'Server and Client integration',
    info : 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.'
  }, {
    name : 'Smart Build System',
    info : 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html'
  },  {
    name : 'Modular Structure',
    info : 'Best practice client and server structures allow for more code reusability and maximum scalability'
  },  {
    name : 'Optimized Build',
    info : 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.'
  },{
    name : 'Deployment Ready',
    info : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
  });
});

Card.find({}).remove(function() {
  Card.create({
    name : 'Sauce Boss',
    description : 'Lathers opponents in delicious, distracting sauces.',
    type : 'cook'
  }, {
    name : 'Crucial',
    description : 'Throws SSDs at opponents.',
    type : 'projectile'
  }, {
    name : 'Speaker Dude',
    description : 'Drops the bass so hard he puts opponents into an uncontrollable dropped bass state.',
    type : 'sound'
  }, {
    name : 'Swirly',
    description : 'Holds the opponent\'s head in a toilet while flushing it.',
    type : 'water'
  }, {
    name : 'Lighting',
    description : 'Struck by lightning, -5 HP.',
    type : 'electricity'
  }, {
    name : 'Flood',
    description : 'Major flood, -3 HP.',
    type : 'water'
  }, {
    name : 'Surprise Party',
    description : 'Your friends throw a surprise party for you! +12 mana.',
    type : 'party',
    deck : 'Fun Times'
  }, {
    name : 'Mosh Pit',
    description : 'You have a blast in a mosh pit, +3 mana.',
    type : 'party',
    deck : 'Fun Times'
  }, {name : 'Textbook',
    description : 'You read an entire textbook, wow. +6 HP',
    type : 'knowledge'
  }, {
    name : 'Bling Bling',
    description : 'You found $20 on the ground!',
    type : 'money'
  }, {
    name : 'Dumbell',
    description : 'You\'re either stronger or your enemies have bruises.',
    type : 'strength'
  }, {
    name : 'Dessert',
    description : 'Your mother makes you a delicious cherry pie, yum. +50 happiness.',
    type : 'food'
  }, {
    name : 'JavaScript',
    description : 'You lose track of your types, the world is too dynamic. -4 HP',
    type : 'knowledge'
  });
});
