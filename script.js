const form = document.getElementById('requestForm');
const formStatus = document.getElementById('formStatus');

if (form) {
  form.addEventListener('submit', (event) => {
    const action = form.getAttribute('action') || '';

    if (action.includes('your-form-id')) {
      event.preventDefault();
      formStatus.textContent = 'Replace the placeholder Formspree URL in index.html to make this request form live.';
    }
  });
}
