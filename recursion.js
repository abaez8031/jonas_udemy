const factorial = function(n) {
  if(n === 1) return 1;
  return factorial(n - 1) * n
}


const fib = function(n) {
  if(n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

console.log(fib(5))
console.log(fib(7))