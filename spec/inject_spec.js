Screw.Unit(function() {
  describe("inject", function() {
    var callStatic   = function(enumerator, initialValue, callback) { 
      return jQuery.inject(enumerator, initialValue, callback) 
    }
    var callIterator = function(enumerator, initialValue, callback) { 
      return jQuery(enumerator).inject(initialValue, callback);
    }

    Screw.Unit.enumerableContext(callStatic, callIterator, function() {
      expect_result("takes a callback with an accumulator (with argument as initial value) and the current index, with the current element in this. Value of block becomes new accumulator", [[1, 0], [4, 1], [9, 2]], function(f) {
        return f([1,2,3], [], function (accumulator, index) {
          accumulator.push([this * this, index]);
          return accumulator;
        })
      });  

      it_protects_from_invalid_callback(0);
    });
  });  
});
