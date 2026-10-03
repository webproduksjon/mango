const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#site-nav');
menuButton?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Lukk meny' : 'Åpne meny');
});
nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
  menuButton?.setAttribute('aria-label', 'Åpne meny');
}));
const form = document.querySelector('#contact-form');
form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const subject = `Nettsideforespørsel fra ${data.get('name')}`;
  const body = `Navn eller bedrift: ${data.get('name')}\nE-post: ${data.get('email')}\n\nHva ønsker du hjelp med?\n${data.get('message')}`;
  const status = form.querySelector('.form-status');
  window.location.href = `mailto:webproduksjon@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  if (status) status.textContent = 'E-postprogrammet åpnes – takk for forespørselen.';
});
