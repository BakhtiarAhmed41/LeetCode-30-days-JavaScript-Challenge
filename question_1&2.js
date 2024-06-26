// Write a function createHelloWorld. It should return a new function that always returns "Hello World".

var createHelloWorld = function() {  
    return function(){
        return "Hello World";
    };
};


// Given an integer n, return a counter function. This counter function initially returns n and 
// then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

var createCounter = function(n) {
    return function() {
        return n++;
    };
};
