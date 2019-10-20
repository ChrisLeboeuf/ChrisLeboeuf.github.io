/*
 * FUNCTIONS:
 * 
 * Functions allow us to encaosulate and execute code as needed.
 * Functions must first be declared/defined, then the function must be called/invoked.
 * Functions recieve inputs/placeholders also known as parameters. Those place holders
 * will be replaced with arguments at call time. Functions can either be named or assigned
 * to variables. It is completely optional for functions to take parameters or return singular values.
 * Functions that are assigned to variables are known as function expressions.
 * Functions have their own private scopes that cannot be accessed by parent/global scopes, however
 * they have full access to any values/variables found in parent/global scopes. Functions form
 * closures around the data they house. Closures keep access to certain values even after
 * the function has been invoked.
 */

// EXAMPLES //
/*eslint-disable no-undef */
let globalVar = 'Grandma';

//This named function has been declared and takes in no parameters
function doSomething(){
    console.log('YEET');
}

//function execution
doSomething();//Logs 'YEET'


//This is a function expression
let doSomethingElse = function(){
    let var1 = ' and Grandpa';
    //function can take in globalVar because it has access to global/parant scopes.
    console.log(globalVar + var1);
};
doSomethingElse();//Logs 'Grandma and Grandpa'
//console.log(var1);//Logs Reference Error because the global scope doesn't have access to function scope.


//This function takes in a single parameter
function doAnotherThing(var1){
    console.log(var1);
}
//This call is invoked with a single argument
doAnotherThing(globalVar);//Logs 'Grandma'


//CLOSURE FUNCTION//
function add(num1){
    return function(num2){
        return num1 + num2;
    };
}

let add2 = add(2);
let add4 = add(4);

console.log(add2(5));//Logs 7
console.log(add4(6));//Logs 10