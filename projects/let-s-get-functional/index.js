// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('lodown-chrisleboeuf');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./<YOUR_GITHUB_FOLDER/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    return _.reduce(array, function(acc, customer){
        customer.gender === 'male' ? acc++ : null;
        return acc;
    }, 0);
};

var femaleCount = function(array){
    return _.reduce(array, function(acc, customer){
        customer.gender === 'female' ? acc++ : null;
        return acc;
    }, 0);
};

var oldestCustomer = function(array){
    return array.reduce((oldest, customer) => customer.age > oldest ? customer.name : oldest, array[0].age);
};

var youngestCustomer = function(array){
    return _.filter(array, function(customer){
        return customer.age === Math.min.apply(Math, _.reduce(array, function(acc, customer){
            acc.push(customer.age);
            return acc;
        },[]));
    })[0].name;
};

var averageBalance = function(array){
    
    let balances = _.reduce(array, function(acc, customer){
        acc.push(parseFloat(customer.balance.replace('$', '').replace(',', '')));
        return acc;
    },[]);
    
    let average = _.reduce(balances, (a,b) => a+b);

    return average / balances.length;
};

var firstLetterCount = function(array, letter){
     return _.reduce(array, function(acc, customer){
        customer.name.toLowerCase().startsWith(letter.toLowerCase()) ? acc++ : null;
        return acc;
    },0);
};

var friendFirstLetterCount = function(array, name, letter){
    return _.reduce(array, function(acc, customer){
        if(customer.name === name){
            acc = _.filter(customer.friends, customer => customer.name.toLowerCase().startsWith(letter.toLowerCase())).length;
        }
        return acc;
    }, 0);
};

var friendsCount = function(array, name){
    return _.reduce(array, function(acc, customer){
        _.each(customer.friends,function(friend){
            friend.name.includes(name) ? acc.push(customer.name) : null; 
        });
        return acc;
    },[]);
};

var topThreeTags = function(array){
    //Array of arrays
    let top3 = _.reduce(array, function(acc, customer){
        acc.push(customer.tags);
        return acc;
    }, []);
    
    //Merges all the tags arrays into one array
    top3 = top3.concat.apply([], top3);
    
    //Gets the 3 highest occuring elements
    top3 = top3.sort((a,b) =>
          _.filter(top3, v => v === a).length
        - _.filter(top3, v => v === b).length
    ).splice(-3);
    
    return top3;
};

var genderCount = function(array){
    return _.reduce(array, (acc, customer) => (acc[customer.gender] = ++acc[customer.gender] || 1, acc), {});
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
