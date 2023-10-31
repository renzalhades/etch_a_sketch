

let color = 'black';
let INITIAL_SIZE = 30;



setGridSize (12);

const colorPicker = document.querySelector ('.color-picker');
const gridSize = document.querySelector ('.grid-size-setting');
const eraser = document.querySelector ('.eraser-setting');
const clean = document.querySelector ('button.clean-setting');

clean.onclick = () => cleanGrid ();
colorPicker.oninput = (e) => color = e.target.value;
gridSize.oninput = (e) => size = e.target.value;

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

function setGridSize (size) {
    const gridContainer = document.querySelector ('.board');
    gridContainer.style.setProperty ('--size', size);
    let area = size*size;
    for (let x=1; x <area+1; x++) {
        gridCreate = document.createElement ('div');
        gridCreate.setAttribute ('id', ''+x)
        gridContainer.appendChild (gridCreate);
        gridCreate.style.backgroundColor ='white';
        gridCreate.addEventListener ('mouseover', paint);
        gridCreate.addEventListener ('mousedown', paint);
    }
}

function paint (e) {

    if (e.type === 'mouseover' && mouseDown) {
        e.target.style.backgroundColor = color;
    }
    
}

function cleanGrid () {
    const gridContainer = document.querySelector ('.board');
    gridContainer.innerHTML = '';
    setGridSize (size);
    // 
}




