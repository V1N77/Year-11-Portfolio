var images = [
    'Relaxatron1.gif',
    'Relaxatron2.gif',
    'Relaxatron3.gif',
    'Relaxatron4.gif',
    'Relaxatron5.gif',
    'Relaxatron6.gif'
];

var img = document.getElementById("img");

function imgDisp(num) {
    var num = Math.floor(Math.random() * 6) 
    img.style.backgroundImage = 'url("' + images[num] +'")';
    img.style.backgroundRepeat = "no-repeat";
}
imgDisp();