// Given an array of asynchronous functions functions, return a new promise promise. Each function in the array accepts no arguments and returns a promise.
// All the promises should be executed in parallel.

// promise resolves:

// When all the promises returned from functions were resolved successfully in parallel. The resolved value of promise should be an array of all the resolved values of promises in the same order as they were in the functions. The promise should resolve when all the asynchronous functions in the array have completed execution in parallel.
// promise rejects:
// When any of the promises returned from functions were rejected. promise should also reject with the reason of the first rejection.
// Please solve it without using the built-in Promise.all function.

/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {
    
    return new Promise((resolve, reject) => {
    let results = [];
    let completedCount = 0;
    let isRejected = false;

    for (let i = 0; i < functions.length; i++) {
      functions[i]()
        .then(result => {
          results[i] = result;
          completedCount++;

          if (completedCount === functions.length && !isRejected) {
            resolve(results);
          }
        })
        .catch(error => {
          if (!isRejected) {
            isRejected = true;
            reject(error);
          }
        });
    }
  });
};


// Given an object or an array, return if it is empty.

// An empty object contains no key-value pairs.
// An empty array contains no elements.
// You may assume the object or array is the output of JSON.parse.

/**
 * @param {Object|Array} obj
 * @return {boolean}
 */

var isEmpty = function(obj) {
    if (typeof obj === 'object') {
        return (Object.keys(obj).length === 0); // Check the length of the keys array
    } else {
        return (obj.length === 0);
    }
};

 
 
