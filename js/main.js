/**
 * Riya Smile Care Centre - Minimal JavaScript
 * Only essential functionality: navbar toggle, testimonial slider, smooth scroll
 */

(function() {
  'use strict';

  // Mobile Navigation Toggle
  const navToggle = document.querySelector('.nav-toggle');
  const mainNav = document.querySelector('.main-nav');
  
  if (navToggle && mainNav) {
    navToggle.addEventListener('click', function() {
      const isExpanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', !isExpanded);
      mainNav.classList.toggle('active');
    });

    // Close nav when clicking outside
    document.addEventListener('click', function(e) {
      if (!mainNav.contains(e.target) && !navToggle.contains(e.target)) {
        navToggle.setAttribute('aria-expanded', 'false');
        mainNav.classList.remove('active');
      }
    });
  }

  // Mobile Dropdown Toggle
  const dropdowns = document.querySelectorAll('.nav-dropdown > a');
  
  dropdowns.forEach(function(dropdown) {
    dropdown.addEventListener('click', function(e) {
      if (window.innerWidth < 1024) {
        e.preventDefault();
        const parent = this.parentElement;
        parent.classList.toggle('open');
        this.setAttribute('aria-expanded', parent.classList.contains('open'));
      }
    });
  });

  // Testimonials Slider
  const slider = document.querySelector('.testimonials-slider');
  
  if (slider) {
    const track = slider.querySelector('.testimonials-track');
    const dots = slider.querySelectorAll('.slider-dot');
    const cards = slider.querySelectorAll('.testimonial-card');
    let currentIndex = 0;
    let autoSlideInterval;
    
    function getVisibleCards() {
      if (window.innerWidth >= 1024) return 3;
      if (window.innerWidth >= 768) return 2;
      return 1;
    }
    
    function updateSlider() {
      const visibleCards = getVisibleCards();
      const maxIndex = Math.max(0, cards.length - visibleCards);
      
      if (currentIndex > maxIndex) {
        currentIndex = 0;
      }
      
      const percentage = (currentIndex * 100) / visibleCards;
      track.style.transform = 'translateX(-' + percentage + '%)';
      
      dots.forEach(function(dot, index) {
        dot.classList.toggle('active', index === currentIndex);
        dot.setAttribute('aria-selected', index === currentIndex);
      });
    }
    
    function nextSlide() {
      const visibleCards = getVisibleCards();
      const maxIndex = Math.max(0, cards.length - visibleCards);
      currentIndex = currentIndex >= maxIndex ? 0 : currentIndex + 1;
      updateSlider();
    }
    
    // Dot navigation
    dots.forEach(function(dot, index) {
      dot.addEventListener('click', function() {
        currentIndex = index;
        updateSlider();
        resetAutoSlide();
      });
    });
    
    // Auto slide every 5 seconds
    function startAutoSlide() {
      autoSlideInterval = setInterval(nextSlide, 5000);
    }
    
    function resetAutoSlide() {
      clearInterval(autoSlideInterval);
      startAutoSlide();
    }
    
    // Handle window resize
    let resizeTimeout;
    window.addEventListener('resize', function() {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(updateSlider, 100);
    });
    
    // Initialize
    updateSlider();
    startAutoSlide();
    
    // Pause on hover
    slider.addEventListener('mouseenter', function() {
      clearInterval(autoSlideInterval);
    });
    
    slider.addEventListener('mouseleave', function() {
      startAutoSlide();
    });
  }

  // FAQ Accordion
  const faqQuestions = document.querySelectorAll('.faq-question');
  
  faqQuestions.forEach(function(question) {
    question.addEventListener('click', function() {
      const faqItem = this.parentElement;
      const isOpen = faqItem.classList.contains('open');
      
      // Close all other FAQs
      document.querySelectorAll('.faq-item.open').forEach(function(item) {
        item.classList.remove('open');
      });
      
      // Toggle current
      if (!isOpen) {
        faqItem.classList.add('open');
      }
    });
  });

  // Smooth scroll for anchor links (optional enhancement)
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        
        // Close mobile nav if open
        if (mainNav && mainNav.classList.contains('active')) {
          navToggle.setAttribute('aria-expanded', 'false');
          mainNav.classList.remove('active');
        }
      }
    });
  });

  // Form validation (basic)
  const appointmentForm = document.querySelector('.appointment-form form');
  
  if (appointmentForm) {
    appointmentForm.addEventListener('submit', function(e) {
      const name = this.querySelector('[name="name"]');
      const phone = this.querySelector('[name="phone"]');
      const consent = this.querySelector('[name="consent"]');
      let valid = true;
      
      // Clear previous errors
      this.querySelectorAll('.error-message').forEach(function(err) {
        err.remove();
      });
      
      if (name && !name.value.trim()) {
        showError(name, 'Please enter your name');
        valid = false;
      }
      
      if (phone && !phone.value.trim()) {
        showError(phone, 'Please enter your phone number');
        valid = false;
      } else if (phone && !/^[6-9]\d{9}$/.test(phone.value.replace(/\D/g, ''))) {
        showError(phone, 'Please enter a valid 10-digit phone number');
        valid = false;
      }
      
      if (consent && !consent.checked) {
        showError(consent.parentElement, 'Please accept the privacy policy');
        valid = false;
      }
      
      if (!valid) {
        e.preventDefault();
      }
    });
    
    function showError(element, message) {
      const error = document.createElement('span');
      error.className = 'error-message';
      error.textContent = message;
      error.style.color = '#e53e3e';
      error.style.fontSize = '0.875rem';
      error.style.display = 'block';
      error.style.marginTop = '0.25rem';
      element.parentElement.appendChild(error);
    }
  }

})();
