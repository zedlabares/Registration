const contactBtn = document.getElementById('contactBtn');
const contactModal = document.getElementById('contactModal'); 

contactBtn.addEventListener('click', () => {
  contactModal.style.display = 'block';
});


const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
  link.addEventListener('mouseenter', () => {
    link.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
    link.style.transition = 'background-color 0.3s ease';
  });

  link.addEventListener('mouseleave', () => {
    link.style.backgroundColor = 'transparent';
  });
});