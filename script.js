window.addEventListener('scroll', reveal);





function reveal() {
  const reveals = document.querySelectorAll('.reveal');

  reveals.forEach((el) => {
    const windowHeight = window.innerHeight;
    const revealTop = el.getBoundingClientRect().top;
    const revealPoint = 100;

    if (revealTop < windowHeight - revealPoint) {
      el.classList.add('active');
    }
  });
}

window.addEventListener('scroll', reveal);
reveal();