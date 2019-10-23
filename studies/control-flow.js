/*
 * CONTROL FLOW:
 * 
 * Control flow is the order in which the computer executes statements in a script.
 * Code is run from left to right, top to bottom. Conditionals and loops change the
 * control flow of a program.
 * 
 * There are four types of conditional statements in Javascript.
 * 
 * if: Used to execute a block of code, if a specific condition is true.
 * 
 * else if: Used to test a new condition, if the previous condition is false.
 * 
 * else: Used to execute a block of code if all other conditions are false.
 * 
 * switch: Used to specify many alternative blocks of code to be executed.
 */

// Examples //
let truthy = true;
let weather = 'sunny';

/*
 * Because the first condition is false, this code block
 * immediately goes to the else statement, logging
 * 'Facts' to the console.
*/
if(truthy === false){
    console.log('This aint it chief');
} else {
    console.log('Facts');
}

/* 
 * if statement syntax is as follows:

    if(condition){
        code block
    } else if (condition){
        code block
    } else {
        code block
    }

 * Ultimately there can be any ammount of else-if statements, but
 * in this example there is only one.
 * The first statement fails, so it continues to move on until
 * it finds a statement that is true. Because the second statement is true,
 * 'The weather looks great!' gets logged to the console.
*/
if(weather === 'cloudy'){
    console.log('It might rain today.');
} else if(weather === 'sunny'){
    console.log('The weather looks great!');
} else {
    console.log('I havent checked today.');
}

/*
 * SWITCH:
 * Switch statements are used when executing very particular input values.
 * They can be a faster way of writing an if statement. The input
 * value must match the value of the case. In a sense, they are just another
 * way to write an if statement.
 * 
 * Syntax for switch statements are as follows
 
    switch(expression){
        case x:
            code block
            break;
        case y:
            code block
            break;
        default:
            code block
    }
    
 * There can be as many cases as you would like for the code to run through.
 * Case works like if/else-if statements. Each case ends with a break.
 * The break tells the code block for each case when to stop executing.
 * Default works almost like an else statement.
 */

//Because the first case is true, it logs 'The weather looks great!'
switch(weather){
    case 'sunny':                                 //if weather === 'sunny'
        console.log('The weather looks great!');  //log 'The weather looks great!'
        break;
    case 'cloudy':                                //else if weather === 'cloudy'
        console.log('It might rain today.');      //log 'It might rain today.'
        break;
    default:                                      //else
        console.log('I havent checked today.');   //log 'I havent checked today.'    
}