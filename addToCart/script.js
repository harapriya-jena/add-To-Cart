function selectOffer(index) {
  const offers = document.querySelectorAll('.offer');

  offers.forEach((offer) => {
    const details = offer.querySelector('.details');
    offer.classList.remove('active');
    offer.querySelector('input[type="radio"]').checked = false;

    // Check if details exist before hiding
    if (details) {
      details.style.display = 'none';
    }
  });

  const selectedOffer = offers[index - 1];
  selectedOffer.classList.add('active');
  selectedOffer.querySelector('input[type="radio"]').checked = true;

  // Check if details exist before showing
  const selectedDetails = selectedOffer.querySelector('.details');
  if (selectedDetails) {
    selectedDetails.style.display = 'block';
  }

  // Update total price
  const priceText = selectedOffer.querySelector('.price').childNodes[0].textContent.trim();
  document.querySelector('.footer').innerText = `Total: ${priceText}`;
}
