const sliderImages = document.querySelectorAll('.slide-in');

function checkSlide() {
  sliderImages.forEach(sliderImage => {
    // get the bottom of the image
    const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2;
    // get the bottom of the image
    const imageBottom = sliderImage.offsetTop + sliderImage.height;
    // check if the image is half shown
    const isHalfShown = slideInAt > sliderImage.offsetTop;
    // check if the image is not scrolled past
    const isNotScrolledPast = window.scrollY < imageBottom;

    if (isHalfShown && isNotScrolledPast) {
      sliderImage.classList.add('active'); // Add active class to the image
    } else {
      sliderImage.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', debounce(checkSlide));
