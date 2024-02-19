const form = document.querySelector('.feedback-form');
const formStateKey = 'feedback-form-state';

const loadFormData = () => {
  const formData = JSON.parse(localStorage.getItem(formStateKey));
  if (formData) {
    form.email.value = formData.email || '';
    form.message.value = formData.message || '';
  }
};
const saveFormData = () => {
  const formData = {
    email: form.email.value.trim(),
    message: form.message.value.trim()
  };
  localStorage.setItem(formStateKey, JSON.stringify(formData));
};
const clearFormData = () => {
  localStorage.removeItem(formStateKey);
};
const isFormValid = () => {
  return form.email.value.trim() !== '' && form.message.value.trim() !== '';
};
const handleSubmit = (event) => {
  event.preventDefault();
  if (isFormValid()) {
    const formData = {
      email: form.email.value.trim(),
      message: form.message.value.trim()
    };
    console.log(formData);
    clearFormData();
    form.reset();
  } else {
    alert('Please fill in both email and message fields.');
  }
};
form.addEventListener('input', () => {
  saveFormData();
});
form.addEventListener('submit', handleSubmit);
document.addEventListener('DOMContentLoaded', loadFormData);