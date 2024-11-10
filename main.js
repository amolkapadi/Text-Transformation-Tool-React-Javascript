// Select the text area element
const textInput = document.getElementById('text-input');

// Function to transform text to uppercase
function toUppercase() {
  textInput.value = textInput.value.toUpperCase();
}

// Function to transform text to lowercase
function toLowercase() {
  textInput.value = textInput.value.toLowerCase();
}

// Function to reverse the text
function reverseText() {
  textInput.value = textInput.value.split('').reverse().join('');
}

// Function to clear the text
function clearText() {
  textInput.value = '';
}
