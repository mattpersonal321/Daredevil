// Function to handle option selection
function selectOption(language) {
    // Update the result text
    document.getElementById('selectedLanguage').textContent = 'You have selected: ' + language;

    // Optionally, add some animation or styling
    const options = document.querySelectorAll('.option');
    options.forEach(option => {
        option.style.transform = 'scale(1)';
        option.style.backgroundColor = '#007bff';
    });
    const selectedOption = Array.from(options).find(option => option.textContent === language);
    selectedOption.style.transform = 'scale(1.1)';
    selectedOption.style.backgroundColor = '#0056b3';
}
