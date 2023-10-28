let successBtn = document.querySelector('.success-btn');
let dismissBtn = document.querySelector('.dismiss-btn');
let input_email = document.querySelector('.email').value;
let text_email = document.querySelector('.user-email');
let newsLetter = document.querySelector('.news__letter');
let successMessage = document.querySelector('.success__message');

successBtn.addEventListener('click', () => {
        newsLetter.classList.add('hide');
        successMessage.classList.remove('hide');
    })

    text_email.innerHTML = input_email;


dismissBtn.addEventListener('click', () => {
    successMessage.classList.add('hide');
    newsLetter.classList.remove('hide');
})
