document.addEventListener('DOMContentLoaded', function() {
    
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault(); 

        
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          
          gsap.to(window, {
            duration: 1, 
            scrollTo: {
              y: targetElement.offsetTop,
              autoKill: true
            },
            ease: 'power2.inOut'
          });
        }
      });
    });
  });