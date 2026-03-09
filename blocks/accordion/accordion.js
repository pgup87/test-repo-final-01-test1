export default function decorate(block) {
  [...block.children].forEach((row) => {
    const title = row.firstElementChild;
    const content = row.lastElementChild;
    title.classList.add('accordion-title');
    content.classList.add('accordion-content');
    content.style.display = 'none';

    title.addEventListener('click', () => {
      const isOpen = content.style.display === 'block';
      block.querySelectorAll('.accordion-content').forEach(c => c.style.display = 'none');
      content.style.display = isOpen ? 'none' : 'block';
      title.classList.toggle('active', !isOpen);
    });
  });
}