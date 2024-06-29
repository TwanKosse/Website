// Thank god I can finally make notes in my code again! I've missed you so much //! I hope I'm allowed to use 
let prevScrollPos = window.scrollY;

window.addEventListener('scroll', function() {
  // current scroll position
  const currentScrollPos = window.scrollY;

  if (prevScrollPos > currentScrollPos) {
    // user has scrolled up
    document.querySelector('header').classList.add('show');
    document.querySelector('header').classList.remove('hide');
  } else {
    // user has scrolled down
    document.querySelector('header').classList.remove('show');
    document.querySelector('header').classList.add('hide');
  }

  // update previous scroll position
  prevScrollPos = currentScrollPos;
});