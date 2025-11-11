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
newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
    
    // Show success message
    alert('Köszönjük a feliratkozást! Emailt küldtünk a következő címre: ' + email);
    e.target.reset();
});

// Contact Form Handler
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const formData = new FormData(e.target);
    const name = e.target.querySelector('input[type="text"]').value;
    const email = e.target.querySelector('input[type="email"]').value;
    const message = e.target.querySelector('textarea').value;
    
    // In a real application, you would send this data to a server
    // For now, we'll just show a success message
    alert('Köszönjük az üzenetét! Hamarosan felvesszük Önnel a kapcsolatot.');
    e.target.reset();
});

// Reseller Form Handler
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

// Console welcome message
console.log('%c🃏 Kvíz Játékkártya Kft.', 'color: #dc2626; font-size: 24px; font-weight: bold;');
console.log('%cAmi összehozza a társaságot', 'color: #991b1b; font-size: 16px;');
console.log('%cWebsite created with ❤️', 'color: #ef4444; font-size: 12px;');
