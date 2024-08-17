const mobMenu = document.querySelector('.customers-mobmenu-btn');
const sidebar = document.querySelector('.sidebar-mob-backdrop');
const customers = document.querySelector('.customers');
const body = document.querySelector('body');
const closeBtn = document.querySelector('.sidebar-mob-close');

mobMenu.addEventListener('click', () => {
  sidebar.classList.add('is-open');
  body.classList.add('no-scroll');
  closeBtn.addEventListener('click', closeSidebar);
  document.addEventListener('keydown', keydownHandler);
  sidebar.addEventListener('click', clickOutsideHandler);
});

customers.addEventListener('click', closeSidebar);

function closeSidebar() {
  sidebar.classList.remove('is-open');
  body.classList.remove('no-scroll');
  closeBtn.removeEventListener('click', closeSidebar);
  document.removeEventListener('keydown', keydownHandler);
  sidebar.removeEventListener('click', clickOutsideHandler);
}

function keydownHandler(event) {
  if (event.key === 'Escape') {
    closeSidebar();
  }
}
function clickOutsideHandler(event) {
  if (event.target === sidebar) {
    closeSidebar();
  }
}
