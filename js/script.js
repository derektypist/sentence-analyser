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

// Apply keyup event to id of mysentence
$('#mysentence').on('keyup', function () {
    $('#results').html(``);

    const sentence = $('#mysentence').val();
    if (sentence.trim().length == 0) {
        $('#results').html(``);
    } else {
        $('#results').append(`Sentence: ${sentence} <br>`);
        $('#results').append(`Vowel Count: ${getVowelCount(sentence)} <br>`);
        $('#results').append(`Consonant Count: ${getConsonantCount(sentence)} <br>`);
        $('#results').append(`Punctuation Count: ${getPunctuationCount(sentence)} <br>`);
        $('#results').append(`Word Count: ${getWordCount(sentence)} <br>`);
    }
});

// Apply click event to id of clearBtn
$('#clearBtn').on('click', function () {
    $('#results').html(``);
});