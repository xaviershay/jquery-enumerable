Screw.Unit(function() {
  describe("sum", function() {
    var callStatic   = function(enumerator) { 
      return jQuery.sum(enumerator) 
    }
    var callIterator = function(enumerator) { 
      return jQuery(enumerator).sum();
    }

    Screw.Unit.enumerableContext(callStatic, callIterator, function() {
      expect_result("it sums all elements in the array", 6, function(f) {
         return f([1,2,3]);
      });
    });
  });
});
