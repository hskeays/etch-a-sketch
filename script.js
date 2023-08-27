createGrid(16);
let color = "black";

let blackBtn = document.querySelector("#black");
blackBtn.addEventListener("click", function () {
    setColor('black');
});

let randomBtn = document.querySelector("#random");
randomBtn.addEventListener("click", function () {
    setColor('random');
});

let eraserBtn = document.querySelector("#erase");
eraserBtn.addEventListener("click", function () {
    setColor('erase');
});

let shakeBtn = document.querySelector("#shake");
shakeBtn.addEventListener("click", function () {
    resetGrid();
});

let chooseSize = document.querySelector("#size");
chooseSize.addEventListener("click", function () {
    let size = getUserSize();
    createGrid(size);
});

function getUserSize() {
    resetGrid();
    let input = +prompt("Choose a grid size between 2 and 100: ");
    if (input == "") {
        alert("Please choose a number between 2 and 100")
    } else if (input < 2 || input > 100) {
        alert("Please choose a number between 2 and 100")
    } else if (isNaN(input)) {
        alert("Please choose a number between 2 and 100")
    } else {
        return input;
    }
}

function createGrid(size) {
    let grid = document.querySelector("#innerContainer");
    let gridCount = size * size;
    
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    
    for (i = 0; i < gridCount; i++) {
        let gridSquare = document.createElement("div");
        gridSquare.classList.add("squares")
        gridSquare.addEventListener("mouseover", colorSquares)
        grid.insertAdjacentElement("beforeend", gridSquare);
    }
}

function colorSquares() {
    if (color == "random") {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
    } else if (color == "erase") {
        this.style.backgroundColor = "rgb(240, 240, 240)"
    } else {
        this.style.backgroundColor = "black"
    }
}

function setColor(colorChoice) {
    color = colorChoice
}

function resetGrid() {
    let squares = document.querySelectorAll(".squares");
    squares.forEach(squares => squares.style.backgroundColor = "rgb(240, 240, 240)")
}