const bigInt = require("big-integer");
module.exports = async function (context, req) {
  context.log("JavaScript HTTP trigger function processed a request.");

  let nth = req.body.nth;
  let memo = {};

  if (nth < 0) {
    throw new Error("n must be non-negative");
  }

  let fibonacciNumber = calculateFibonacci(nth, memo);

  context.res = {
    body: fibonacciNumber.toString(),
  };
};

function calculateFibonacci(n, memo) {
    if (n in memo) {
        return memo[n];
      }
    
      if (n === 0 || n === 1) {
        memo[n] = bigInt(n);
        return memo[n];
      } else {
        let nth_1 = calculateFibonacci(n - 1, memo);
        let nth_2 = calculateFibonacci(n - 2, memo);
        let answer = nth_1.add(nth_2);
        memo[n] = answer;
        return memo[n];
      }
}