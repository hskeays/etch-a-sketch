const div = document.getElementById("container");
const pixels = document.getElementsByClassName("box");
for (i = 0; i < 4104; i++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("box")
    div.appendChild(newDiv);
}

const array = [].slice.call(pixels);
array.forEach(element => {
    element.addEventListener('mouseover', () => {
        element.style.backgroundColor = "black";
    });
});