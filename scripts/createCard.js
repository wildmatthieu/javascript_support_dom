console.log(houseToRent);

function createCard(aRents, onlyAvailables) {
  for (const rent of aRents) {
    if (
      onlyAvailables === false ||
      (onlyAvailables === true && rent.available === true)
    ) {
      let cardTitle = document.createElement("h2");
      cardTitle.classList.add("card-title");
      cardTitle.innerText = rent.name;

      let cardParagraph = document.createElement("p");
      cardParagraph.classList.add("card-description");
      cardParagraph.innerText = rent.desc;

      let cardButton = document.createElement("button");
      cardButton.classList.add("card-button");
      cardButton.innerText = "I want it !";

      let cardBody = document.createElement("div");
      cardBody.classList.add("card-body");

      cardBody.appendChild(cardTitle);
      cardBody.appendChild(cardParagraph);
      cardBody.appendChild(cardButton);

      let eCard = document.createElement("div");
      eCard.classList.add("card");

      eCard.appendChild(cardBody);

      let eCards = document.getElementById("cards");
      eCards.appendChild(eCard);
    }
  }
}

createCard(houseToRent, false);

document.getElementById("available-checkbox").addEventListener("click", () => {
  alert("coucou !");

  let eCards = document.getElementById("cards");
  eCards.replaceChildren();

  createCard(houseToRent, true);
});
