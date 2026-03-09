export default function decorate(block) {
  const [videoUrl, posterImg, transcript] = [...block.children].map(row => row.firstElementChild);
  const url = videoUrl.textContent.trim();
  
  block.innerHTML = `
    <div class="video-container">
      <div class="video-placeholder">
        ${posterImg.innerHTML}
        <button class="play-button" aria-label="Play Video"></button>
      </div>
      <template id="video-frame">
        <iframe src="${url}" frameborder="0" allow="autoplay; fullscreen"></iframe>
      </template>
      <div class="transcript">${transcript ? transcript.innerHTML : ''}</div>
    </div>
  `;

  block.querySelector('.play-button').addEventListener('click', () => {
    const template = block.querySelector('#video-frame');
    const container = block.querySelector('.video-placeholder');
    container.innerHTML = '';
    container.appendChild(template.content.cloneNode(true));
  });
}