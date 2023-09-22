//Create a grid with specific dimensions 
function gridCreate(rowSquares){
    totalSquares = Math.pow(rowSquares, 2);
    const grid = document.querySelector('.grid');
    
    for(let i = 0; i < totalSquares; i++){
        const newSquare = document.createElement('div');
        newSquare.classList.add('square');
        newSquare.style.width = (720/rowSquares - 1) + 'px';
        newSquare.style.height = (720/rowSquares - 1) + 'px';
        grid.appendChild(newSquare);
    }

    return document.querySelectorAll('.square');
}

function colorChange(node){
    node.classList.add('change');
}

let rowSquares = prompt('Set the number of squares in a row:');
let squares = gridCreate(rowSquares);
let enableDrawing = false;
console.log(squares);

squares.forEach(function(node) {
    node.addEventListener('mousedown', function(){
        node.classList.add('change');
        enableDrawing = true;
    })
    node.addEventListener('mouseover', function(){
        if(enableDrawing) node.classList.add('change');
    })
    window.addEventListener('mouseup', function(){
        enableDrawing = false;
    })
})
