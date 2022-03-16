const hamburgerButton = document.getElementById('hamburger');
const navList = document.getElementById('nav-links');
const navName = document.getElementById('nav-name');
const projectLink = document.getElementById('project-nav-link');
const contactLink = document.getElementById('contact-nav-link');

function toggleButton() {
  navList.classList.toggle('show');
  if(navName.innerHTML !== '') {
    navName.innerHTML = ''
  } else {
    navName.innerHTML = 
      `<span>Megan</span><br>
      <span>Ratto</span>`
  }
}

hamburgerButton.addEventListener('click', toggleButton);
projectLink.addEventListener('click', toggleButton)
contactLink.addEventListener('click', toggleButton)
