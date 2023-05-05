const prevBtn = document.querySelector('.carousel-button-prev')
const nextBtn = document.querySelector('.carousel-button-next')
const list = document.querySelectorAll(".carousel li");

const totalSlides = list.length;
let slideIndex = 1;

function showSlide(n){
    if(n > totalSlides) slideIndex = 1;

    if(n < 1) slideIndex = totalSlides;

    list.forEach( el => el.classList.remove('carousel-item-visible'));

    list[slideIndex - 1].classList.add('carousel-item-visible');
}

const plusOrMinusSlide = (n) => showSlide(slideIndex += n)

prevBtn.addEventListener('click',() => plusOrMinusSlide(-1))
nextBtn.addEventListener('click',() => plusOrMinusSlide(1))

setInterval(() => plusOrMinusSlide(1),1500)