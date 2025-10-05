// Menu mobile
const toggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

toggle.addEventListener('click', () => {
  menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
});

// Formulário de contato
const form = document.getElementById('form-contato');
const msg = document.getElementById('msg');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  msg.textContent = "Obrigado pelo contato! Em breve retornaremos.";
  msg.style.color = "#ffcc00";
  form.reset();
});
