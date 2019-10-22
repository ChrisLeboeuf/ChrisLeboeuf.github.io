/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function search(animals, name){
    var animal = null;
    //search through animals using a for loop
    for(let i = 0; i < animals.length; i++){
        //if animals name matches the name give
        if(animals[i].name === name){
            //set matching animal to animal var
            animal = animals[i];
        }
    }

//var animal = animals.find(anim => anim.name === name);
//if(animal === undefined){
//    animal = null;
//}
    //return matching animal
    return animal;
}


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function replace(animals, name, replacement){
    //search through animals using a for loop
    for(let i = 0; i < animals.length; i++){
        //if animals name matches the name give
        if(animals[i].name === name){
            //set new animal
            animals[i] = replacement;;
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function remove(animals, name){
    //search through animals using a for loop
    for(let i = 0; i < animals.length; i++){
        //if animals name matches the name give
        if(animals[i].name.toLowerCase() === name.toLowerCase()){
            //set remove the specified animal
            animals.splice(i, 1);
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Create ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function add(animals, animal){
    //test against other animal names using some
    const found = animals.some(anim => anim.name === animal.name);
    //if a name isn't already found in animals
    if (!found){
        //add a new animal
        animals.push(animal);
    }
}

/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
