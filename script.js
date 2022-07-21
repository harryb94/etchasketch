let squareCount = 16;

let gridRows = document.querySelector('#gridRows');

function makeGrid(squareCount) {
    for (let i = 0; i < squareCount; i++) {
        let row = document.createElement('div');
        row.classList.add('row');
        gridRows.appendChild(row);
        
        for (let i = 0; i < squareCount; i++){
        let cell = document.createElement('div');
        cell.classList.add('cell');
        row.appendChild(cell); 
        }
        
    }
}

makeGrid(squareCount);

let cells = document.querySelectorAll('.cell');
cells.forEach((cell) => {
    cell.addEventListener('click', () => {
        cell.setAttribute('style', 'background-color: black');
    });
})

let button = document.querySelector('#btn');
button.addEventListener('click', () => {
    clearGrid();
    let squareCount = prompt('Number of squares per side?');
    makeGrid(squareCount);
});

function clearGrid() {
    let child = gridRows.lastElementChild;
    while (child){
        gridRows.removeChild(child);
        child = gridRows.lastElementChild;
    }
    }
