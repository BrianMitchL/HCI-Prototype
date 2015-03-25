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
  });
});
