// INITIALIZE VALUES
let brushColor = 'black';
let padColor = 'white';
let mouseDown = false;
let size = 10;
let rainbowCounter =0;

const rainbowColor =['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']
const brushColorSelect = document.querySelector ('.brush');
const padColorSelect = document.querySelector ('.pad');
const gridSize = document.querySelector ('.grid-size-setting');
const eraser = document.querySelector ('.eraser-setting');
const rainbow = document.querySelector ('.rainbow-setting');
const clean = document.querySelector ('button.clean-setting');
const gridSizeValue = document.querySelector ('.grid-size-value');
const gridContainer = document.querySelector ('.board');
const gridContainers = document.querySelectorAll ('.board');

clean.addEventListener ('click', cleanGrid);
gridSize.addEventListener ('input', updateGridSize );
padColorSelect.addEventListener ('input', updateGridColor);
brushColorSelect.addEventListener ('input', (e) => brushColor = e.target.value)
gridContainers.forEach ((gridBox) => gridBox.addEventListener ('mouseover', paint))
gridContainers.forEach ((gridBox) => gridBox.addEventListener ('mousedown', paint))
eraser.addEventListener ('click', toggleMode);
rainbow.addEventListener('click', toggleMode);
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
    let paint = '';
    if (e.type === 'mouseover' && mouseDown) { 
        switch (true) {
            case (rainbow.classList.contains('active')): {
                paint = rainbowColor [rainbowCounter%7];
                rainbowCounter++;
                break;
            }
            case (eraser.classList.contains('active')): {
                paint= padColor;
                break;
            }
            default: {
                paint = brushColor;
                break;
            }
        }
        e.target.style.backgroundColor = paint;
        console.log (paint);
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
    cleanGrid ()
    return padColor;
}

function toggleMode (e) {
    console.log (e.target.classList.value)
   
       if (e.target.classList.value == "eraser-setting" ||
           e.target.classList.value == "eraser-setting active") {
            rainbow.classList.remove ('active');
            eraser.classList.toggle ('active'); 
        }
    
        else if  (e.target.classList.value == "rainbow-setting" || 
                  e.target.classList.value == "rainbow-setting active") {
            eraser.classList.remove ('active');
            rainbow.classList.toggle ('active');
        }
}

setGridSize (size);


