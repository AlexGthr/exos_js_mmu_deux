const board = document.querySelector("#board");
const box = document.createElement("div")
box.classList.add("carree")

function showReaction(type, clickedBox) {
    clickedBox.classList.add(type);
    if (type == "clicked") {
        clickedBox.addEventListener("click", function() {
            clickedBox.classList.remove(type);
        })
    }
}

for (let i = 1; i <= 4; i++) {
    const newBox = box.cloneNode(); // Clone des divs
    newBox.innerText = i; // Numéro écrit dans le bloc
    board.appendChild(newBox);

    newBox.addEventListener("click", function() {
        showReaction("clicked", newBox)
    })
}