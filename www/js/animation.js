/**
 * Created by flo on 26/09/15.
 */

function goLeft(imageObject){
    imageObject.style.left = parseInt(imageObject.style.left) + 10 + 'px';
}

function goRight(imageObject){
    imageObject.style.right = parseInt(imageObject.style.right) + 10 + 'px';
}

function bounce(imageObject){
    setInterval(goLeft(imageObject),100);
    setInterval(goRight(imageObject),50);
}

function animateArrow(){
    bounce(document.getElementById('chalk-arrow'));
}