const mainContent = document.querySelector('.main-content');

hamburger.addEventListener('click', () => {
    const isActive = sidebar.classList.toggle('active');
    hamburger.classList.toggle('active');
    overlay.classList.toggle('active', isActive);
    mainContent.classList.toggle('shifted', isActive);
});

overlay.addEventListener('click', () => {
    sidebar.classList.remove('active');
    hamburger.classList.remove('active');
    overlay.classList.remove('active');
    mainContent.classList.remove('shifted');
});