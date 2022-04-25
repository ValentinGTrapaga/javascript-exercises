const palindromes = function (str) {
    let checkWord = str.split('').filter(char => /[a-zA-Z]/.test(char)).reverse().join('').toLowerCase()
    let strNoPunct = str.split('').filter(char => /[a-zA-Z]/.test(char)).join('').toLowerCase()
    let isPalindrome = true
    for(let i = 0; i < strNoPunct.length; i++) {
        if(checkWord[i] === strNoPunct[i]) {
        } else {
            isPalindrome = false
        }
    }
    console.log(strNoPunct)
    console.log(checkWord)
    return isPalindrome
};

// Do not edit below this line
module.exports = palindromes;
