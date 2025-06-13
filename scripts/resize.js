function resizeTextOnly() {
  const width = window.innerWidth;
  const scale = width > 1200 ? 1 : width > 768 ? 0.95 : 0.85;

  document.querySelectorAll('*').forEach(el => {
    if (!el.offsetParent || ['SCRIPT', 'STYLE'].includes(el.tagName)) return;

    const computedSize = window.getComputedStyle(el).fontSize;
    const baseSize = parseFloat(computedSize);
    if (!isNaN(baseSize)) {
      el.style.fontSize = `${baseSize * scale}px`;
    }
  });
}
window.addEventListener('DOMContentLoaded', resizeTextOnly);
window.addEventListener('resize', resizeTextOnly);