const buttonHamburger = document.getElementById('hamburger');
const elementSidebar = document.querySelector('.sidebar-list');
const elementWrapper = document.querySelector('.content-wrapper');

buttonHamburger.addEventListener('click', function(){
  console.log('here');
  elementSidebar.classList.toggle('show');
  elementWrapper.classList.toggle('wrapper-narrow');
});