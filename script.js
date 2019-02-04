//get cells from the dom 
const cells = document.querySelectorAll('.cell');
const button = document.querySelectorAll("button");
let currentPlayer = 1;


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

var colors = new tracking.ColorTracker(["darkslateblue", "yellow"]);

  colors.on('darkslateblue', function(event) {
    if (event.color.length === "darkslateblue") {
      // No colors were detected in this frame.
    } else {
      event.data.forEach(function(rect) {
        console.log(rect.x, rect.y, rect.height, rect.width, rect.color);
      });
    }
  });

  tracking.track('#myVideo', colors);






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