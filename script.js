// Mobile Menu Toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Close mobile menu when clicking on a link
const mobileMenuLinks = mobileMenu.querySelectorAll('a');
mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});

// Hero Carousel
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const dots = document.querySelectorAll('.carousel-dot');
const prevButton = document.getElementById('carousel-prev');
const nextButton = document.getElementById('carousel-next');
let autoplayInterval;

function showSlide(n) {
    // Hide all slides
    slides.forEach(slide => {
        slide.classList.remove('active');
        slide.classList.add('opacity-0');
    });
    
    // Remove active state from all dots
    dots.forEach(dot => {
        dot.classList.remove('active', 'bg-white');
        dot.classList.add('bg-opacity-50');
    });
    
    // Wrap around if necessary
    if (n >= slides.length) {
        currentSlide = 0;
    } else if (n < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = n;
    }
    
    // Show current slide
    slides[currentSlide].classList.add('active');
    slides[currentSlide].classList.remove('opacity-0');
    
    // Highlight current dot
    dots[currentSlide].classList.add('active', 'bg-white');
    dots[currentSlide].classList.remove('bg-opacity-50');
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

// Auto-play carousel
function startAutoplay() {
    autoplayInterval = setInterval(nextSlide, 10000); // Change slide every 10 seconds
}

function stopAutoplay() {
    clearInterval(autoplayInterval);
}

// Event listeners for carousel controls
if (prevButton && nextButton) {
    prevButton.addEventListener('click', () => {
        prevSlide();
        stopAutoplay();
        startAutoplay(); // Restart autoplay after manual navigation
    });

    nextButton.addEventListener('click', () => {
        nextSlide();
        stopAutoplay();
        startAutoplay(); // Restart autoplay after manual navigation
    });
}

// Event listeners for dots
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showSlide(index);
        stopAutoplay();
        startAutoplay(); // Restart autoplay after manual navigation
    });
});

// Start autoplay when page loads
if (slides.length > 0) {
    startAutoplay();
    
    // Pause autoplay when user hovers over carousel
    const carouselContainer = document.querySelector('.carousel-container');
    if (carouselContainer) {
        carouselContainer.addEventListener('mouseenter', stopAutoplay);
        carouselContainer.addEventListener('mouseleave', startAutoplay);
    }
}

// Smooth Scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80; // Account for fixed navbar
            const targetPosition = target.offsetTop - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Back to Top Button
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.remove('hidden');
    } else {
        backToTopButton.classList.add('hidden');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Form Handlers
const newsletterForm = document.getElementById('newsletter-form');
const contactForm = document.getElementById('contact-form');
const resellerForm = document.getElementById('reseller-form');

// Newsletter Form Handler
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = e.target.querySelector('input[type="email"]').value;
        
        // Show success message
        alert('Köszönjük a feliratkozást! Emailt küldtünk a következő címre: ' + email);
        e.target.reset();
    });
}

// Contact Form Handler
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Get submit button
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.textContent;
        
        // Disable button and show loading state
        submitButton.disabled = true;
        submitButton.textContent = 'Küldés...';
        submitButton.classList.add('opacity-50', 'cursor-not-allowed');
        
        // Hide previous messages
        const successMessage = document.getElementById('contact-success');
        const errorMessage = document.getElementById('contact-error');
        
        if (successMessage) successMessage.classList.add('hidden');
        if (errorMessage) errorMessage.classList.add('hidden');
        
        // Get form data
        const formData = new FormData(contactForm);
        
        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData
            });
            
            const data = await response.json();
            
            if (data.success) {
                if (successMessage) {
                    successMessage.classList.remove('hidden');
                    successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
                contactForm.reset();
                
                // Hide success message after 5 seconds
                setTimeout(() => {
                    if (successMessage) successMessage.classList.add('hidden');
                }, 5000);
            } else {
                if (errorMessage) {
                    errorMessage.classList.remove('hidden');
                    errorMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }
        } catch (error) {
            console.error('Error:', error);
            if (errorMessage) {
                errorMessage.classList.remove('hidden');
                errorMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        } finally {
            // Re-enable button and restore original text
            submitButton.disabled = false;
            submitButton.textContent = originalButtonText;
            submitButton.classList.remove('opacity-50', 'cursor-not-allowed');
        }
    });
}

// Reseller Form Handler
if (resellerForm) {
    resellerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const company = e.target.querySelectorAll('input[type="text"]')[0].value;
        const email = e.target.querySelector('input[type="email"]').value;
        const phone = e.target.querySelector('input[type="tel"]').value;
        
        // In a real application, you would send this data to a server
        alert('Köszönjük érdeklődését! Kollégánk hamarosan felveszi Önnel a kapcsolatot.');
        e.target.reset();
    });
}

// Navbar scroll effect - add shadow on scroll
const navbar = document.querySelector('nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
        navbar.classList.add('shadow-xl');
    } else {
        navbar.classList.remove('shadow-xl');
    }
});

// Animate elements on scroll (simple intersection observer)
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.card-hover, .section-pattern');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });
    
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
};

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    animateOnScroll();
});

// Add active state to navigation links based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('text-red-600', 'font-semibold');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('text-red-600', 'font-semibold');
        }
    });
});

// Prevent context menu on images (optional - for protection)
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('contextmenu', (e) => {
        // Uncomment the line below if you want to disable right-click on images
        // e.preventDefault();
    });
});