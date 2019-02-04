//get cells from the dom 
const cells = document.querySelectorAll('.cell');
const reset = document.querySelectorAll('.reset');
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

reset.addEventListener('click', function(evt){
    evt.preventDefault();
for (let i = 0; i < cells.length; i++) {
    const element = cells[i];
    element.style.pointerEvents = "auto";
    element.style.backgroundColor = "white";
}
}
);