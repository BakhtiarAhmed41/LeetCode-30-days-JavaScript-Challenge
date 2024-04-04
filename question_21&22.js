
// Given an array arr and a chunk size size, return a chunked array. A chunked array contains the original elements in arr, 
// but consists of subarrays each of length size. The length of the last subarray may be less than size if arr.length is not evenly divisible by size.

// You may assume the array is the output of JSON.parse. In other words, it is valid JSON.
// Please solve it without using lodash's _.chunk function.

/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    var newArr = [];
    var n = arr.length; // Fixed typo here
    var k = 0;

    while (k < n) {
        newArr.push(arr.slice(k, k + size));
        k += size;
    }

    return newArr;
};



// Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element.
// If there are no elements in the array, it should return -1.

// You may assume the array is the output of JSON.parse.


/**
 * @return {null|boolean|number|string|Array|Object}
 */

Array.prototype.last = function() {
    var n = this.length;

    if(n == 0){
        return -1;
    }

    else{
    return this[n-1];
    }
};

 
 
