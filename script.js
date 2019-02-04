//get cells from the dom 
const cells = document.querySelectorAll('.cell');
const reset = document.querySelector('.reset');
let currentPlayer = 1;

reset.addEventListener('click',function(evt) {
        for (let i = 0; i < cells.length; i++) {
            const element = cells[i];
        }
        element.style.pointerEvents = "auto";
        element.style.backgroundColor = "white";
    );
}

    

    


    
for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click',function(evt){
        if(currentPlayer === 1){
        this.style.backgroundColor ="yellow";
        currentPlayer=2;
    }
        else {
            this.style.backgroundColor ="darkslateblue";
            currentPlayer=1;
        }
        this.style.pointerEvents="none";
})
}
//https://levelup.gitconnected.com/building-a-tic-tac-toe-game-app-with-javascript-5916e58071fb

// function checkForWinner() {
//     console.log("checking for winner...")
//     var winner
//     var eightWinningCombos = [
//       "#one.COLOR, #two.COLOR, #three.COLOR",
//       "#four.COLOR, #five.COLOR, #six.COLOR",
//       "#seven.COLOR, #eight.COLOR, #nine.COLOR",
//       "#one.COLOR, #four.COLOR, #seven.COLOR",
//       "#two.COLOR, #five.COLOR, #eight.COLOR",
//       "#three.COLOR, #six.COLOR, #nine.COLOR",
//       "#one.COLOR, #five.COLOR, #nine.COLOR",
//       "#seven.COLOR, #five.COLOR, #three.COLOR"
//     ]
//     var blueWinArray = getWinningArray(eightWinningCombos, "darkslateblue")
//     var yellowWinArray = getWinningArray(eightWinningCombos, "yellow")
//     var blueWins = blueWinArray.includes(true)
//     var yellowWins = redWinArray.includes(true)
//     var fullGrid = getYellowCount() + getBlueCount()
//     var draw = (fullGrid === 9) && (!blueWins) && (!yellowWins)
    
//     if (blueWins) {
//       playerOneWins()
//       return winner = blueWins
//     }
//     if (yellowWins) {
//       computerWins()
//       return winner = yelloWins
//     }
//     if (draw) {
//       drawGame()
//       return winner = draw
//     } else {
//       console.log('game on...')
//     }
//   }





// function connectFour('yellow','darkslateblue') {
//     yellow.win();
//     for (let i = 0; i < cells.length; i++) {
//         const yellow = array[i];
        
//     }
    
// }
// reset.addEventListener('click',function (evt) {
//     evt.preventDefault();
// for (let i = 0; i < cells.length; i++) {
//     const element = cells[i];
//     element.style.pointerEvents = "auto";
//     element.style.backgroundColor = "white";
// }
// }
// );

// button.addEventListener('click',function(window) {
//     window.location.reload(true);
// })