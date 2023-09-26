//Create a grid with specific dimensions 
function gridCreate(rowSquares){
    const grid = document.querySelector('.grid');
    grid.innerHTML = '';
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

//Apply color changing characteristics to a grid
function colorChange(squares){
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
}

//Have the page always start with an initial grid
const startingSquares = 16
const initialSquares = gridCreate(startingSquares);
let enableDrawing = false;
colorChange(initialSquares);

//The 'Create' button
const create = document.querySelector('.create');
const field = document.querySelector('.field');
const error = document.querySelector('.error');
create.addEventListener('click', function(){
    const fieldRounded = Math.floor(field.value)
    if(1 <= fieldRounded && fieldRounded <= 100){
    error.innerHTML = "";
    const squares = gridCreate(fieldRounded);
    colorChange(squares);
    } else {
        error.textContent = 'Please enter an integer from 1 to 100.'
    }
})

//The 'Clear' Button
const clear = document.querySelector('.clear')
clear.addEventListener('click', function(){
    const clearSquares = document.querySelectorAll('.square')
    clearSquares.forEach(function(square){
        square.classList.remove('change');
    })
})