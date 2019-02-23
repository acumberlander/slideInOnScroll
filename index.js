
function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}
const sliderImages = document.querySelectorAll('.slide-in');

function checkSlide() {
  sliderImages.forEach(sliderImage => {
    // half way throught the image
    const slideInAt = (window.scrollY + window.innerHeight) -
      sliderImage.height / 2;
      // bottom of the image
      // offsetTop is the distance from the parent top to the top of the current element
      // in this case the top of window to the top of a sliderImage is the offsetTop  
    const imageBottom = sliderImage.offsetTop + sliderImage.height;
    const isHalfShown = slideInAt > sliderImage.offsetTop;
    const isNotScrolledPast = window.scrollY < imageBottom;
    if (isHalfShown && isNotScrolledPast) {
      sliderImage.classList.add('active');
    } else {
      sliderImage.classList.remove('active');
    }
    console.log(sliderImage.offsetTop);

  });
}

window.addEventListener('scroll', debounce(checkSlide));
