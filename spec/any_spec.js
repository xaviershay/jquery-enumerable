Screw.Unit(function() {
  describe("any", function() {
    var callStatic   = function(enumerator, callback) { 
      return jQuery.any(enumerator, callback) 
    }
    var callIterator = function(enumerator, callback) { 
      return jQuery(enumerator).any(callback);
    }

    Screw.Unit.enumerableContext(callStatic, callIterator, function() {
      expect_result("returns true if the callback evaluates true for any item in the array", true, function(f) {
         return f([1, 1, 2], function(index) { return this == 2 && index == 2})
      });

      expect_result("returns false if the callback evaluates false for all items in the array", false, function(f) {
         return f([1, 1, 2], function(index) { return this == 3 })
      });

      expect_result("short circuits evaluation as soon as a true result is found", true, function(f) {
        var pass = null;
        f([function() { pass = true }, function() { pass = false; }], function() {
          this(); 
          return true;
        })
        return pass;
      });

      it_protects_from_invalid_callback();
    });
  });
});
