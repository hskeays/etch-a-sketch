createGrid(16);
let color = "black";

let chooseSize = document.querySelector("#size");
chooseSize.addEventListener("click", function () {
    let size = getUserSize();
    createGrid(size);
});

function getUserSize() {
    shakeGrid();
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

    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let gridCount = size * size;

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

function shakeGrid() {
    let squares = document.querySelectorAll(".squares");
    squares.forEach(squares => squares.style.backgroundColor = "rgb(240, 240, 240)")
}