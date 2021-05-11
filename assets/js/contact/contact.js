/*--------------------------SMOOTH SCROLL CODE START--------------------------------------------*/

window.addEventListener('scroll', function () {
    var header = document.getElementById('header');
    header.classList.toggle('active', window.scrollY > 0)
})


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
