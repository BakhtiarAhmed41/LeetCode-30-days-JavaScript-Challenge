// Given an integer array nums, a reducer function fn, and an initial value init, return the final result obtained by executing the fn function on each element of the array, sequentially, passing in the return value from the calculation on the preceding element.

// This result is achieved through the following operations: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. The ultimate value of val is then returned.
// If the length of the array is 0, the function should return init.
// Please solve it without using the built-in Array.reduce method.

 /**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    var val = init;
    if (nums.length == 0){
        return init;
    }
    for(var i=0; i<nums.length; i++){
       val = fn(val, nums[i]);
    }
        return val;
    
};



// Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.

// The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).
// The function composition of an empty list of functions is the identity function f(x) = x.
// You may assume each function in the array accepts one integer as input and returns one integer as output.

/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    
    return function(x) {

    for (var i=0; i<functions.length; i++){
        var n = functions.length;

        x = functions[n-i-1](x);
    }
    return x;
    }
};

 
