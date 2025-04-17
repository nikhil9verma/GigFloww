document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.testimonial-slide');
    const dotsContainer = document.querySelector('.slider-dots');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentSlide = 0;
    let slideInterval;
    
    // Create dots based on number of slides
    function createDots() {
        slides.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(index));
            dotsContainer.appendChild(dot);
        });
    }
    
    // Initialize slider
    function initSlider() {
        if (slides.length > 0) {
            slides[0].classList.add('active');
            createDots();
            startAutoSlide();
        }
    }
    
    // Go to specific slide
    function goToSlide(index) {
        if (index < 0) index = slides.length - 1;
        if (index >= slides.length) index = 0;
        
        slides[currentSlide].classList.remove('active');
        document.querySelectorAll('.dot')[currentSlide].classList.remove('active');
        
        slides[index].classList.add('active');
        document.querySelectorAll('.dot')[index].classList.add('active');
        
        currentSlide = index;
    }
    
    // Next slide
    function nextSlide() {
        goToSlide(currentSlide + 1);
    }
    
    // Previous slide
    function prevSlide() {
        goToSlide(currentSlide - 1);
    }
    
    // Auto slide
    function startAutoSlide() {
        slideInterval = setInterval(nextSlide, 5000);
    }
    
    // Stop auto slide on user interaction
    function stopAutoSlide() {
        clearInterval(slideInterval);
    }
    
    // Event listeners
    prevBtn.addEventListener('click', () => {
        prevSlide();
        stopAutoSlide();
        startAutoSlide();
    });
    
    nextBtn.addEventListener('click', () => {
        nextSlide();
        stopAutoSlide();
        startAutoSlide();
    });
    
    // Initialize the slider
    initSlider();
});
