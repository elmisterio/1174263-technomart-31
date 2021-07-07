let mapButton = document.querySelector('.contacts__link-map');
let mapModal = document.querySelector('.modal-map');
let mapCloseButton = mapModal.querySelector('.modal__close-btn');

mapButton.addEventListener('click', function(evt) {
  evt.preventDefault();
  mapModal.classList.remove('off');
});

mapCloseButton.addEventListener('click', function(evt) {
  evt.preventDefault();
  mapModal.classList.add('off');
});

window.addEventListener('keydown', function(evt) {
  if (evt.key === 'Esc' || evt.key === 'Escape') {
    evt.preventDefault();
    mapModal.classList.add('off');
  };
});
