const sumAll = function(num1, num2) {
    let sum = 0
    if (num1 > 0 && typeof(num1) == 'number' && num2 > 0 && typeof(num2) == 'number') {
        if (num2 > num1) {
            for (let i = num1; i <= num2; i++) {
                sum += i
            }
            return sum
        }
        else {
            for (let i = num2; i <= num1; i++) {
                sum += i
            }
            return sum
        }
    }
    else {
        return ("ERROR")
    }
};

// Do not edit below this line
module.exports = sumAll;
