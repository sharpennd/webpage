window.addEventListener('resize', function() {
    if (window.innerWidth < 768) {
      document.body.classList.add('small-device');
    } else {
      document.body.classList.remove('small-device');
    }
  });
  
  if (window.innerWidth < 768) {
    document.body.classList.add('small-device');
  } else {
    document.body.classList.remove('small-device');
  }
  