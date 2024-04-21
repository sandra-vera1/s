//#region Carrousel
const img = ["img/Book1.jpg", "img/Book2.jpg", "img/Book3.jpg", "img/Book4.jpg", "img/Book5.jpg"];
var posicion = 0;

function getNext() {
    posicion++;
    if (posicion == img.length) posicion = 0;
    document.getElementById("im").src = img[posicion];

}

function getPrevious() {
    posicion--;
    if (posicion < 0) posicion = img.length - 1;
    document.getElementById("im").src = img[posicion];
}
//#endregion
//#region Change background color
function changeBackground() {
    let red = Math.floor((Math.random() * 255) + 1);
    let green = Math.floor((Math.random() * 255) + 1);
    let blue = Math.floor((Math.random() * 255) + 1);
    document.getElementsByTagName("body")[0].style.backgroundColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
    document.getElementById("answer").innerHTML = 'The new color is: rgb(' + red + ',' + green + ',' + blue + ')';
}
//#endregion
//#region Accordion
var accItem = document.getElementsByClassName('accordionItem');
var accIHD = document.getElementsByClassName('accordionItemHeading');
for (i = 0; i < accIHD.length; i++) {
    accIHD[i].addEventListener('click', toggleItem, false);
}
function toggleItem() {
    var itemClass = this.parentNode.className;
    for (i = 0; i < accItem.length; i++) {
        accItem[i].className = 'accordionItem close';
    }
    if (itemClass == 'accordionItem close') {
        this.parentNode.className = 'accordionItem open';
    }
}
//#endregion