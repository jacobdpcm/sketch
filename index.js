//Create a grid with specific dimensions 
function gridCreate(rowSquares){
    
    const grid = document.querySelector('.grid');
    for(let i = 0; i < rowSquares; i++){
        const newColumn = document.createElement('div');
        newColumn.classList.add('column');
        grid.appendChild(newColumn);

        for(let j = 0; j < rowSquares; j++){
            const newSquare = document.createElement('div');
            newSquare.classList.add('square');
            
            
            newColumn.appendChild(newSquare);
        }
    }
    return document.querySelectorAll('.square');
}

function colorChange(node){
    node.classList.add('change');
}

let rowSquares = 16
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
