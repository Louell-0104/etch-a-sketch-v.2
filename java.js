//Size of the grid
// const gridSize = 16;
const reset = document.querySelector('button')
const container = document.querySelector('.container');

    const createGrid = (gridAmount) => {
        const wrapper = document.createElement('div');
        wrapper.classList.add('wrapper');
        //Creates the row of the grid equal to the GridAmount
        for (let i=0; i < gridAmount; i++){
            const row = document.createElement('div');
            row.classList.add('gridrow');
            //Creates the boxes for the rows
            for (let j=0; j < gridAmount; j++){
                const widthHeight = 960/gridAmount;
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
        wrapper.appendChild(row);
        }
        container.appendChild(wrapper);
    }



reset.addEventListener('click', () => {
    let userSize = Number(prompt('How many dimensions do you want for your new grid?'))

    while (userSize > 100){
        userSize = Number(prompt('Number picked is to big, pick another number that is less than 100 .'))
    }

    const wrapper = document.querySelector('.wrapper');
    if (!wrapper){
        createGrid(userSize)
    }
    else{
        wrapper.remove();
        createGrid(userSize);
    }
})