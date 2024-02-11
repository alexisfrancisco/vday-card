let click = 0;

function openCard() {
    var card = document.getElementById("card")
    card.setAttribute("class", "card-opened");
};

const card = document.querySelector(".card-opened");


function flipCard() {
    const card = document.querySelector(".card-opened");
    card.classList.toggle("show");
};


function clicked() {
    if (click == 0) {
        openCard();
        click++;
    }
    else {
        flipCard()
    }
};