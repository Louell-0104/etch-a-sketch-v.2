//Size of the grid
const gridSize = 16;
// const resetButton = document.querySelector('button')
const container = document.querySelector('.container');
// container.classList.add('container');

const createGrid = (gridAmount) => {
    //Creates the row of the grid equal to the GridAmount
    for (let i=0; i < gridAmount; i++){
        const row = document.createElement('div');
        row.classList.add('gridrow');
        //Creates the boxes for the rows
        for (let j=0; j < gridAmount; j++){
            const widthHeight = 450/gridSize;
            const box = document.createElement('div');
            box.classList.add('gridbox');
            box.style.width = `${widthHeight}px`;
            box.style.height = `${widthHeight}px`;

            //change bgcolor with mouseenter
            box.addEventListener('mouseenter', () => {
                box.style.backgroundColor = 'black';
            })
            row.appendChild(box);
        }
    container.appendChild(row);
    }
}

createGrid(gridSize);
// const div = document.createElement('div');