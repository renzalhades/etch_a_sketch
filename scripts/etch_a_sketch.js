

let brushColor = 'black';
let size = 10;

const brushColorSelect = document.querySelector ('.brush');
const padColorSelect = document.querySelector ('.pad');
const gridSize = document.querySelector ('.grid-size-setting');
const eraser = document.querySelector ('.eraser-setting');
const clean = document.querySelector ('button.clean-setting');
const gridSizeValue = document.querySelector ('.grid-size-value');
const gridContainer = document.querySelector ('.board');
const gridContainers = document.querySelectorAll ('.board');


clean.onclick = () => cleanGrid ();
gridSize.addEventListener ('input', updateGridSize )
padColorSelect.addEventListener ('input', updateGridColor);
brushColorSelect.oninput = (e) => brushColor = e.target.value;
gridContainers.forEach ((grid) => grid.addEventListener ('mouseover', paint))
gridContainers.forEach ((grid) => grid.addEventListener ('mousedown', paint))

let mouseDown = false;
document.body.addEventListener ('mousedown', () => mouseDown = true);
document.body.addEventListener ('mouseup',() => mouseDown = false );



function setGridSize (size) {
    gridContainer.style.setProperty ('--size', size);
    let area = size*size;
    gridSizeValue.innerHTML = size + ' x ' + size;

    for (let x=1; x <area+1; x++) {
        gridCreate = document.createElement ('div');
        gridCreate.classList.add ('grid');
        gridContainer.appendChild (gridCreate);
    }
}

function paint (e) {
    if (e.type === 'mouseover' && mouseDown) { 

        e.target.style.backgroundColor = brushColor;
    }  
}

function cleanGrid () {
    const gridContainer = document.querySelector ('.board');
    gridContainer.innerHTML = '';
    setGridSize (size);
}

function updateGridSize (e) {
    size = e.target.value;
    gridSizeValue.innerHTML = size + ' x ' + size;
    cleanGrid ();
}

function updateGridColor (e) {
    padColor = e.target.value;
    gridContainer.style.setProperty ('--padColor', padColor);
}

setGridSize (size);



