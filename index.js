const textArea = document.getElementById('input-text');
const charCount = document.getElementById('char-count');
const clearButton = document.getElementById('clear-button');

textArea.addEventListener('input', updateCharCount);
clearButton.addEventListener('click', clearTextArea);

function updateCharCount() {
    const text = textArea.value;
    const count = text.length;
    if (count === 0) {
        charCount.textContent = "O texto possui 0 caracteres";
    } else if (count === 1) {
        charCount.textContent = "O texto possui 1 caractere";
    } else {
        charCount.textContent = "O texto possui " + count + " caracteres";
    }
}

function clearTextArea() {
    textArea.value = '';
    updateCharCount(); 
}
