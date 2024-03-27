// Given a function fn, return a memoized version of that function.

// A memoized function is a function that will never be called twice with the same inputs. Instead it will return a cached value.
// You can assume there are 3 possible input functions: sum, fib, and factorial.
// sum accepts two integers a and b and returns a + b.
// fib accepts a single integer n and returns 1 if n <= 1 or fib(n - 1) + fib(n - 2) otherwise.
// factorial accepts a single integer n and returns 1 if n <= 1 or factorial(n - 1) * n otherwise.


/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const cache = {};

    return function(...args) {
        var key = JSON.stringify(args);


        if(key in cache){
            return cache[key];
        }
        else{
            var result = fn(...args);
            cache[key] = result;
            return result;
        }
    }
}


// Given two promises promise1 and promise2, return a new promise. promise1 and promise2 will both resolve with a number. 
// The returned promise should resolve with the sum of the two numbers.


/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}promise3
 */
 var val;
var addTwoPromises = async function(promise1, promise2) {
    return Promise.all([promise1, promise2]).then(([value1, value2]) => {
    // Assuming value1 and value2 are numbers
    return value1 + value2;
  });

}
