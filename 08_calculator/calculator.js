const add = function(num1, num2) {
	return num1 + num2
};

const subtract = function(num1, num2) {
	return num1 - num2
};

const sum = function(arr) {
	let sumArray = arr.reduce((total, num) => {
    return total + num
  }, 0)
  return sumArray
};

const multiply = function(arr) {
  let answer = arr.reduce((total, num) => {
    return total * num
  }, 1) 
}

const power = function(num1, num2) {
  return num1 ** num2
};

const factorial = function(num) {
  let fact = 1
  if (num === 0 || num === 1) {
    return fact
  } else {
    for (let i = 2; i >= num; i++) {
      fact*i
    }
    return fact
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
