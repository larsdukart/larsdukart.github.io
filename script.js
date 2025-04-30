document.addEventListener("DOMContentLoaded", function () {
    // Initialize particles.js
    particlesJS("interactive-bg", {
      particles: {
        number: { 
          value: 80, 
          density: { 
            enable: true, 
            value_area: 800 
          } 
        },
        color: { 
          value: "#ffffff" 
        },
        shape: { 
          type: "circle" 
        },
        opacity: { 
          value: 0.15, 
          random: true 
        },
        size: { 
          value: 3, 
          random: true 
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: "#ffffff",
          opacity: 0.1,
          width: 1,
        },
        move: { 
          enable: true, 
          speed: 1.5, 
          direction: "none", 
          random: false, 
          straight: false,
          out_mode: "out",
          bounce: false,
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { 
            enable: true, 
            mode: "grab" 
          },
          onclick: { 
            enable: true, 
            mode: "push" 
          },
          resize: true,
        },
        modes: {
          grab: { 
            distance: 140, 
            line_linked: { 
              opacity: 0.2 
            } 
          },
          push: { 
            particles_nb: 3 
          },
        },
      },
      retina_detect: true,
    });
    
    // Theme Toggle
    const themeToggle = document.getElementById("theme-toggle");
    const themeIcon = themeToggle.querySelector("i");
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      document.body.classList.add('light-mode');
      themeIcon.classList.remove("fa-moon");
      themeIcon.classList.add("fa-sun");
    }
    
    themeToggle.addEventListener("click", function () {
      document.body.classList.toggle("light-mode");
      if (document.body.classList.contains("light-mode")) {
        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-sun");
        localStorage.setItem('theme', 'light');
      } else {
        themeIcon.classList.remove("fa-sun");
        themeIcon.classList.add("fa-moon");
        localStorage.setItem('theme', 'dark');
      }
    });
    
    // Animation on Load
    setTimeout(function() {
      document.querySelectorAll('.fade-in').forEach(el => {
        el.classList.add('active');
      });
    }, 300);
  });