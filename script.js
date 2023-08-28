createGrid(16);
let color = "black";

let blackBtn = document.querySelector("#black");
blackBtn.addEventListener("click", function () {
    setColor('black');
});

let grayscaleBtn = document.querySelector("#grayscale");
grayscaleBtn.addEventListener("click", function () {
    setColor('grayscale');
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
    let input = +prompt(`Choose a number between 1 and 100.
The larger the number the smaller the pen! `);
    if (input == "") {
        alert("Please choose a number between 2 and 100")
    } else if (input < 1 || input > 100) {
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
        if (this.style.opacity < 0.9) {
            this.style.opacity = 1;
        }
    } else if (color == "erase") {
        this.style.backgroundColor = "rgb(240, 240, 240)"
        this.style.opacity = 0.1;
    } else if (color == "grayscale") {
        this.style.backgroundColor = "rgb(0, 0, 0)"
        if (this.style.opacity <= 0.9) {
            this.style.opacity = +this.style.opacity + 0.1;
        } else if (this.style.opacity > 0.9) {
            this.style.opacity = +this.style.opacity - 0.9;
        }
    } else {
        this.style.opacity = 1;
        this.style.backgroundColor = "black";
    }
}

function setColor(colorChoice) {
    color = colorChoice
}

function resetGrid() {
    let squares = document.querySelectorAll(".squares");
    squares.forEach(squares => squares.style.backgroundColor = "rgb(240, 240, 240)");
    squares.forEach(squares => squares.style.opacity = 0.1);
}