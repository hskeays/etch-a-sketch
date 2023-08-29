createGrid(16);
let mouseDown = false
let color = "black";
let chooseSize = document.querySelector("#size");
let colorPicker = document.querySelector('#colorPicker');
let shakeBtn = document.querySelector("#shake");
let grayscaleBtn = document.querySelector("#grayscale");
let randomBtn = document.querySelector("#random");
let eraserBtn = document.querySelector("#erase");

document.body.onmousedown = () => (mouseDown = true);

document.body.onmouseup = () => (mouseDown = false);

colorPicker.oninput = (e) => setDefaultColor(e.target.value);

grayscaleBtn.addEventListener("click", function () {
    setColor('grayscale');
});

randomBtn.addEventListener("click", function () {
    setColor('random');
});

eraserBtn.addEventListener("click", function () {
    setColor('erase');
});

shakeBtn.addEventListener("click", function () {
    resetGrid();
});

chooseSize.addEventListener("click", function () {
    let size = getUserSize();
    createGrid(size);
});

function getUserSize() {
    resetGrid();
    let input = +prompt("Choose a number between 1 and 75: ");
    if (input == "") {
        alert("Choose a number between 1 and 75: ")
    } else if (input < 1 || input > 75) {
        alert("Choose a number between 1 and 75: ")
    } else if (isNaN(input)) {
        alert("Choose a number between 1 and 75: ")
    } else {
        return input;
    }
}

function createGrid(size) {
    let grid = document.querySelector(".gridContainer");
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

function setDefaultColor(newColor) {
    color = newColor;
}

function setColor(colorChoice) {
    color = colorChoice
}

function colorSquares(e) {
    if (e.type === 'mouseover' && !mouseDown) return
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
        this.style.backgroundColor = color;
    }
}

function resetGrid() {
    let squares = document.querySelectorAll(".squares");
    squares.forEach(squares => squares.style.backgroundColor = "rgb(240, 240, 240)");
    squares.forEach(squares => squares.style.opacity = 0.1);
}