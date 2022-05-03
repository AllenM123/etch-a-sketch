const container = document.getElementById('container');
const test = document.getElementById('test');
const buttons = document.getElementById('newPad');

function makeGrid(rows, cols){
    for (i = 0; i < (rows*cols); i++){
        let square = document.createElement("div");
        // square.innerText = i + 1; // This line numbers the boxes
        container.appendChild(square).className = "gridItem";
        square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "black";
    });
    };
};

function newGame() {
    document.querySelectorAll(".gridItem").forEach(e => e.remove()); //removes current grid
    let heightWidth = prompt('Set height and width size (Max: 100 Min: 1)', "");
    if (heightWidth > 100){
        alert('This Pad is too large (Max: 100)');
        }
    else if (heightWidth <= 0){
        alert('This Pad is too small (Min: 1)');
    }
    else {
        makeGrid(`${heightWidth}`, `${heightWidth}`);
    };
 };


makeGrid(16, 16);

