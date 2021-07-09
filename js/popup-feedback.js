let feedbackButton = document.querySelector('.contacts__link-help');
let feedbackModal = document.querySelector('.modal-feedback');
let feedbackCloseButton = feedbackModal.querySelector('.modal__close-btn');
let feedbackForm = document.querySelector('.modal__form');
let feedbackName = feedbackModal.querySelector('.name-input');
let feedbackEmail = feedbackModal.querySelector('.email-input');
let feedbackText = feedbackModal.querySelector('.textarea-input');

feedbackButton.addEventListener('click', function(evt){
  evt.preventDefault();
  feedbackModal.classList.remove('off');
  feedbackName.focus();
});

feedbackCloseButton.addEventListener('click', function(evt){
  evt.preventDefault();
  feedbackModal.classList.add('off');
  feedbackModal.classList.remove('modal-error');
});

window.addEventListener('keydown', function(evt){
  if (evt.key === 'Esc' || evt.key === 'Escape') {
    evt.preventDefault();
    feedbackModal.classList.add('off');
    feedbackModal.classList.remove('modal-error');
    };
});

feedbackForm.addEventListener('submit', function (evt) {
  if (!feedbackName.value || !feedbackEmail.value || !feedbackText.value) {
    evt.preventDefault();
    feedbackModal.classList.remove('modal-error');
    feedbackModal.offsetWidth = feedbackModal.offsetWidth;
    feedbackModal.classList.add('modal-error');
  }
});
