// Main JavaScript for R4C Tech website

document.addEventListener('DOMContentLoaded', function() {
    // Initialize Bootstrap tooltips
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
    
    // Initialize Bootstrap popovers
    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
    const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));
    
    // Navbar shrink on scroll
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('navbar-shrink');
            } else {
                navbar.classList.remove('navbar-shrink');
            }
        });
    }
    
    // Progress bar animation
    const progressBars = document.querySelectorAll('.progress-bar');
    if (progressBars.length > 0) {
        const animateProgressBars = function() {
            progressBars.forEach(bar => {
                const value = bar.getAttribute('aria-valuenow');
                bar.style.width = value + '%';
            });
        };
        
        // Animate on scroll
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(animateProgressBars, 300);
                    observer.unobserve(entry.target);
                }
            });
        }, {threshold: 0.2});
        
        document.querySelectorAll('.capability-progress').forEach(el => {
            observer.observe(el);
        });
    }
    
    // Animate elements on scroll
    const animateElements = document.querySelectorAll('.animated');
    if (animateElements.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('appear');
                    observer.unobserve(entry.target);
                }
            });
        }, {threshold: 0.1});
        
        animateElements.forEach(el => {
            observer.observe(el);
            
            // Set initial state
            el.classList.add('invisible');
        });
    }
    
    // Form validation styling
    const forms = document.querySelectorAll('.needs-validation');
    if (forms.length > 0) {
        Array.from(forms).forEach(form => {
            form.addEventListener('submit', event => {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                
                form.classList.add('was-validated');
            }, false);
        });
    }
    
    // Back to top button
    const backToTopButton = document.getElementById('back-to-top');
    if (backToTopButton) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                backToTopButton.classList.add('show');
            } else {
                backToTopButton.classList.remove('show');
            }
        });
        
        backToTopButton.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({top: 0, behavior: 'smooth'});
        });
    }
    
    // Add CSS class to animate elements sequentially
    document.querySelectorAll('[data-sequential-animation]').forEach((container, index) => {
        const items = container.querySelectorAll('[data-animation-item]');
        items.forEach((item, idx) => {
            item.style.animationDelay = (0.1 * idx) + 's';
            item.classList.add('fadeInUp');
        });
    });
});

// CSS class for animations
document.addEventListener('DOMContentLoaded', function() {
    // Add .appear class to trigger animations
    document.querySelectorAll('.animated').forEach(function(el) {
        el.classList.remove('invisible');
        el.classList.add('appear');
    });
});

// Filter functionality for project/portfolio items
function filterItems(category) {
    const items = document.querySelectorAll('.filterable-item');
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    // Update active button state
    filterButtons.forEach(btn => {
        if (btn.getAttribute('data-filter') === category) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    // Show/hide items based on category
    items.forEach(item => {
        const itemCategories = item.getAttribute('data-categories').split(' ');
        
        if (category === 'all' || itemCategories.includes(category)) {
            item.style.display = 'block';
            setTimeout(() => {
                item.classList.add('show');
            }, 50);
        } else {
            item.classList.remove('show');
            setTimeout(() => {
                item.style.display = 'none';
            }, 300);
        }
    });
} 