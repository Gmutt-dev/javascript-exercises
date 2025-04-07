const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
  let sum = 0;
	arr.forEach((val) => {sum += val});
  return sum;
};

const multiply = function(arr) {
  let product = 1;
  arr.forEach((val) => {product *= val});
  return product;
};

const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function(num) {
  // let product = 1;
  // for (let i = num; i > 1; i--) {
  //   product *= i;
  // }
  // return product;
  
  //recursive answer
  if (num === 1 || num === 0) return 1;
  else return num * factorial(num-1);
  }

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
