/*
 * STRING MANIPULATION:
 * 
 * Strings can be altered with operators/methods specific to strings.
 * Strings can be accessed in the same way as arrays. Not only are they
 * indexed at 0, but they can be accessed using bracket notation.
 * All strings have 3 properties: .length, .constructor, and .prototype.
 * 
 * .length property: Returns the length of a string.
 * .constructor property: Returns the strings constructor function.
 * .prototype property: Allows the ability to add properties and methods to an object.
 * 
 * 
 * With operators: With the addition operator, we can combine multiple strings to form one whole string.
 * 
 * With methods: With premade functions, we can manipulate any string. All methods return a new value.
 * 
 * Javascript also has codes to format the way strings are created.
 * 
 *  ___________________________________________
 * | Description            |  Code            |
 * |________________________|__________________|
 * |                        |                  |
 * | Single quote           |  \'              |
 * | Double quote:          |  \"              |
 * | Printed backslash:     |  \\              |
 * | New Line:              |  \n              |
 * | Backspace:             |  \b              |
 * | Form Feed:             |  \f              |
 * | Indentation:           |  \t              |
 * | Carriage return:       |  \r              |
 * |________________________|__________________|
 * 
 */ 

// EXAMPLES //
let multiLineStr = 'My name is brad:\nand I\'m here to fly!\n\t\t\t\t\t\t\t YEET!';
console.log(multiLineStr);
/* Logs this to the console

My name is brad:
and I'm here to fly!
                            YEET!
*/

// USING OPERATORS //
let coolGuy = 'Chris';
coolGuy += ' is cool.';
console.log(coolGuy);//Logs 'Chris is cool.'

// USING METHODS //
// NOTE: There are ALLOT of methods //
var str = 'HENLO WORLD';
let multiStr = 'My brain is in pain while I sit in the rain.';

//charAt() returns the character at a specified index.
console.log(str.charAt(0));//Logs 'H'

//charCodeAt() returns the Unicode character th the specified index.
console.log(str.charCodeAt(0));//Logs 72

//FromCharCodeAt() converts Unicode number into a character.
console.log(String.fromCharCode(65));//Logs 'A'

//concat() joins two or more strings, and returns a new string.
let alien = 's';
let greetings = str.concat(alien);
console.log(greetings);//Logs 'HENLO WORLDS'

//startsWith() checks whether a string starts with a specified substring.
console.log(str.endsWith('H'));//Logs true

//endsWith() checks whether a string ends with a specified substring.
console.log(str.endsWith('D'));//Logs true

//includes() checks ia string contains a specified substring.
console.log(str.includes('ENLO'));//Logs true

//indexOf() returns the position of the first found occurence of a specified substring.
console.log(multiStr.indexOf('ain'));//Logs 5

//lastIndexOf() returns the position of the last found occurence of a specified substring.
console.log(multiStr.lastIndexOf('ain'));//Logs 40

//localeCompare compares two strings in the current locale/scope.
let str1 = 'ab';
let str2 = 'cd';
//returns -1 if str1 is sorted before str2
//returns 0 if both stringsare equal
//returns 1 if str1 is sorted after str2 
console.log(str1.localeCompare(str2));//Logs -1

//match() searches a string for a match against a regular expression, & returns an array of matches.
console.log(str.match(/ain/g));//Logs [ 'ain', 'ain', 'ain' ]

//repeat() returns a new string with the specified number of copies of an existing string.
console.log(str.repeat(3));//Logs 'HENLO WORLDHENLO WORLDHENLO WORLD'

//replace() searches a string for a specified value/reg expr, and returns a new string with those values replaces.
console.log(str.replace('HENLO', 'HELLO'));//Logs 'HELLO WORLD'

//search() searches string for a specified value/reg expr, abd returns the position of the match.
console.log(str.search('WORLD'));//Logs 6

//slice() extracts a part of a string and returns a new string.
console.log(str.slice(0, 5));//Logs 'HENLO'

//split() splits a string into an array of substrings.
console.log(str.split(' '));//Logs ['HENLO', 'WORLD']

//substr() extracts characters from a string, beginning at specified start position through the specified number of characters.
console.log(str.substr(1, 4));//Logs 'ENLO'

//substring() extracts the characters from a string, between two specified indices.
console.log(str.substring(1, 4));// Logs 'ENL'

//toLocaleLowerCase() converts a string to lowercase letters, according to the host's locale.
console.log(str.toLocaleLowerCase());//Logs 'henlo world'

//toLocaleUpperCase() converts a string to uppercase letters, according to the host's locale.
console.log(str.toLocaleUpperCase());//Logs 'HENLO WORLD'

//toLowerCase() converts a string to lowercase letters
console.log(str.toLowerCase());//Logs 'henlo world'

//toUpperCase() converts a string to uppercase letters.
console.log(str.toUpperCase());//Logs 'HENLO WORLD'

//toString() returns the value of a string object. Converts values to strings
let one = 1;
console.log(one.toString());//Logs '1'

//trim() removes whitespace from both sides of a string
let hair = '     Poof     ';
let haircut = hair.trim();
console.log(haircut);//Logs 'Poof'

//valueOf() returns the primitave value of a string object.
console.log(str.valueOf());//Logs 'HENLO WORLD'