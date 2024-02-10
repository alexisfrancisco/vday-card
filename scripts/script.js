let click = 0;

function rotateCard() {
        if (click == 0) {
            var img = document.getElementById("card")
            img.setAttribute("class", "rotated-card")
        }
        else {
            img.style.width = "450px";
            img.style.height = "300px";
        }
    click++;
}