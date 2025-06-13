function resizeEverything() {
  const width = window.innerWidth;
  const allElements = document.querySelectorAll('*');

  allElements.forEach(el => {
    if (!el.offsetParent || el.tagName === 'SCRIPT' || el.tagName === 'STYLE') return;

    if (width > 1200) {
      el.style.fontSize = '';
      el.style.padding = '';
    } else if (width > 768) {
      el.style.fontSize = '0.95em';
      el.style.padding = '0.6em';
    } else {
      el.style.fontSize = '0.85em';
      el.style.padding = '0.4em';
    }
    if (el.tagName === 'BUTTON' || el.tagName === 'A') {
      el.style.minWidth = 'min-content';
    }
  });
}
document.addEventListener('DOMContentLoaded', resizeEverything);
window.addEventListener('resize', resizeEverything);