/*
OPERATORS: 
JavaScript operators are used to assign values,
compare values, perform arithmetic operations, and more.
*/

/* ASSIGNMENT OPERATORS:

Assignment operators are used to assign values from left
to right to JavaScript variables using an equal sign '='. 
Some assignment operators coexist with arithmetic operators 
allowing them to be computated as they are assigned.

 __________________
| Operator         |
|__________________|
|                  |
| =                |
| +=               |
| -=               |
| *=               |
| /=               |
| %=               |
|__________________|
*/

// Examples //
let num = 10;
num += 4; 
console.log(num);   //Logs 14
num -= 2;
console.log(num);   //Logs 12
num *= 2;
console.log(num);   //Logs 24
num /= 4;
console.log(num);   //Logs 6
num %= 2;
console.log(num);   //Logs 0

//--------------------------------------------------------------------------------------------//
/* ARITHMETIC OPERATORS:

Arithmetic operators are used to perform any sort of mathematical computations between variables and/or values.
 __________________________________________________________________
| Computation                     |  Operator                      |
|_________________________________|________________________________|
|                                 |                                |
| Addition:                       |  +                             |
| Subtraction:                    |  -                             |
| Multiplication:                 |  *                             |
| Division:                       |  /                             |
| Modulus/Division remainder      |  %                             |
| Increment by 1:                 |  ++                            |
| Decrement by 1:                 |  --                            |
|_________________________________|________________________________|
*/

// Examples //
let mathmaticals = 2;
console.log(mathmaticals + 2);  //Logs 4
console.log(mathmaticals - 2);  //Logs 0
console.log(mathmaticals * 2);  //Logs 4
console.log(mathmaticals / 2);  //Logs 1
console.log(mathmaticals % 2);  //Logs 0
console.log(mathmaticals++);    //Logs 3
console.log(mathmaticals--);    //Logs 1

//--------------------------------------------------------------------------------------------//
/* COMPARISON OPERATORS

Comparison operators are used to determine the 
equality or difference between values or variables. 
Simply put, comparison operators evaluate to a boolean.

 __________________________________________________________________
| Comparison                      |  Operator                      |
|_________________________________|________________________________|
|                                 |                                |
| Equal to value & type:          |  ===                           |
| Equal value:                    |  ==                            |
| Not equal value & type:         |  !==                           |
| Not equal value:                |  !=                            |
| Greater than:                   |  >                             |
| Less than:                      |  <                             |
| Greater than or equal to:       |  >=                            |
| Less than or equal to           |  <=                            |
|_________________________________|________________________________|

If the strict comparison (===) is used, then it is testing
to see if both the data type and the value is the same.

If the abstract comparison operator (==) is used, 
it tests to see if either the contents or the value is the same
while ignoring the data type.
*/

// Examples //
let me = 'Christopher';
console.log(me === 'christopher');  //Logs false
console.log(num == '0');            //Logs true
console.log(mathmaticals !== '2');  //Logs true
console.log(mathmaticals != '2');   //Logs false
console.log(mathmaticals > 1);      //Logs true
console.log(mathmaticals < 1);      //Logs false
console.log(num >= -1);             //Logs false
console.log(num <= 1);              //Logs true

//--------------------------------------------------------------------------------------------//
/* LOGICAL OPERATORS

Logical operators are used with any primitive value or object.
Its result will be based in whether the value is truthy or falsy.

 _____________________________________
| Description      |  Operator        |
|__________________|__________________|
|                  |                  |
| And:             |  &&              |
| Or:              |  ||              |
| Not:             |  !               |
|__________________|__________________|
*/

// Examples //
console.log(num > -1 && num < 1);       //Logs true because both staements are true
console.log(num === 1 || num === 0);    //Logs true because at least 1 statement is true
console.log(num !== false);             //Logs false because 0 is a falsy value

//--------------------------------------------------------------------------------------------//
/*  UNARY OPERATORS

Unary operators take a single operand/argument to perform an operation. 
 _________________ __________________________________________________________________________
| Name            | Description                                                   | Operator |
|_________________|_______________________________________________________________|__________|
|                 |                                                               |          |
| Unary plus:     | Attempts to convert operands to their mathmatical equivalent  | +        |
| Unary negation: | Similar to plus, but additionally performs negation           | -        |
| Logical not:    | Converts operands to their boolean equivalent before negating | !        |
| Bitwise not:    | Performs a binary NOT operation. (~ on a number = -(x+1))     | ~        |
| Increment:      | Adds one to its operand and returns the result                | ++       |
| Decrement:      | Subtracts one from its operand and return the result          | --       |
| typeof:         | Returns a string indicating the data type of the operand      | typeof   |
| delete:         | Deletes values at specific index of array/propery of object   | delete   |
| void:           | Discards the return value of an expression.                   | void     |
|_________________|_______________________________________________________________|__________|

All Unary operaters must come before the operand except for increments/decrements.
Increment and Decrement are special because they can can either be a prefix or a postfix.
If either of them are used as a prefix, it returns the value after incrementing/decrementing.
If either of them are used as a postfix, it returns the value before incrementing/decrementing.
*/

// Examples //
let newNum = 1;
let obj ={uno: 1, dos: 2, tres: 3};
let greet = function(){console.log('hi'); return 1;};
console.log(+'3');                  //Logs 3
console.log(+true);                 //Logs 1
console.log(-'3');                  //Logs -3
console.log(-true);                 //Logs -1
console.log(!false);                //Logs true
console.log(~2);                    //Logs -3 because -(2 + 1) = -3
console.log(~true);                 //Logs -2 because -(1 + 1) = -2
console.log(newNum = newNum++);     //Logs 1 because the value is set before incrementing
console.log(newNum = ++newNum);     //Logs 2 because the value is set after incrementing
console.log(newNum = newNum--);     //Logs 1 because the value is set before decrementing
console.log(newNum = --newNum);     //Logs 0 because the value is set after decrementing
console.log(typeof obj);            //Logs 'object'
console.log(typeof num);            //Logs 'number'
console.log(typeof function(){});   //Logs 'function'
console.log(delete newNum);         //Logs false because this operation cannot be done
delete obj.uno;
console.log(obj);                   //Logs  {dos: 2, tres: 3}
console.log(void 1);                //Logs undefined
console.log(void greet());          //Logs 'hi' & returns undefined

//--------------------------------------------------------------------------------------------//
/* TERNARY OPERATORS

Ternary operators (aka conditional operators) take 3 
operands amd behave similar to if-else statements.

It's syntax is (condition ? valIfTrue : valIfFalse)

*/

// Examples //
let age = 17;
let adulthood = age >= 18 ? 'adult' : 'minor';
console.log(adulthood);//Logs 'minor'