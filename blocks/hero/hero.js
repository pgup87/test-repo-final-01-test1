export default function decorate(block) {
  const cols = [...block.firstElementChild.children];
  block.classList.add(`hero-${cols.length}-cols`);

  // Find the image and move it to the background
  const image = block.querySelector('picture');
  if (image) {
    const imageWrapper = image.closest('div');
    imageWrapper.classList.add('hero-image');
  }

  // Wrap text content
  const content = block.querySelector('div:not(.hero-image)');
  if (content) {
    content.classList.add('hero-content');
    const cta = content.querySelector('a');
    if (cta) cta.classList.add('button', 'primary', 'large');
  }
}