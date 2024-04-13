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
