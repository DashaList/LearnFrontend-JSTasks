function sum(a) {
    let sum = a;
  
    function func(b) {
      sum += b;
      return func;
    }
  
    func.toString = function() {
      return sum;
    };
  
    return func;
};