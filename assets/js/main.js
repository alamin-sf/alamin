/*--------------------------SMOOTH SCROLL CODE START--------------------------------------------*/

window.addEventListener('scroll', function () {
    var header = document.getElementById('header');
    header.classList.toggle('active', window.scrollY > 0)
})



/*----------------SLIDER JAVASCRIPT CODE START----------------------------------*/

const slides = document.querySelector('.slides').children;
const pre = document.querySelector('.pre');
const next = document.querySelector('.next');
var index = 0;

pre.addEventListener('click', function () {
    preSlider();
    restTimer();
})

next.addEventListener('click', function () {
    nextSlider();
    restTimer();
})

function preSlider() {
    if (index == 0) {
        index = slides.length - 1;
    } else {
        index--;
    }
    changeSlide();
}

function nextSlider() {
    if (index == slides.length - 1) {
        index = 0;
    } else {
        index++;
    }
    changeSlide();
}

function changeSlide() {

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
    }
    slides[index].classList.add('active');
}

function restTimer() {

    clearInterval(time);
    time = setInterval(autoplay, 10000);

}

function autoplay() {

    nextSlider();
}
var time = setInterval(autoplay, 10000);




/*----------------SLIDER JAVASCRIPT CODE END----------------------------------*/


/*----------------SMOOTH SCROLL JQUERY CODE START----------------------------------*/
$(function () {
    $('.nav .menu ul li a,.nav .responsive ul li a,.nav .logo a').on('click', function () {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000)
        return false;


    })
})
/*------------------------RESPONSIVE TOGGLE BUTTON--------------------------------*/



var close = document.getElementById('close');
var open = document.getElementById('open');
var toggle = document.getElementById('toggle');
    function openMenu(){
        toggle.style.left = "0";
        open.style.display = "none";
        close.style.display = "block";
    }
function closeMenu(){
        toggle.style.left = "-110%";
        close.style.display = "none";
        open.style.display = "block";
    }
