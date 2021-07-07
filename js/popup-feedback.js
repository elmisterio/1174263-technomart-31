let feedbackButton = document.querySelector('.contacts__link-help');
let feedbackModal = document.querySelector('.modal-feedback');
let feedbackCloseButton = feedbackModal.querySelector('.modal__close-btn');
let feedbackName = feedbackModal.querySelector('.name-input');

feedbackButton.addEventListener('click', function(evt){
  evt.preventDefault();
  feedbackModal.classList.remove('off');
  feedbackName.focus();
});

feedbackCloseButton.addEventListener('click', function(evt){
  evt.preventDefault();
  feedbackModal.classList.add('off');
});

window.addEventListener('keydown', function(evt){
  if (evt.key === 'Esc' || evt.key === 'Escape') {
    evt.preventDefault();
    feedbackModal.classList.add('off');
    };
});
