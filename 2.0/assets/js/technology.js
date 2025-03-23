document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".contact-btn").addEventListener("click", function() {
        alert("Thank you for reaching out! We'll get back to you soon.");
    });
});
document.addEventListener('DOMContentLoaded', function() {
  // Add fade-in class to all benefit items
  const benefitItems = document.querySelectorAll('#benefits .col-md-4');
  benefitItems.forEach(item => {
    item.classList.add('fade-in');
  });
  
  // Function to check if element is in viewport
  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.85
    );
  }
  
  // Function to handle scroll events
  function handleScroll() {
    benefitItems.forEach(item => {
      if (isInViewport(item)) {
        item.classList.add('visible');
      }
    });
  }
  
  // Initial check and add scroll listener
  handleScroll();
  window.addEventListener('scroll', handleScroll);
});
