//Create a grid with specific dimensions
function gridCreate(){
    let squares = 256;
    const grid = document.querySelector('.grid');
    for(let i = 0; i < squares; i++){
        const newSquare = document.createElement('div');
        newSquare.classList.add('square');
        grid.appendChild(newSquare);
    }
}

gridCreate()