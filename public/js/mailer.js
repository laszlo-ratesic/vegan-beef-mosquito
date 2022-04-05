const form = document.getElementById('contactForm');
const success = document.getElementById('form-message-success');
const warning = document.getElementById('form-message-warning');

const sendMail = (mail) => {
  fetch('/api/send', {
    method: 'POST',
    body: mail,
  }).then((response) => {
    if (response.ok) {
      success.style.display = 'inline';
      return response.json;
    } else {
      warning.style.display = 'inline';
      return console.error(response);
    }
  });
};

const formEvent = form.addEventListener('submit', (event) => {
  event.preventDefault();

  let mail = new FormData(form);
  sendMail(mail);
});
