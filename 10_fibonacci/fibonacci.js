const fibonacci = function(num) {
    num = parseInt(num)
    let fibonacciNums = [1, 1]
    for (let i = 2; i < num; i++) {
        let nextNum = fibonacciNums[i-1] + fibonacciNums[i-2]
        fibonacciNums.push(nextNum)
    }
    if(fibonacciNums[num-1]) {
        return fibonacciNums[num-1]
    }
    else {
        return "OOPS"
    }
};

// Do not edit below this line
module.exports = fibonacci;
