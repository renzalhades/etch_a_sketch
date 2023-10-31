

function gridSize (size) {
    const gridContainer = document.querySelector ('.board');
    gridContainer.style.setProperty ('--size', size);

    size = size*size;
    for (let x=1; x <size+1; x++) {
        gridCreate = document.createElement ('div');
        gridCreate.classList.add ('grid', 'element' + x);
        gridContainer.appendChild (gridCreate);
    }

}

gridSize(2)

