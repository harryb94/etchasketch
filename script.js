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