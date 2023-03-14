const button = document.querySelector('.btn-kontakt');
const info = document.querySelector('.home-info');

button.addEventListener('click', () => {
        button.classList.toggle('active');
        info.classList.toggle('active');
    });