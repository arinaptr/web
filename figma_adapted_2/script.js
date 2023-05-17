const scrollContainer = document.querySelector('.reviews');
const scrollLeftButton = document.querySelector('#scroll-left');
const scrollRightButton = document.querySelector('#scroll-right');

scrollContainer.addEventListener('scroll', () => {
  // Check if there is horizontal scroll available
  scrollLeftButton.style.display = scrollContainer.scrollLeft > 0 ? 'block' : 'none';
  scrollRightButton.style.display =
    scrollContainer.scrollLeft + scrollContainer.clientWidth < scrollContainer.scrollWidth
      ? 'block'
      : 'none';
});

scrollLeftButton.addEventListener('click', () => {
  scrollContainer.scrollBy({
    left: -scrollContainer.clientWidth,
    behavior: 'smooth',
  });
});

scrollRightButton.addEventListener('click', () => {
  scrollContainer.scrollBy({
    left: scrollContainer.clientWidth,
    behavior: 'smooth',
  });
});


