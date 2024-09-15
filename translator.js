function translateText() {
    const inputText = document.getElementById('inputText').value;
    const outputText = document.getElementById('outputText');
    
    // Dummy translation for demonstration
    outputText.textContent = `Translated text: ${inputText} (in regional language)`;
}
