// On récupère l'élément #board
const board = document.querySelector("#board");

// On crée une box avec la class "carree"
const box = document.createElement("div")
box.classList.add("carree")

// On utilise une function pour ajouter/supprimer la classe clicked lors d'un click sur une box
function showReaction(type, clickedBox) {
    clickedBox.classList.add(type);
    if (type == "clicked") {
        clickedBox.addEventListener("click", function() {
            clickedBox.classList.remove(type);
        })
    }
}

// On crée une boucle qui permettra de crée le nombre de box que l'ont souhaite (ici 4)
for (let i = 1; i <= 4; i++) {
    const newBox = box.cloneNode(); // Clone des divs
    newBox.innerText = i; // Numéro écrit dans le bloc
    board.appendChild(newBox);

    newBox.addEventListener("click", function() {
        showReaction("clicked", newBox)
    })
}