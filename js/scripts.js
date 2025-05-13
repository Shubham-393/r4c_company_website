/**
 * R4C Tech Website - Custom JavaScript
 * Basic functionality for the tech company website
 */

document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Set the active nav link
                document.querySelectorAll('.navbar-nav .nav-link').forEach(navLink => {
                    navLink.classList.remove('active');
                });
                this.classList.add('active');
                
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Adjust for navbar height
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Navbar state change on scroll and activate current section
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const sections = document.querySelectorAll('section, header');
    
    function setActiveNavLink() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }
    
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('navbar-shrink');
                navbar.classList.add('shadow');
            } else {
                navbar.classList.remove('navbar-shrink');
                navbar.classList.remove('shadow');
            }
            
            // Update active nav link based on scroll position
            setActiveNavLink();
        });
    }
    
    // Initial check for active section on page load
    setActiveNavLink();
    
    // Add animation classes on scroll
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    function checkIfInView() {
        const windowHeight = window.innerHeight;
        const windowTopPosition = window.scrollY;
        const windowBottomPosition = windowTopPosition + windowHeight;
        
        animatedElements.forEach(element => {
            const elementHeight = element.offsetHeight;
            const elementTopPosition = element.offsetTop;
            const elementBottomPosition = elementTopPosition + elementHeight;
            
            // Check if element is in view
            if (
                (elementBottomPosition >= windowTopPosition) &&
                (elementTopPosition <= windowBottomPosition) &&
                !element.classList.contains('animated')
            ) {
                element.classList.add('animated');
            }
        });
    }
    
    // Check if elements are in view on page load
    setTimeout(checkIfInView, 100);
    
    // Check if elements are in view on scroll
    window.addEventListener('scroll', checkIfInView);
    
    // Animate progress bars when visible
    const capabilityCards = document.querySelectorAll('.capability-card');
    function animateProgressBars() {
        capabilityCards.forEach(card => {
            if (card.classList.contains('animated')) {
                const progressBar = card.querySelector('.progress-bar');
                if (progressBar && !progressBar.style.width) {
                    const value = progressBar.getAttribute('aria-valuenow') + '%';
                    progressBar.style.width = value;
                }
            }
        });
    }
    
    // Initialize progress bar animation
    function initProgressBars() {
        window.addEventListener('scroll', animateProgressBars);
        // Check on initial load
        setTimeout(animateProgressBars, 300);
    }
    
    initProgressBars();
    
    // Add hover effects to partner cards
    const partnerCards = document.querySelectorAll('.partner-card');
    
    partnerCards.forEach(card => {
        // Modern way to handle card flipping for touch devices
        card.addEventListener('touchstart', function() {
            const inner = this.querySelector('.partner-card-inner');
            inner.style.transform = inner.style.transform === 'rotateY(180deg)' ? 'rotateY(0deg)' : 'rotateY(180deg)';
        });
        
        // Add subtle movement on mouse move for partner cards
        card.addEventListener('mousemove', function(e) {
            const inner = this.querySelector('.partner-card-inner');
            if (!inner.style.transform || inner.style.transform === 'rotateY(0deg)') {
                const cardRect = this.getBoundingClientRect();
                const cardCenterX = cardRect.left + cardRect.width / 2;
                const cardCenterY = cardRect.top + cardRect.height / 2;
                
                const mouseX = e.clientX;
                const mouseY = e.clientY;
                
                const angleX = (mouseY - cardCenterY) / (cardRect.height / 2) * 5; // Max 5 degrees
                const angleY = (cardCenterX - mouseX) / (cardRect.width / 2) * 5; // Max 5 degrees
                
                inner.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
            }
        });
        
        card.addEventListener('mouseleave', function() {
            const inner = this.querySelector('.partner-card-inner');
            if (!inner.style.transform.includes('rotateY(180deg)')) {
                inner.style.transform = 'rotateY(0deg)';
            }
        });
    });
    
    // Add interactive effects to about cards
    const aboutCards = document.querySelectorAll('.about-card');
    aboutCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.classList.add('card-hover');
            
            // Find the icon container and add pulse animation
            const iconContainer = this.querySelector('.icon-container');
            if (iconContainer) {
                iconContainer.style.animation = 'pulse 1.5s infinite';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            this.classList.remove('card-hover');
            
            // Remove pulse animation
            const iconContainer = this.querySelector('.icon-container');
            if (iconContainer) {
                iconContainer.style.animation = '';
            }
        });
    });
    
    // Add interactive effects to tech cards
    const techCards = document.querySelectorAll('.tech-card');
    techCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            // Find the icon container and add pulse animation
            const iconContainer = this.querySelector('.tech-card-icon');
            if (iconContainer) {
                iconContainer.style.animation = 'pulse 1.5s infinite';
            }
            
            // Highlight list items sequentially
            const listItems = this.querySelectorAll('.tech-list li');
            listItems.forEach((item, index) => {
                setTimeout(() => {
                    item.style.backgroundColor = 'rgba(30, 92, 179, 0.1)';
                    item.style.transform = 'translateX(5px)';
                }, index * 150);
            });
        });
        
        card.addEventListener('mouseleave', function() {
            // Remove pulse animation
            const iconContainer = this.querySelector('.tech-card-icon');
            if (iconContainer) {
                iconContainer.style.animation = '';
            }
            
            // Reset list items
            const listItems = this.querySelectorAll('.tech-list li');
            listItems.forEach(item => {
                item.style.backgroundColor = '';
                item.style.transform = '';
            });
        });
    });
    
    // Form validation
    const contactForm = document.querySelector('#contact form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            const nameField = document.getElementById('name');
            const emailField = document.getElementById('email');
            const messageField = document.getElementById('message');
            
            let isValid = true;
            
            // Simple validation
            if (!nameField.value.trim()) {
                nameField.classList.add('is-invalid');
                isValid = false;
            } else {
                nameField.classList.remove('is-invalid');
            }
            
            if (!emailField.value.trim() || !isValidEmail(emailField.value)) {
                emailField.classList.add('is-invalid');
                isValid = false;
            } else {
                emailField.classList.remove('is-invalid');
            }
            
            if (!messageField.value.trim()) {
                messageField.classList.add('is-invalid');
                isValid = false;
            } else {
                messageField.classList.remove('is-invalid');
            }
            
            if (!isValid) {
                event.preventDefault();
            }
        });
    }
    
    // Simple email validation helper
    function isValidEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    
    // Initialize all tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
    
    // Add particle/tech effect to the hero section
    const heroSection = document.querySelector('.hero-section');
    if (heroSection && window.innerWidth > 768) {
        createParticleEffect(heroSection);
    }
    
    // Create particle effect for tech theme
    function createParticleEffect(container) {
        const canvas = document.createElement('canvas');
        canvas.classList.add('particle-canvas');
        canvas.style.position = 'absolute';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        canvas.style.pointerEvents = 'none';
        canvas.style.zIndex = '1';
        
        container.appendChild(canvas);
        
        const ctx = canvas.getContext('2d');
        
        // Set canvas dimensions
        function resizeCanvas() {
            canvas.width = container.offsetWidth;
            canvas.height = container.offsetHeight;
        }
        
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
        
        // Particle class
        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2 + 0.5;
                this.speedX = Math.random() * 0.5 - 0.25;
                this.speedY = Math.random() * 0.5 - 0.25;
                // More vibrant colors
                const colorChoice = Math.random();
                if (colorChoice < 0.33) {
                    this.color = 'rgba(30, 92, 179, 0.5)'; // Blue
                } else if (colorChoice < 0.66) {
                    this.color = 'rgba(23, 162, 184, 0.5)'; // Teal
                } else {
                    this.color = 'rgba(253, 126, 20, 0.5)'; // Orange
                }
            }
            
            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                
                if (this.x < 0 || this.x > canvas.width) {
                    this.speedX = -this.speedX;
                }
                
                if (this.y < 0 || this.y > canvas.height) {
                    this.speedY = -this.speedY;
                }
            }
            
            draw() {
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }
        
        // Create particles
        const particles = [];
        const particleCount = Math.min(Math.floor(canvas.width * canvas.height / 20000), 100);
        
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
        
        // Animation loop
        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });
            
            // Draw connections
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
            ctx.lineWidth = 0.5;
            
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    
                    if (distance < 100) {
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }
            
            requestAnimationFrame(animate);
        }
        
        animate();
    }
}); 