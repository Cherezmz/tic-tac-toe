
//totaly new logic (prtly was taken from here https://www.youtube.com/watch?v=-YWO-YFW9Ag&t=308s )




let playerTurn = 0
let totalNumberOfMoves = []
console.log(totalNumberOfMoves)

//document.querySelector(".blueTurn").style.backgroundColor == "blue") {
//  document.querySelector(".blueTurn").style.backgroundColor == "wheat"

//}

//put click on the cells/ as a result we have information about the event
//including div where the click happened (in target)
document.getElementById("grid-container").onclick = function (event) {

    //console.log(event)
    //if we can get info from the cell, we may play with this cell, using DOM


    //changing colors of the buttons to show whose turn does nt work properly
    // for (i = 0; i < 9; i++) {
    //     document.querySelector(".blueTurn").style.backgroundColor = "wheat"
    //     document.querySelector(".RedTurn").style.backgroundColor = "red"
    //     console.log(i)
    // }


    if (event.target.innerHTML == "x" || event.target.innerHTML == "0") {
        return (alert("Chose another cell"))
    } else {
        if (event.target.className == "grid-item") {
            //define that even and odd means X or 0
            if (playerTurn % 2 == 0) {
                event.target.innerHTML = "x";
                event.target.style.backgroundColor = "blue"
                //event.preventDefault()
                document.querySelector(".blueTurn").style.backgroundColor = "wheat"
                document.querySelector(".RedTurn").style.backgroundColor = "red"

                totalNumberOfMoves.push(1)
                console.log(totalNumberOfMoves)

                checkWinner()


            } else {
                event.target.innerHTML = "0";
                event.target.style.backgroundColor = "red"
                // event.preventDefault()
                document.querySelector(".blueTurn").style.backgroundColor = "blue"
                document.querySelector(".RedTurn").style.backgroundColor = "wheat"

                totalNumberOfMoves.push(1)
                console.log(totalNumberOfMoves)

                checkWinner()
            }
            //nedd to add turns
            playerTurn++;

        }
    }
}

var allCells = document.getElementsByClassName("grid-item");
function checkWinner() {

    //console.log(allCells)
    //console.log(allCells[0])
    //console.log(allCells[0].innerHTML)



    if ((allCells[0].innerHTML == "x" && allCells[1].innerHTML == "x" && allCells[2].innerHTML == "x") ||
        (allCells[3].innerHTML == "x" && allCells[4].innerHTML == "x" && allCells[5].innerHTML == "x") ||
        (allCells[6].innerHTML == "x" && allCells[7].innerHTML == "x" && allCells[8].innerHTML == "x") ||
        (allCells[0].innerHTML == "x" && allCells[3].innerHTML == "x" && allCells[6].innerHTML == "x") ||
        (allCells[1].innerHTML == "x" && allCells[4].innerHTML == "x" && allCells[7].innerHTML == "x") ||
        (allCells[2].innerHTML == "x" && allCells[5].innerHTML == "x" && allCells[8].innerHTML == "x") ||
        (allCells[0].innerHTML == "x" && allCells[4].innerHTML == "x" && allCells[8].innerHTML == "x") ||
        (allCells[2].innerHTML == "x" && allCells[4].innerHTML == "x" && allCells[6].innerHTML == "x")) {
        alert("Blue wins")

    };

    if ((allCells[0].innerHTML == "0" && allCells[1].innerHTML == "0" && allCells[2].innerHTML == "0") ||
        (allCells[3].innerHTML == "0" && allCells[4].innerHTML == "0" && allCells[5].innerHTML == "0") ||
        (allCells[6].innerHTML == "0" && allCells[7].innerHTML == "0" && allCells[8].innerHTML == "0") ||
        (allCells[0].innerHTML == "0" && allCells[3].innerHTML == "0" && allCells[6].innerHTML == "0") ||
        (allCells[1].innerHTML == "0" && allCells[4].innerHTML == "0" && allCells[7].innerHTML == "0") ||
        (allCells[2].innerHTML == "0" && allCells[5].innerHTML == "0" && allCells[8].innerHTML == "0") ||
        (allCells[0].innerHTML == "0" && allCells[4].innerHTML == "0" && allCells[8].innerHTML == "0") ||
        (allCells[2].innerHTML == "0" && allCells[4].innerHTML == "0" && allCells[6].innerHTML == "0")) {
        alert("Red wins")

    };

    //the problem is that if red/blue wins on the last move, 9 cells are occupied and it's a tie too. How to limit tie?  

    if
        (totalNumberOfMoves.length == 9 &&

        //try to put ! out of the ()
        !(

            (allCells[0].innerHTML == "0" && allCells[1].innerHTML == "0" && allCells[2].innerHTML == "0") ||
            (allCells[3].innerHTML == "0" && allCells[4].innerHTML == "0" && allCells[5].innerHTML == "0") ||
            (allCells[6].innerHTML == "0" && allCells[7].innerHTML == "0" && allCells[8].innerHTML == "0") ||
            (allCells[0].innerHTML == "0" && allCells[3].innerHTML == "0" && allCells[6].innerHTML == "0") ||
            (allCells[1].innerHTML == "0" && allCells[4].innerHTML == "0" && allCells[7].innerHTML == "0") ||
            (allCells[2].innerHTML == "0" && allCells[5].innerHTML == "0" && allCells[8].innerHTML == "0") ||
            (allCells[0].innerHTML == "0" && allCells[4].innerHTML == "0" && allCells[8].innerHTML == "0") ||
            (allCells[2].innerHTML == "0" && allCells[4].innerHTML == "0" && allCells[6].innerHTML == "0")
        )
        &&
        !(

            (allCells[0].innerHTML == "x" && allCells[1].innerHTML == "x" && allCells[2].innerHTML == "x") ||
            (allCells[3].innerHTML == "x" && allCells[4].innerHTML == "x" && allCells[5].innerHTML == "x") ||
            (allCells[6].innerHTML == "x" && allCells[7].innerHTML == "x" && allCells[8].innerHTML == "x") ||
            (allCells[0].innerHTML == "x" && allCells[3].innerHTML == "x" && allCells[6].innerHTML == "x") ||
            (allCells[1].innerHTML == "x" && allCells[4].innerHTML == "x" && allCells[7].innerHTML == "x") ||
            (allCells[2].innerHTML == "x" && allCells[5].innerHTML == "x" && allCells[8].innerHTML == "x") ||
            (allCells[0].innerHTML == "x" && allCells[4].innerHTML == "x" && allCells[8].innerHTML == "x") ||
            (allCells[2].innerHTML == "x" && allCells[4].innerHTML == "x" && allCells[6].innerHTML == "x")

        )


    ) {
        alert("Tie")
    }

}

//reload page if click button reset
document.getElementById("reset").addEventListener("click", event => {
    event.preventDefault()
    window.location.reload()
})

