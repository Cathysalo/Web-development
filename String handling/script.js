function countL() {
    const phrase = document.getElementById('inputL').value;
    let lCount = 0;
    for (let letter of phrase) {
        if (letter.toLowerCase() === 'l') lCount++;
    }
    document.getElementById('resultL').textContent = `${phrase} contains ${lCount}xL characters.`;
}


function countVowels() {
    const text = document.getElementById('inputVowels').value;
    const vowelSet = "aeiouyäåö";
    let vowelTotal = 0;
    for (let char of text) {
        if (vowelSet.includes(char.toLowerCase())) vowelTotal++;
    }
    document.getElementById('resultVowels').textContent = `${text} contains ${vowelTotal} vowels.`;
}


function checkPalindrome() {
    const originalText = document.getElementById('inputPalindrome').value;
    const normalText = originalText.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversedText = normalText.split('').reverse().join('');
    const isPalindrome = normalText === reversedText;
    document.getElementById('resultPalindrome').textContent = `${originalText} is ${isPalindrome ? '' : 'NOT '}a palindrome.`;
}
