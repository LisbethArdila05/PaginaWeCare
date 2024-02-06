let currentSlide = 0;
const slides = document.querySelectorAll('.slider-item');
const totalSlides = slides.length;
const intervalTime = 6000;

function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.style.visibility = 'visible';
            slide.style.left = '0';
        } else {
            slide.style.visibility = 'hidden';
            slide.style.left = '100%';
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}
setInterval(nextSlide, intervalTime);
// Mostrar el primer slide al cargar la página
showSlide(currentSlide);