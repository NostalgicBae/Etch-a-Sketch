/************************************ create cells with div *********************************************/

const box = document.getElementById('box');

let numberOfRows = 4;
let numberOfColumns = 4;

function createSquares(rows, cols) {

    box.style.setProperty('--grid-rows', rows);
    box.style.setProperty('--grid-cols', cols);

    for(i = 0; i < (rows * cols); i++) {
        let cell = document.createElement('div');
        box.appendChild(cell).className = "grid-item";
    };
};

createSquares(numberOfRows,numberOfColumns); 

/******************************** change div color to black when hovered ********************************/

const gridItems = document.querySelectorAll('div.grid-item');

gridItems.forEach((div) => {
    div.addEventListener('mouseover', () => {
        div.style.background = "black";
    });
});

/******************************** clear grid and change grid layout ********************************/

let userInput = "";

const clearBtn = document.getElementById('clear-button').addEventListener('click', function() {
   
    while(box.firstChild){
        box.removeChild(box.firstChild);
    };

    userInput = Number(prompt("Please enter the number of rows and columns" ,"Choose a number between 1 and 64"))
    createSquares(userInput,userInput); 

    const gridItems = document.querySelectorAll('div.grid-item');

    gridItems.forEach((div) => {
        div.addEventListener('mouseover', () => {
            div.style.background = "black";
        });
    });
});





