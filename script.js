document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    const cards = document.querySelectorAll('.project-container');
    const nextBtn = document.querySelector('.next-btn');
    const prevBtn = document.querySelector('.prev-btn');

    if (!track || cards.length === 0 || !nextBtn || !prevBtn) return;

    let currentIndex = 0;

    function updateCarousel() {
        const cardWidth = cards[0].getBoundingClientRect().width;
        const gap = 32;
        
        track.style.transform = `translateX(-${currentIndex * (cardWidth + gap)}px)`;
    }

    nextBtn.addEventListener('click', () => {
        if (currentIndex < cards.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateCarousel();
    });

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = cards.length - 1;
        }
        updateCarousel();
    });

    window.addEventListener('resize', updateCarousel);
});