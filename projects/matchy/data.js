/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal = {};
animal.species = 'dog';
animal['name'] = 'Champ';
animal['noises'] = [];
console.log(animal);


//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var noises = [];
noises[0] = 'bark';
noises.push('whine');
noises.unshift('growl');
noises[noises.length] = 'cry';
console.log(noises.length);
console.log(noises[noises.length - 1]);
console.log(noises);


//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
animal.noises = noises;
animal.noises[noises.length] = 'happy dog sounds' 
console.log(animal);


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animals = [];
animals.push(animal);
console.log(animals);
var duck = { species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] };
animals.push(duck);
console.log(animals);
var cat = { species: 'cat', name: 'Wasabi', noises: ['meow', 'scritch', 'scratch'] };
var human = { species: 'human', name: 'Chris', noises: ['scream', 'shout', 'let it all out'] };
animals.push(cat);
animals.push(human);
console.log(animals);
//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/*
 * I chose an array because unless it is needed, we only need to
 * contain the names of the friends that a certain animal has.
 */
var friends = [];
var getRandom = function(){
    return Math.floor(Math.random() * animals.length);
};
//push the name of a random animal to the friends array
friends.push(animals[getRandom()].name);
console.log(friends);
//add friends property to any one of the animals
animals[getRandom()].friends = friends;
console.log(animals);

/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}
