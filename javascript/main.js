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
var validation = document.getElementById('button_send');
var email = document.getElementById('email');
var email_missing = document.getElementById('email_missing');
var expression = /^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-9]+.)+[a-zA-Z]{2,}))$/;



function f_valid(e) {
    if (email.validity.valueMissing) {
        e.preventDefault();
        email_missing.textContext = 'Please leave your Email';
        email_missing.style.color = 'red';

    } else if (expression.test(email.value) == false) {
        event.preventDefault();
        email_missing.textContent = 'invalid email';
        email_missing.style.color = 'orange';

    } else {

    }
}