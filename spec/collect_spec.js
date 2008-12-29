Screw.Unit(function() {
  describe("collect", function() {
    var callStatic   = function(enumerator, callback) { 
      return jQuery.collect(enumerator, callback) 
    }
    var callIterator = function(enumerator, callback) { 
      return jQuery(enumerator).collect(callback);
    }

    Screw.Unit.enumerableContext(callStatic, callIterator, function() {
      expect_result("returns a new array with the results of passing the current index to the block, with the current element in this", [[1, 0], [4, 1], [9, 2]], function(f) {
        return f([1,2,3], function(index) { return [this * this, index] })
      });

      it_protects_from_invalid_callback();
    });


    describe("iterator function", function() {
      it("does not automatically extend the returned array so that you can use regular array function if you like (such as join)", function() {
        expect(callIterator([], function() {}) instanceof Array).to(equal, true);
      });

      it("works on DOM elements", function() {
        $('<span>satan</span><span>oscillate</span><span>my</span><span>metallic</span><span>sonatas</span>').appendTo( $('#dom_test') );

        expect(callIterator('#dom_test span', function() { return $(this).text() })).
          to(equal, ['satan', 'oscillate', 'my', 'metallic', 'sonatas']);
      });
    });
  });
});
