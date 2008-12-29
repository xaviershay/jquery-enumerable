Screw.Unit(function() {
  describe("all", function() {
    var callStatic   = function(enumerator, callback) { 
      return jQuery.all(enumerator, callback) 
    }
    var callIterator = function(enumerator, callback) { 
      return jQuery(enumerator).all(callback);
    }

    Screw.Unit.enumerableContext(callStatic, callIterator, function() {
      expect_result("returns true if the callback evaluates true for all item in the array", true, function(f) {
         return f([0, 1, 2], function(index) { return this == index })
      });

      expect_result("returns false if the callback evaluates false for any item in the array", false, function(f) {
         return f([0, 2, 2], function(index) { return this == index })
      });

      it_protects_from_invalid_callback();
    });
  });
});
