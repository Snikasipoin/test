// Слайдер

var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slide");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 5000); // Время смены слайда
}


// Всплывающее окно

const content = document.getElementsByClassName('ramka__full')[0];
const btn = document.getElementsByClassName('bottom-panel__icon')[0];
btn.addEventListener('click', () => {
  content.classList.toggle('close')
  btn.classList.toggle('active')
})