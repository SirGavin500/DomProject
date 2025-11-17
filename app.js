const pageTitle = document.getElementById("page-title");
const subtitle = document.getElementById("subtitle");

const changeTitleBtn = document.getElementById("change-title-btn");
const colorBtn = document.getElementById("color-btn");
const addCardBtn = document.getElementById("add-card-btn");
const clearCardsBtn = document.getElementById("clear-cards-btn");
const addCustomCardBtn = document.getElementById("add-custom-card-btn");
const changeFontBtn = document.getElementById("change-font-btn");
const titleColorBtn = document.getElementById("title-color-btn");
const hideTitleBtn = document.getElementById("hide-title-btn");
const addBorderBtn = document.getElementById("add-border-btn");
const subtitleColorBtn = document.getElementById("subtitle-color-btn");

const customTextInput = document.getElementById("custom-text-input");
const cardsContainer = document.getElementById("cards-container");

changeTitleBtn.addEventListener("click", () => {
    if (pageTitle.innerText === "DOM Manipulation Playground") {
        pageTitle.innerText = "DOM in Action!";
        subtitle.innerText = "Nice! You changed the DOM!";
    } else {
        pageTitle.innerText = "DOM Manipulation Playground";
        subtitle.innerText = "Click the buttons to see the DOM in action!";
    }
});

colorBtn.addEventListener("click", () => {
    document.body.style.background = "#" + Math.floor(Math.random() * 16777215).toString(16);
});

function createCard(text) {
    const card = document.createElement("div");
    card.className = "card";

    const content = document.createElement("p");
    content.innerText = text;

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete Card";
    deleteBtn.addEventListener("click", () => card.remove());

    card.appendChild(content);
    card.appendChild(deleteBtn);

    return card;
}

addCardBtn.addEventListener("click", () => {
    cardsContainer.appendChild(createCard("I Am A Card Created By the Press of a button."));
});

addCustomCardBtn.addEventListener("click", () => {
    const value = customTextInput.value.trim();
    if (!value) return;

    cardsContainer.appendChild(createCard(value));
    customTextInput.value = "";
});

clearCardsBtn.addEventListener("click", () => {
    cardsContainer.innerHTML = "";
});

changeFontBtn.addEventListener("click", () => {
    pageTitle.style.fontSize = "40px";
});

titleColorBtn.addEventListener("click", () => {
    pageTitle.style.color = "#" + Math.floor(Math.random() * 16777215).toString(16);
});

hideTitleBtn.addEventListener("click", () => {
    pageTitle.style.display = pageTitle.style.display === "none" ? "block" : "none";
});

addBorderBtn.addEventListener("click", () => {
    document.body.style.border = "8px solid black";
});

subtitleColorBtn.addEventListener("click", () => {
    subtitle.style.color = "#" + Math.floor(Math.random() * 16777215).toString(16);
});
