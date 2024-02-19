const form = document.querySelector('.feedback-form');

const formStateKey = 'feedback-form-state';

// Load form data from localStorage
const loadFormData = () => {
  const formData = JSON.parse(localStorage.getItem(formStateKey));
  if (formData) {
    form.email.value = formData.email || '';
    form.message.value = formData.message || '';
  }
};

// Save form data to localStorage
const saveFormData = () => {
  const formData = {
    email: form.email.value.trim(),
    message: form.message.value.trim()
  };
  localStorage.setItem(formStateKey, JSON.stringify(formData));
};

// Clear form data from localStorage
const clearFormData = () => {
  localStorage.removeItem(formStateKey);
};

// Check if both email and message are filled
const isFormValid = () => {
  return form.email.value.trim() !== '' && form.message.value.trim() !== '';
};

// Print form data to console and clear form data
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

// Event listener for input changes
form.addEventListener('input', () => {
  saveFormData();
});

// Event listener for form submit
form.addEventListener('submit', handleSubmit);

// Load form data when the page is loaded
document.addEventListener('DOMContentLoaded', loadFormData);