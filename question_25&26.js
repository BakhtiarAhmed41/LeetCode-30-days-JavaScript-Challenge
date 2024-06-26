// Given two arrays arr1 and arr2, return a new array joinedArray. All the objects in each of the two inputs arrays will contain an id field that has an integer value. 
// joinedArray is an array formed by merging arr1 and arr2 based on their id key. The length of joinedArray should be the length of unique values of id. 
// The returned array should be sorted in ascending order based on the id key.

// If a given id exists in one array but not the other, the single object with that id should be included in the result array without modification.

// If two objects share an id, their properties should be merged into a single object:
// If a key only exists in one object, that single key-value pair should be included in the object.
// If a key is included in both objects, the value in the object from arr2 should override the value from arr1.

/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
 const idMap = new Map();
    
    for (const obj of arr1) {
        idMap.set(obj.id, obj);
    }
    
    for (const obj of arr2) {
        if (idMap.has(obj.id)) {
            Object.assign(idMap.get(obj.id), obj);
        } else {
            idMap.set(obj.id, obj);
        }
    }
    
    
    return Array.from(idMap.values()).sort((a, b) => a.id - b.id);
}



// Given a multi-dimensional array arr and a depth n, return a flattened version of that array.

/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    return arr.flat(n);
};
