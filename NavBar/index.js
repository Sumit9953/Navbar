
const toggler = document.getElementById("toggler");
const navLinks = document.getElementById("nav_links");

toggler.addEventListener('click' , () => {
    navLinks.classList.toggle('active');
})