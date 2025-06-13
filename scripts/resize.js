function resizeEverything() {
  const width = window.innerWidth;
  const allElements = document.querySelectorAll('*');

  allElements.forEach(el => {
    if (!el.offsetParent) return;

    if (width > 1200) {
      el.style.fontSize = '1.2rem';
      el.style.padding = '1rem';
    } else if (width > 768) {
      el.style.fontSize = '1rem';
      el.style.padding = '0.7rem';
    } else {
      el.style.fontSize = '0.85rem';
      el.style.padding = '0.5rem';
    }
  });
}

document.addEventListener('DOMContentLoaded', resizeEverything);
window.addEventListener('resize', resizeEverything);