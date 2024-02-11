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

function changeMsg() {
    document.getElementById("msg1").innerHTML = "there's a message for you!";
    document.getElementById("msg2").innerHTML = "click to <b>flip the card</b>";
}


function clicked() {
    if (click == 0) {
        openCard();
        changeMsg();
        click++;
    }
    else {
        flipCard();
    }
};