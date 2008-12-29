Screw.Unit(function() {
  describe("select", function() {
    var callStatic   = function(enumerator, callback) { 
      return jQuery.select(enumerator, callback) 
    }
    var callIterator = function(enumerator, callback) { 
      return jQuery(enumerator).select(callback);
    }

    Screw.Unit.enumerableContext(callStatic, callIterator, function() {
      expect_result("given a callback as a parameter, returns a new array containing only the elements for which the callback, called with the current index, returned true", [1,2], function(f) {
         return f([1,2,3], function(index) { return this == 1 || index == 1})
      });

      it_protects_from_invalid_callback();
    });
  });
});
