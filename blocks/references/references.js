export default function decorate(block) {
  const refs = [...block.children];
  const list = document.createElement('ol');
  refs.forEach((row) => {
    const li = document.createElement('li');
    li.innerHTML = row.innerHTML;
    list.append(li);
  });
  block.replaceChildren(list);
}