const track = document.querySelector('.carousel-track');
const items = document.querySelectorAll('.carousel-item');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentIndex = 0;

function updateCarousel() {
    const width = items[0].clientWidth;
    track.style.transform = `translateX(-${currentIndex * width}px)`;
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? items.length - 1 : currentIndex - 1;
    updateCarousel();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex === items.length - 1) ? 0 : currentIndex + 1;
    updateCarousel();
});

window.addEventListener('resize', updateCarousel);