function makeCounter() {

    function counter() {
        return counter.count++;
    };
    
    counter.count = 0;

    counter.set = function(value) {
        counter.count = value;
    };

    counter.decrease = function() {
        return counter.count--;
    };
    
    return counter;
};