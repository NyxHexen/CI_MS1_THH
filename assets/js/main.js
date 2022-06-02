// Both functions below add *-open class to the body on click
// Nav Toggle Button
const navToggle = document.querySelector('.nav--toggle');
navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});
// Form Toggle Button
const signupToggle = document.querySelector('.signup-form--toggle');
signupToggle.addEventListener('click', () => {
    document.body.classList.toggle('form-open');
});