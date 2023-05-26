const form = document.getElementById('inputForm');
const outputText = document.getElementById('promptText');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  updateOutput();
});const inputFields = document.querySelectorAll('input[data-hint], textarea[data-hint]');

// Add event listeners for input fields
inputFields.forEach(function(input) {
  input.addEventListener('input', function() {
    updateOutput();
  });
  input.addEventListener('focus', function() {
    showHint(input);
  });
  input.addEventListener('blur', function() {
    hideHint(input);
  });
});

function showHint(input) {
  const hintBox = input.nextElementSibling;
  if (hintBox.classList.contains('hint-box')) {
    hintBox.textContent = input.getAttribute('data-hint');
    hintBox.style.display = 'block';
  }
}

function hideHint(input) {
  const hintBox = input.nextElementSibling;
  if (hintBox.classList.contains('hint-box')) {
    hintBox.style.display = 'none';
  }
}


function updateOutput() {
  const input1 = document.getElementById('input1').value;



  const output = `Based on the following context information: <span class="input1">${input1}</span> 

Generate a prompt with :Company's Info Prompt- { Company's info for marketing campaigns} Company's Style Prompt- {Company's tone, style and relevant communication info}Rufu's Helper Function - {escribir un prompt que resuma el objetivo de un creativo generando una campana para Company desde rufus. agregar info de best practices de SEO, creatividad , tono y estilo . para que ayude al momento de generar una pieza nueva}

Generate all prompts in Spanish  
`
;

  outputText.innerHTML = output;

  // Reset all input classes
  const inputs = document.querySelectorAll('input');
  inputs.forEach(function(input) {
    input.classList.remove('filled');
  });

  // Add 'filled' class to the corresponding inputs
  const input1Elements = document.querySelectorAll('.input1');
  input1Elements.forEach(function(element) {
    const input = document.getElementById('input1');
    input.classList.add('filled');
  });

  const input2Elements = document.querySelectorAll('.input2');
  input2Elements.forEach(function(element) {
    const input = document.getElementById('input2');
    input.classList.add('filled');
  });

  const input3Elements = document.querySelectorAll('.input3');
  input3Elements.forEach(function(element) {
    const input = document.getElementById('input3');
    input.classList.add('filled');
  });

  const input4Elements = document.querySelectorAll('.input4');
  input4Elements.forEach(function(element) {
    const input = document.getElementById('input4');
    input.classList.add('filled');
  });
}

// Event listeners for input fields
const inputs = document.querySelectorAll('input');
inputs.forEach(function(input) {
  input.addEventListener('input', function() {
    updateOutput();
  });
});

const copyButton = document.getElementById('copyButton');
const promptText = document.getElementById('promptText');

copyButton.addEventListener('click', function() {
  copyToClipboard(promptText.textContent);
});

function copyToClipboard(text) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
  alert('Text copied to clipboard!');
}

const copyInputsButton = document.getElementById('copyInputsButton');
copyInputsButton.addEventListener('click', function() {
  copyInputsAsJson();
});

function copyInputsAsJson() {
  const inputs = document.querySelectorAll('input, textarea');
  const inputsData = {};

  inputs.forEach(function(input) {
    inputsData[input.id] = input.value;
  });

  const json = JSON.stringify(inputsData, null, 2);

  copyToClipboard(json);
  alert('Inputs copied as JSON!');
}