const form = document.getElementById('form');
const email = document.getElementById('email');
const errorIcon = document.getElementById('error-icon');

form.addEventListener('submit', e => {
    e.preventDefault();
    const test = /^[\w]+[@][\w]+[\.][a-z]{2,3}/.test(email.value);
    if(!test) {
        form.classList.add('error-message');
        errorIcon.classList.remove('hidden');
    } else {
        form.submit();
    }
});