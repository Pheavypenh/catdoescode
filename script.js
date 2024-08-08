
document.addEventListener('DOMContentLoaded', function() {
const carouselItems = document.querySelectorAll('.carousel-item');

carouselItems.forEach(item => {
    const infoText = item.getAttribute('data-info');
    const infoDiv = item.querySelector('.carousel-info');

    if (infoDiv && infoText) {
        infoDiv.textContent = infoText;
    }
});
});
