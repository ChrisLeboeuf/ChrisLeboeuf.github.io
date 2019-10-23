/*
 * LOOPS:
 * There are 3 different types of loops, while, for, and for-in
 * 
 * Loops are used to execute blocks of code as many times as specified.
 * They give us the ability to iterate over objects, arrays, and strings.
 * A loop will contain a counter, an exit condition, and an incrementor.
 * 
 * For loop: Used to iterate over arrays and strings using an index.
 * 
 * While: Used to run specific code while a condition is true.
 * 
 * For-in loop: Used iterate over objects.
 * 
 * Be sure to be careful when creating any loop. If you cause the exit condition
 * to be met indefinitely, it will cause whatever program you are in to crash.
 */

// EXAMPLES //
let str = 'Beans';
let arr = [1, 2, 3, 4, 5];
let obj = {name: 'Chris', age: 19};

// Just to make things easier. Think of each space in the comments as a new line.

/*
 * for loops:
 * Syntax for for loops is as follows
    
    for(initialExpression; condition; iterator){
        code block
    }
    
 * initialExpression: Initializes any loop counters.
 * condition: Tells the loop when to stop.
 * iterator: Increments the initial expression until the condition is met.
 */
// Looping forward //
for(let i = 0; i < str.length; i++){
    console.log(str[i]);//Logs B e a n s
}

// Looping Backwards //
for(let i = arr.length -1; i > -1; i--){
    console.log(arr[i]);//Logs 5 4 3 2 1
}

/*
 * while loops:
 * Syntax for while loops is as follows:
    
    while(condition){
        code block
    }
    
 * while statement loops as long as a specified condtion is true
 */
// Looping forward //
let i = 0;
while(i < arr.length){
    console.log(arr[i]);//Logs 1 2 3 4 5
    i++;
}

// Looping bacward //
let j = str.length - 1;
while(j > -1){
    console.log(str[j]);//Logs s n e a B
    j--;
}

/*
 * for-in loops
 * Sytax for for-in loops is as follows
    
    for(variable in object){
        code block
    }
    
 * variable: a different property name is assigned to a variable on each iteration
 * object: object to be iterated over
 */
// Gettings keys //
for(let key in obj){
    console.log(key);//Logs name age
}

// Getting values //
for(let key in obj){
    console.log(obj[key]);//Logs 'Chris' 19
}