


var turnColor = document.querySelectorAll(".grid-item")
let playerTurn = 0




for (let i = 0; i < turnColor.length; i++) {
    console.log(turnColor[i]);
    if (playerTurn) {

    }
    turnColor[i].addEventListener("click", function (event) {
        turnColor[i].style.backgroundColor = "blue";
        turnColor[i].innerHTML = "X";

    });
};

//if (odd){

    //do blue
//} else {
    //do red
//}



//playerTurn++



//let emptyBoards = [

//  ['', '', ''],
//  ['', '', ''],
//  ['', '', '']
//]

// 0   0   1   2

// 1   0   1   2  

// 2  0   1    2


//winCombination 

//[0][0, 1, 2]
//[1][0, 1, 2]
//[2][0, 1, 2]
// []


//take value (x or 0) and compare if line if full. if full game over

//

    //something[i]



//it works for 1 cell. commented out to check another option
//document.getElementById("div1").addEventListener("click", function () {
//console.log("1")
//  var cellOne = document.getElementById("div1")
//console.log(cellOne)
//cellOne.style.backgroundColor = "blue";
//cellOne.innerHTML = "X";
//});


//general logic of turns. Create an array and put everything there?


//need to prevent a player from clicking on the cell where color 
//was changed. How to define this cell? may use == !== but 
//what should be in the right part? May I use background color? I add
//X to make it easier  
// 

//let cells = document.querySelectorAll('div')
//console.log(cells)

//while (cells)




//it works for 1-st cell and does not work for others
//seems it does not work because querySelector takes only 1-st
//why cellOne is null?it cannot change all divs

// document.querySelectorAll(".grid-item").addEventListener("click", function () {
//     console.log("1")
//     var cellOne = document.querySelector(".grid-items")
//     console.log(cellOne)
//     cellOne.style.backgroundColor = "blue";
//     cellOne.innerHTML = "X";
// });



//for blue and red turn I mau use opacity


//reset button. what logic is behind?


//how to check winner: if 1,2,3 == x ||1,2,3 == 0 
//add all the combinations
//if XXXX true{
 //   display: }


 //} 
//}