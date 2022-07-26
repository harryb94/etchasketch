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

function draw() {
let cells = document.querySelectorAll('.cell');
cells.forEach((cell) => {
    cell.addEventListener('mouseover', () => {
        cell.setAttribute('style', 'background-color: black');
    });
})
}

function clearGrid() {
    let child = gridRows.lastElementChild;
    while (child){
        gridRows.removeChild(child);
        child = gridRows.lastElementChild;
    }
    }

let button = document.querySelector('#btn');
button.addEventListener('click', () => {
    clearGrid();
    let squareCount = prompt('Number of squares per side? (Max: 100)');
    if (squareCount > 100){
        alert('Invalid input');
    }
    else{
        makeGrid(squareCount);
        draw();
    }
});

makeGrid(squareCount);
draw();
