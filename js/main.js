// On récupère l'élément #board
const board = document.querySelector("#board");

// On crée une box avec la class "carree"
const box = document.createElement("div")
box.classList.add("carree")

// On crée une boucle qui permettra de crée le nombre de box que l'ont souhaite (ici 4)
for (let i = 1; i <= 4; i++) {
    const newBox = box.cloneNode(); // Clone des divs
    newBox.textContent = i; // Numéro écrit dans le bloc
    board.appendChild(newBox);
}

const carres = document.querySelectorAll(".carree");
carres.forEach((carre) => {
    carre.addEventListener("click", function() {
        carre.classList.toggle("clicked")
    })
})