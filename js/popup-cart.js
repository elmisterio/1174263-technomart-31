let buyButton = document.querySelectorAll('.product-item__buy-btn');
let cartModal = document.querySelector('.modal-cart');
let cartCloseButton = feedbackModal.querySelectorAll('.modal__close-btn');

buyButton.forEach(buyButton => buyButton.addEventListener('click', evt => {
  evt.preventDefault();
  cartModal.classList.remove('off');
}));

cartModal.addEventListener('click', function (evt) {
  evt.preventDefault();
  cartModal.classList.add('off');
});

window.addEventListener('keydown', function (evt) {
  if (evt.key === 'Esc' || evt.key === 'Escape') {
    evt.preventDefault();
    cartModal.classList.add('off');
  };
});
