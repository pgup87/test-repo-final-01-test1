export default function decorate(block) {
  const container = block.firstElementChild;
  container.classList.add('cta-banner-wrapper');
  const button = block.querySelector('a');
  if (button) button.classList.add('button', 'accent');
}