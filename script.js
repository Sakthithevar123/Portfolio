document.addEventListener('DOMContentLoaded', () => {
    // Custom cursor implementation
    const cursorOuter = document.getElementById('cursor-outer');
    const cursorInner = document.getElementById('cursor-inner');

    let mouseX = 0;
    let mouseY = 0;
    let innerX = 0;
    let innerY = 0;
    const speed = 0.3;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function updateCursor() {
        cursorOuter.style.left = mouseX - cursorOuter.offsetWidth / 2 + 'px';
        cursorOuter.style.top = mouseY - cursorOuter.offsetHeight / 2 + 'px';

        const dx = mouseX - innerX;
        const dy = mouseY - innerY;
        innerX += dx * speed;
        innerY += dy * speed;

        cursorInner.style.left = innerX - cursorInner.offsetWidth / 2 + 'px';
        cursorInner.style.top = innerY - cursorInner.offsetHeight / 2 + 'px';

        requestAnimationFrame(updateCursor);
    }

    updateCursor();

    // Dark Mode Toggle
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
        themeToggle.textContent = '🌙';
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            themeToggle.textContent = '🌙';
            localStorage.setItem('theme', 'dark');
        } else {
            themeToggle.textContent = '☀️';
            localStorage.setItem('theme', 'light');
        }
    });

    // Scroll Animation with Minh-inspired viewport triggering
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.header-content, .profile-section h3, .custom-carousel, .philosophy-card, .education-card, .project-card, .skill-card, .site-footer');
        
        elements.forEach(element => {
            const position = element.getBoundingClientRect();
            if (position.top < window.innerHeight * 0.85 && !element.classList.contains('animated')) {
                element.classList.add('animated');
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll();

    // Initialize the custom carousel
    function initCustomCarousel() {
        const container = document.querySelector('.carousel-container');
        const slides = document.querySelectorAll('.carousel-slide');
        const dotsContainer = document.querySelector('.carousel-dots');
        const prevBtn = document.querySelector('.prev-btn');
        const nextBtn = document.querySelector('.next-btn');
        
        if (!container || !slides.length || !dotsContainer || !prevBtn || !nextBtn) {
            return;
        }
        
        const totalSlides = slides.length;
        let currentIndex = 0;
        let autoplayInterval;
        
        slides.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('carousel-dot');
            if (index === 0) dot.classList.add('active');
            
            dot.addEventListener('click', () => {
                goToSlide(index);
                resetAutoplay();
            });
            
            dotsContainer.appendChild(dot);
        });
        
        updateSlides();
        startAutoplay();
        
        prevBtn.addEventListener('click', () => {
            goToPrev();
            resetAutoplay();
        });
        
        nextBtn.addEventListener('click', () => {
            goToNext();
            resetAutoplay();
        });
        
        container.addEventListener('mouseenter', () => {
            clearInterval(autoplayInterval);
        });
        
        container.addEventListener('mouseleave', () => {
            startAutoplay();
        });
        
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                goToPrev();
                resetAutoplay();
            } else if (e.key === 'ArrowRight') {
                goToNext();
                resetAutoplay();
            }
        });
        
        function goToPrev() {
            currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
            updateSlides();
        }
        
        function goToNext() {
            currentIndex = (currentIndex + 1) % totalSlides;
            updateSlides();
        }
        
        function goToSlide(index) {
            currentIndex = index;
            updateSlides();
        }
        
        function updateSlides() {
            const prevIndex = (currentIndex - 1 + totalSlides) % totalSlides;
            const nextIndex = (currentIndex + 1) % totalSlides;
            
            slides.forEach((slide) => {
                slide.classList.remove('active', 'prev', 'next');
            });
            
            slides[currentIndex].classList.add('active');
            slides[prevIndex].classList.add('prev');
            slides[nextIndex].classList.add('next');
            
            const dots = document.querySelectorAll('.carousel-dot');
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentIndex);
            });
        }
        
        function startAutoplay() {
            autoplayInterval = setInterval(() => {
                goToNext();
            }, 5000);
        }
        
        function resetAutoplay() {
            clearInterval(autoplayInterval);
            startAutoplay();
        }
        
        let touchStartX = 0;
        let touchEndX = 0;
        
        container.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });
        
        container.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        });
        
        function handleSwipe() {
            if (touchEndX < touchStartX - 50) {
                goToNext();
                resetAutoplay();
            } else if (touchEndX > touchStartX + 50) {
                goToPrev();
                resetAutoplay();
            }
        }
    }

    initCustomCarousel();

    // Initialize Radar Chart (JoJo-style stats)
    const ctx = document.getElementById('radar-chart').getContext('2d');
    const radarChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['Strength', 'Speed', 'Precision', 'Endurance', 'Creativity', 'Intelligence'],
            datasets: [{
                label: 'Shakthi\'s Stats',
                data: [60, 75, 80, 70, 90, 85], // Example stats (0-100 scale)
                backgroundColor: 'rgba(255, 69, 0, 0.2)',
                borderColor: 'rgba(255, 69, 0, 1)',
                borderWidth: 2,
                pointBackgroundColor: 'rgba(255, 215, 0, 1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(255, 69, 0, 1)'
            }]
        },
        options: {
            scales: {
                r: {
                    beginAtZero: true,
                    max: 100,
                    ticks: { display: false },
                    grid: { color: 'rgba(255, 255, 255, 0.3)' },
                    angleLines: { color: 'rgba(255, 255, 255, 0.3)' }
                }
            },
            plugins: {
                legend: { display: false }
            }
        }
    });
});