/*
* VARIABLES:
*
* 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
* are named identifiers that can point to values of a particular type, like a Number, String,
* Boolean, Array, Object or another data-type.  Variables are called so because once created, we
* can CHANGE the value (and type of value) to which they point.
*
* 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
* variable.
*
* 2. There are 2 phases of using variables: declaration and initialization (or assignment).
*/

// 1. declaration //
/*eslint-disable no-undef */
var myName;

/*
* At the declaration phase, the variable myName is undefined because we have NOT initialized
* it to anything
*/
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

/*
 * VAR, LET, & CONST:
 * 
 * Var keyword is simply used to declare a variable. As long as var is not
 * functionally scoped, it can be accessed from anywhere in cide.
 * Let is the same as var in almost every way. The difference is that let is block scoped
 * Const, like var and let, is used to declare a variable. Not only are const variables
 * block scoped, but const variables cannot be reassigned, so they must be initialized.
 * Block scoped variables exist only in the block of code that they are in.
 * Neither const nor let variables are hoisted to the top of their scoped.
 * 
 * Hoisting:
 * 
 * In JavaScript, a variable can be declared after it has been used.
 * A variable can be used before it is declared. Javascript declarations
 * are hoisted to the top of their functional/local scope, however
 * assignments/initializations are not.
 */
// Examples //

//var is hoisted to the global scope
for(var i = 0; i < 3; i++){/*do something*/}
console.log(i); // prints 3

//let is no hoisted, so it cannot be accesed outside of this local scope
for(let j = 0; j < 3; j++){/*do something*/}
//console.log(j); // prints ReferenceError: 'j is not defined'

//const cannot be reassigned, therefore cannot be incremented
//for(const k = 0; k < 3; k++){
//    console.log(k); // prints TypeError: 'Assignment to constant variable'
//}

// This log would produce a similar result to the let example
//console.log(k);// prints ReferenceError: 'k is not defined'