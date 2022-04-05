const reverseString = function(str) {
    let newStr = ""
    let strLen = str.length
    for(let i = strLen - 1; i >= 0; i--) {
        newStr += str[i]
    }
    return newStr
};

// Do not edit below this line
module.exports = reverseString;
