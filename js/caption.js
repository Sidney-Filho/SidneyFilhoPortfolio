const imageContainer = document.querySelector('.tecno-usada');
const caption = imageContainer.querySelector('.caption');
const caption2 = imageContainer.querySelector('.caption-2');
const caption3 = imageContainer.querySelector('.caption-3');

imageContainer.addEventListener('mouseover', () => {
  caption.style.opacity = 1;
  caption2.style.opacity = 1;
  caption3.style.opacity = 1;
});

imageContainer.addEventListener('mouseout', () => {
  caption.style.opacity = 0;
  caption2.style.opacity = 0;
  caption3.style.opacity = 0;
});