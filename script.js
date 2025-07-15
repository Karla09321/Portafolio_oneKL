// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize Typed.js
    try {
        if (typeof Typed !== 'undefined') {
            new Typed('#typed', {
                strings: [
                    'Karla Yaderni Lizcano Esparza'
                ],
                typeSpeed: 80,
                backSpeed: 40,
                backDelay: 3000,
                startDelay: 500,
                loop: true,
                showCursor: true,
                cursorChar: '|'
            });
        } else {
            // Fallback manual typing effect
            const typedElement = document.getElementById('typed');
            if (typedElement) {
                const text = 'Karla Yaderni Lizcano Esparza';
                let i = 0;
                
                function typeWriter() {
                    if (i < text.length) {
                        typedElement.innerHTML += text.charAt(i);
                        i++;
                        setTimeout(typeWriter, 100);
                    } else {
                        setTimeout(() => {
                            typedElement.innerHTML = '';
                            i = 0;
                            typeWriter();
                        }, 3000);
                    }
                }
                typeWriter();
            }
        }
    } catch (error) {
        console.log('Typed.js not loaded, using fallback');
        const typedElement = document.getElementById('typed');
        if (typedElement) {
            const text = 'Karla Yaderni Lizcano Esparza';
            let i = 0;
            
            function typeWriter() {
                if (i < text.length) {
                    typedElement.innerHTML += text.charAt(i);
                    i++;
                    setTimeout(typeWriter, 100);
                } else {
                    setTimeout(() => {
                        typedElement.innerHTML = '';
                        i = 0;
                        typeWriter();
                    }, 3000);
                }
            }
            typeWriter();
        }
    }

    // Custom cursor
    const cursor = document.querySelector('.cursor');
    if (cursor) {
        let mouseX = 0;
        let mouseY = 0;
        let cursorX = 0;
        let cursorY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        function animateCursor() {
            cursorX += (mouseX - cursorX) * 0.1;
            cursorY += (mouseY - cursorY) * 0.1;
            cursor.style.left = cursorX + 'px';
            cursor.style.top = cursorY + 'px';
            requestAnimationFrame(animateCursor);
        }

        animateCursor();

        // Cursor effects on hover
        const hoverElements = document.querySelectorAll('a, button, .project-card, .skill-box');
        hoverElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.style.transform = 'translate(-50%, -50%) scale(2)';
                cursor.style.opacity = '0.5';
            });
            el.addEventListener('mouseleave', () => {
                cursor.style.transform = 'translate(-50%, -50%) scale(1)';
                cursor.style.opacity = '0.8';
            });
        });
    }

    // Scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all animation elements
    document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .scale-in').forEach(el => {
        observer.observe(el);
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Navbar scroll effect
    let lastScrollTop = 0;
    const navbar = document.querySelector('nav');

    if (navbar) {
        window.addEventListener('scroll', () => {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            if (scrollTop > lastScrollTop && scrollTop > 100) {
                navbar.style.transform = 'translateX(-50%) translateY(-100px)';
            } else {
                navbar.style.transform = 'translateX(-50%) translateY(0)';
            }
            lastScrollTop = scrollTop;
        });
    }

    // Dynamic particles
    const particlesContainer = document.querySelector('.particles');
    if (particlesContainer) {
        function createParticle() {
            try {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.top = '100%';
                particle.style.width = (Math.random() * 5 + 2) + 'px';
                particle.style.height = particle.style.width;
                particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
                particle.style.animationDelay = Math.random() * 2 + 's';
                
                particlesContainer.appendChild(particle);
                
                setTimeout(() => {
                    if (particle.parentNode) {
                        particle.remove();
                    }
                }, 6000);
            } catch (error) {
                console.log('Error creating particle:', error);
            }
        }

        // Create particles periodically
        setInterval(createParticle, 3000);
    }

    // Add staggered animation to skill boxes
    const skillBoxes = document.querySelectorAll('.skill-box');
    skillBoxes.forEach((box, index) => {
        box.style.animationDelay = `${index * 0.2}s`;
    });

    // Add staggered animation to project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.3}s`;
    });

    // Magnetic effect for buttons
    const magneticElements = document.querySelectorAll('.btn-primary, .btn-secondary');
    magneticElements.forEach(el => {
        el.addEventListener('mousemove', (e) => {
            try {
                const rect = el.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                el.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
            } catch (error) {
                console.log('Error in magnetic effect:', error);
            }
        });
        
        el.addEventListener('mouseleave', () => {
            el.style.transform = 'translate(0, 0)';
        });
    });

    // Enhanced scroll progress indicator
    function updateScrollProgress() {
        try {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
            
            // Create progress bar if it doesn't exist
            let progressBar = document.querySelector('.scroll-progress');
            if (!progressBar) {
                progressBar = document.createElement('div');
                progressBar.className = 'scroll-progress';
                progressBar.style.cssText = `
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 0%;
                    height: 3px;
                    background: linear-gradient(90deg, #7f00ff, #b300e6);
                    z-index: 9999;
                    transition: width 0.3s ease;
                `;
                document.body.appendChild(progressBar);
            }
            
            progressBar.style.width = scrolled + '%';
        } catch (error) {
            console.log('Error updating scroll progress:', error);
        }
    }

    window.addEventListener('scroll', updateScrollProgress);

    // Add loading animation
    window.addEventListener('load', () => {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease-in-out';
        
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    });

    // Tech stack icons hover effects
    const techIcons = document.querySelectorAll('.tech-icon');
    techIcons.forEach(icon => {
        icon.addEventListener('mouseenter', () => {
            icon.style.transform = 'translateY(-10px) rotate(5deg) scale(1.1)';
        });
        
        icon.addEventListener('mouseleave', () => {
            icon.style.transform = 'translateY(0) rotate(0deg) scale(1)';
        });
    });

    // Project cards interaction
    const projects = document.querySelectorAll('.project-card');
    projects.forEach(project => {
        project.addEventListener('mouseenter', () => {
            project.style.transform = 'translateY(-15px) scale(1.02)';
        });
        
        project.addEventListener('mouseleave', () => {
            project.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Footer icons animation
    const footerIcons = document.querySelectorAll('.footer-icons a');
    footerIcons.forEach((icon, index) => {
        icon.addEventListener('mouseenter', () => {
            icon.style.transform = 'translateY(-10px) scale(1.2) rotate(360deg)';
        });
        
        icon.addEventListener('mouseleave', () => {
            icon.style.transform = 'translateY(0) scale(1) rotate(0deg)';
        });
    });

    // Performance optimization: Reduce animations on low-end devices
    try {
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        if (mediaQuery.matches) {
            document.documentElement.style.setProperty('--transition', 'none');
            // Disable particle creation
            clearInterval();
        }
    } catch (error) {
        console.log('Media query not supported');
    }

    // Add parallax effect to hero section
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
            heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
        }
    });

    // Initialize intersection observer for counting animations
    const countElements = document.querySelectorAll('.skill-box h4');
    countElements.forEach(el => {
        observer.observe(el);
    });

    // Add typewriter effect to section titles
    const sectionTitles = document.querySelectorAll('.section-title');
    sectionTitles.forEach(title => {
        const originalText = title.textContent;
        title.textContent = '';
        
        observer.observe(title);
        
        title.addEventListener('animationstart', () => {
            let i = 0;
            const typeInterval = setInterval(() => {
                if (i < originalText.length) {
                    title.textContent += originalText.charAt(i);
                    i++;
                } else {
                    clearInterval(typeInterval);
                }
            }, 100);
        });
    });

    console.log('Portfolio loaded successfully! 🚀');
});