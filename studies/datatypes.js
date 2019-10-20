/*
 * DATATYPES:
 * 
 * Any type of value is a datatype. Datatypes are split into
 * two categories. Simple/primitive and Complex data types.
 * A variable in JavaScript can contain any data. A variable
 * can at one moment be a string and at another be a number.
 * 
 * Simple datatypes are immutable (incapable of being changed w/o reassignment).
 * They are unable to contain or collect other values. Operations on simple values
 * create new values, they do not alter the original value.
 * Primitive values are passed into a function by copy.
 * This means when assigning or passing in, simple values
 * are copied from one variable to the next.
 * Simple datatypes include numbers, strings, booleans, undefined, null, NaN, and +/-Infinity.
 * 
 * Complex datatypes are mutable (capable of being changed at anytime w/o reassignment).
 * They can contain/collect other values, therefore have an indefinite size. 
 * Complex values are passed into a function by reference. This means that when
 * assigning or passing in, complex values are passed in by reference and 
 * manipulated directly instead of copying and creating a new value entirely.
 * Complex datatypes include arrays, objects, and functions
 */

// EXAMPLES //
/*
 * Number: Simple data type. You cannot start a variable name with a number.
 */
// Copy by value example //
let num1 = 1;
let num2 = num1;    //the value stored in num1 has been COPIED to num2
num2 = 2;           //changing num2s value doesn't affect num1
console.log(num1);  //Logs 1

// The same goes when passing values into functions //
function add(num){ num += 1;}
var num3 = 3;
add(num3);
console.log(num3);//Logs 3 because the value at num3 was only copied with passed into add.

/*
 * String: Simple data type. Text encapsulated in  '' or "" marks. Can contain any text.
 */
let string = '[{HeLlO mY f3Ll0w Hum@n$}]';

/*
 * Boolean: Simple data type. When a value is either true or false.
 */
let truthy = true;
let falsy = false;

/*
 * Undefined: Simple data type. Keyword that specifies if a variable has a value.
 */
let emptyVar;
console.log(emptyVar);//Logs undefined
emptyVar = 1;
console.log(emptyVar);//Logs 1 because emptyVar is no longer undefined.

/*
 * null: Simple data type. Intentional absence of a value.
 */
let data = [1, 'Chris', true];
data = null;
console.log(data);//Logs null

/*
 * NaN: Simple data type. Stands for 'Not a Number'. Any value that cannot be evaluated as a number.
 */
let clone = 'Chris';
let failedClone = clone * 2;
console.log(failedClone);//Logs NaN

/*
 *  +/-Infinity: Simple data type. +/-Infinity is a number greater/smaller than any other number.
 */
Number.POSITIVE_INFINITY;
Number.NEGATIVE_INFINITY;

/*
 * Array: Complex data type. Can hold indefinite amount of data. 0-indexed.
 * Created using []. Can be accessed using bracket notation.
 */
var arr1 = [1, 2, 3, 4];
//         [0, 1, 2, 3] <-- array's indexes

// Copy by reference example //
var arr2 = arr1;       //The value stored in arr2 is REFERENCE to the value stored in arr1
arr2[0] = '1';         //changing the value at arr2 effects all references
console.log(arr1[0]);   //Logs '1'
console.log(arr2[0]);  //Logs '1'

/*
 * Object: Complex data type. Collection of key/value pairs. Each key points to a value.
 * Created using {}. Can be accessed using bracket/dot notation. Keys are always strings.
 */
var obj = {
    nameFirst: 'Chris',
    nameLast: 'Leboeuf',
    age: 19
};
console.log(obj['nameFirst']);//Logs 'Chris'
console.log(obj.nameLast);//Logs 'Leboeuf'

/*
 * Function: Complex data type. Reusable block of code. Has its own variable scopes.
 * Each function contains a name to be called with, parameters which are input placeholders
 * for values and a body that stops when its body hits a return statement.
 */

function doSomething(param1, param2){
    console.log(param1 + param2);
    return param1 + param2;
}
doSomething();//logs 3