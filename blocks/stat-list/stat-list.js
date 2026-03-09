export default function decorate(block) {
  [...block.children].forEach((row) => {
    row.classList.add('stat-item');
    const [icon, value, label, desc] = row.children;
    if (icon) icon.classList.add('stat-icon');
    if (value) value.classList.add('stat-value');
    if (label) label.classList.add('stat-label');
    if (desc) desc.classList.add('stat-description');
  });
}