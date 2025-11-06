$('#results').html(``);

// Function to count the number of vowels
function getVowelCount(sentence) {
    const vowels = "aeiou";
    let count = 0;
    for (const char of sentence.toLowerCase()) {
        if (vowels.includes(char)) count++;
    }

    return count;
}

// Function to count the number of consonants
function getConsonantCount(sentence) {
    const consonants = "bcdfghjklmnpqrstvwxyz";
    let count = 0;
    for (const char of sentence.toLowerCase()) {
        if (consonants.includes(char)) count++;
    }

    return count;
}

// Function to count the number of punctuation characters
function getPunctuationCount(sentence) {
    const punctuations = ".,!?;:-()[]{}\"'–";
    let count = 0;
    for (const char of sentence) {
        if (punctuations.includes(char)) count++;
    }

    return count;
}

// Function to count the number of words
function getWordCount(sentence) {
    if (sentence.trim() === '') return 0;

    const words = sentence.trim().split(/\s+/);
    return words.length;
}