// Write code that enhances all arrays such that you can call the array.groupBy(fn) method on any array and it will return a grouped version of the array.

// A grouped array is an object where each key is the output of fn(arr[i]) and each value is an array containing all items in the original array with that key.
// The provided callback fn will accept an item in the array and return a string key.
// The order of each value list should be the order the items appear in the array. Any order of keys is acceptable.
// Please solve it without lodash's _.groupBy function.

Array.prototype.groupBy = function(fn) {
    var groups = {};
    
    // Iterate through each element in the array
    this.forEach(function(element) {
        // Apply the grouping function to get the key
        var key = fn(element);
        
        // Check if the key already exists in groups, if not, create an empty array
        if (!groups[key]) {
            groups[key] = [];
        }
        
        // Push the element to the array corresponding to the key
        groups[key].push(element);
    });
    
    return groups;
};


// Given an array arr and a function fn, return a sorted array sortedArr. You can assume fn only returns numbers and those numbers determine the sort order of sortedArr.
// sortedArray must be sorted in ascending order by fn output.
// You may assume that fn will never duplicate numbers for a given array.


var sortBy = function(arr, fn)  {
// const sortedArr =
 return arr.slice().sort((a, b) => fn(a) - fn(b));
//   return sortedArr;
  };

 
