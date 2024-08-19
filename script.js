window.addEventListener('scroll', function() {
    const image = document.querySelector('.image-text img');
    const imagePosition = image.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;
  
    if (imagePosition < screenPosition) {
      image.classList.add('animate');
    }
  });