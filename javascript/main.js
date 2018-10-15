/*function onClick() {
    document.getElementById('upDate').setAttribute("style", "display:block");
}*/
$(document).ready(function() {
    $('.main-carousel').flickity({
        // options
        cellAlign: 'left',
        contain: true,
        wrapAround: true,
        prevNextButtons: false
    });

});

function increment() {
    var upDate = document.getElementById('upDate');
    upDate.setAttribute("style", "display:block");
    var number = parseInt(upDate.innerHTML);
    number++;
    upDate.innerHTML = number;
}

var marginY = 0;
var destination = 0;
var speed = 10;
var scroller = null;

function initScroll(elementId) {
    destination = document.getElementById(elementId).offsetTop;
    scroller = setTimeout(function() {
        initScroll(elementId);
    }, 1);

    marginY = marginY + speed;
    if (marginY >= destination) {
        clearTimeout(scroller);
    }
    window.scroll(0, marginY);
}

function toTop(elementId) {
    destination = document.getElementById(elementId).offsetTop;
    scroller = setTimeout(function() {
        toTop(elementId);
    }, 1);
    marginY = marginY - speed;
    if (marginY <= destination) {
        clearTimeout(scroller);
    }
    window.scroll(0, marginY);
}
var validation = document.getElementById('button');
var email = document.getElementById('email');
var email_missing = document.getElementById('email_missing');

validation.addEventListener('Click', f - valid);

function f_valid(e) {
    if (email.validity.valueMissing) {
        e.preventDefault();
        email_missing.textContext = 'Please leave your Email';
        email_missing.style.color = 'red';

    }
}