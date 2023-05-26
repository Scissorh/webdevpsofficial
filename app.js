// Toggle the mobile menu
document.querySelector('.hamburger').addEventListener('click', function() {
  this.classList.toggle('change');
  document.querySelector('.nav-links').classList.toggle('active');
});
