
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(size) {
    for (let triangle = "#"; triangle.length <= size; triangle += "#"){
        console.log(triangle);
    }   
}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz() {
    for(let i = 1; i <= 15; i++){
        //if i is a multiple of both 3 & 5
        if(i % 15 === 0){
            //log fizbudd
            console.log("fizzbuzz");
        //if i is a multiple of 3
        } else if(i % 3 === 0){
            //log fizz
            console.log("fizz");
        //if i is a multiple of 5
        } else if(i % 5 === 0){
            //log buzz
            console.log("buzz");
        //otherwise
        } else {
            //log i (a number)
            console.log(i);
        }
    }
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(size) {
    //board storage var to hold chessboard characters
    var board = "";
    //loop through length of board
    for (let i = 0; i < size; i++) {
        //loop through width of board
        for (let j = 0; j < size; j++) {
            if ((i + j) % 2 == 0){
                board += " ";
            } else {
                board += "#";
            }
        }
        //add new line
        board += "\n";
    }
    console.log(board);
    
}
////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
