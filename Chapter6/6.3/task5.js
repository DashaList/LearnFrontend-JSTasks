function inBetween(a, b) {
    return function(el) {
        return el >= a && el <= b;
    };
};

function inArray(arr) {
    return function(el) {
        return arr.includes(el);
    };
};