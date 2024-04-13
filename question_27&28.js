// Given an object or array obj, return a compact object. A compact object is the same as the original object, except with keys containing falsy values removed.
// This operation applies to the object and any nested objects. Arrays are considered objects where the indices are keys. A value is considered falsy when Boolean(value) returns false.

function compactObject(obj) {
    if (!obj) {
        return obj;
    }

    if (Array.isArray(obj)) {
        return obj.filter(item => Boolean(item)).map(item => compactObject(item));
    }

    if (typeof obj === 'object') {
        const compactedObj = {};

        for (const key in obj) {
            const compactedValue = compactObject(obj[key]);

            if (Boolean(compactedValue)) {
                compactedObj[key] = compactedValue;
            }
        }
        return compactedObj;
    }

    return obj;
}



// Design an EventEmitter class. This interface is similar (but with some differences) to the one found in Node.js or
// the Event Target interface of the DOM. The EventEmitter should allow for subscribing to events and emitting them.

// Your EventEmitter class should have the following two methods:

// subscribe - This method takes in two arguments: the name of an event as a string and a callback function.
// This callback function will later be called when the event is emitted.
// An event should be able to have multiple listeners for the same event. When emitting an event with multiple callbacks,
// each should be called in the order in which they were subscribed. An array of results should be returned. 
// You can assume no callbacks passed to subscribe are referentially identical.
// The subscribe method should also return an object with an unsubscribe method that enables the user to unsubscribe.
// When it is called, the callback should be removed from the list of subscriptions and undefined should be returned.
// emit - This method takes in two arguments: the name of an event as a string and an optional array of arguments that

// will be passed to the callback(s). If there are no callbacks subscribed to the given event, return an empty array.
// Otherwise, return an array of the results of all callback calls in the order they were subscribed.

class EventEmitter {
    constructor() {
        this.events = {};
    }

    /**
     * @param {string} eventName
     * @param {Function} callback
     * @return {Object}
     */
    subscribe(eventName, callback) {
        // Create an array for the event if it doesn't exist
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }

        // Add the callback to the array for the event
        this.events[eventName].push(callback);

        // Return an object with an unsubscribe method
        return {
            unsubscribe: () => {
                // Remove the callback from the array for the event
                this.events[eventName] = this.events[eventName].filter(cb => cb !== callback);
                // Return undefined as per the requirements
                return undefined;
            }
        };
    }

    /**
     * @param {string} eventName
     * @param {Array} args
     * @return {Array}
     */
    emit(eventName, args = []) {
        // If no callbacks subscribed to the event, return an empty array
        if (!this.events[eventName]) {
            return [];
        }

        // Call each callback with the provided arguments
        const results = this.events[eventName].map(callback => callback(...args));

        // Return an array of results
        return results;
    }
}
