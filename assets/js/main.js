document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    
    // Theme toggle functionality
    const themeToggle = document.getElementById('themeToggle');
    const darkModeStyle = document.getElementById('darkModeStyle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Check for saved theme preference or use system preference
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark' || (!currentTheme && prefersDarkScheme.matches)) {
        enableDarkMode();
    }
    
    // Toggle theme on button click
    themeToggle.addEventListener('click', function() {
        if (document.body.classList.contains('dark-mode')) {
            disableDarkMode();
        } else {
            enableDarkMode();
        }
    });
    
    function enableDarkMode() {
        document.body.classList.add('dark-mode');
        darkModeStyle.removeAttribute('disabled');
        localStorage.setItem('theme', 'dark');
    }
    
    function disableDarkMode() {
        document.body.classList.remove('dark-mode');
        darkModeStyle.setAttribute('disabled', 'true');
        localStorage.setItem('theme', 'light');
    }
    
    // Header scroll effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Mobile menu toggle
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mobileNav = document.getElementById('mobileNav');
    const mobileNavOverlay = document.querySelector('.mobile-nav-overlay');
            
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        mobileNav.classList.toggle('show');
        mobileNavOverlay.classList.toggle('active');
        document.body.style.overflow = mobileNav.classList.contains('show') ? 'hidden' : '';
        });
    }
            
    // Close mobile menu when overlay is clicked
    if (mobileNavOverlay) {
        mobileNavOverlay.addEventListener('click', function() {
        mobileMenuToggle.classList.remove('active');
        mobileNav.classList.remove('show');
        this.classList.remove('active');
        document.body.style.overflow = '';
        });
    }
            
    // Close mobile menu when navigation link is clicked
    const mobileNavLinks = document.querySelectorAll('#mobileNav a');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function() {
        mobileMenuToggle.classList.remove('active');
        mobileNav.classList.remove('show');
        mobileNavOverlay.classList.remove('active');
        document.body.style.overflow = '';
        });
    });
    
    // Track CV downloads
    const downloadCvLink = document.querySelector('.download-cv a');
    if (downloadCvLink) {
        downloadCvLink.addEventListener('click', function() {
            // Anda bisa menambahkan analytics tracking di sini
            console.log('CV downloaded');
        });
    }
    
    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const submitButton = this.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            
            try {
                // Change button text to loading
                submitButton.textContent = 'Sending...';
                submitButton.disabled = true;
                
                // Send form data
                const formData = new FormData(this);
                const response = await fetch(this.action, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });
                
                if (response.ok) {
                    alert('Thank you for your message! I will get back to you soon.');
                    this.reset();
                } else {
                    throw new Error('Failed to send message');
                }
            } catch (error) {
                alert('There was an error sending your message. Please try again later or contact me directly at rahma.azizah13@gmail.com');
                console.error('Form submission error:', error);
            } finally {
                // Reset button state
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            }
        });
    }
});