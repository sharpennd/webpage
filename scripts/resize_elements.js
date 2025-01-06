function updateDeviceLayout() {
  const width = window.innerWidth;

  if (width < 576) {
    document.querySelector('#someElement').style.fontSize = '14px';
    document.querySelector('#someElement').style.padding = '10px';
    document.querySelector('#largeElement').style.display = 'none';
  } 
  else if (width >= 576 && width < 992) {
    document.querySelector('#someElement').style.fontSize = '16px';
    document.querySelector('#someElement').style.padding = '15px';
    document.querySelector('#largeElement').style.display = 'block';
  } 
  else if (width >= 992) {
    document.querySelector('#someElement').style.fontSize = '18px';
    document.querySelector('#someElement').style.padding = '20px';
    
    document.querySelector('#largeElement').style.display = 'block';
    document.querySelector('#anotherElement').style.marginTop = '20px';
  }
}

updateDeviceLayout();
window.addEventListener('resize', updateDeviceLayout);