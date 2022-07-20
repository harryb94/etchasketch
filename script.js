let squareCount = 16;

//let container = document.querySelector('#container');
let gridRows = document.querySelector('#gridRows');
//let gridColumns = document.querySelector('#gridColumns');

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
console.log(squareCount);