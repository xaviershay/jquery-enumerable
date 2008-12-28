Screw.Unit(function() {
  describe("collect", function() {
    describe("given a callback as a parameter", function() {
      var result;
      var callback = function (index) {
        return [this * this, index];
      } 
      var it_behaves_like_collect = function() {
        it("returns a new array with the results of passing the current index to the block, with the current element in this", function() {
          expect(result).to(equal, [[1, 0], [4, 1], [9, 2]]);
        });
      }

      describe("static", function() {
        before(function() { result = jQuery.collect([1,2,3], callback); });
        it_behaves_like_collect();
      });

      describe("fn", function() {
        before(function() { result = jQuery([1,2,3]).collect(callback); });
        it_behaves_like_collect();

        it("can be chained", function() {
          expect(result.collect(function() { return this })).to(equal, [[1, 0], [4, 1], [9, 2]]);
        });

        it("works on DOM elements", function() {
          $('<span>satan</span><span>oscillate</span><span>my</span><span>metallic</span><span>sonatas</span>').appendTo( $('#dom_test') );

          expect($('#dom_test span').collect(function() { return $(this).text() })).
            to(equal, ['satan', 'oscillate', 'my', 'metallic', 'sonatas']);
        });
      });
    });  

    describe("given a callback that is not callable", function () {
      var action;
      var it_behaves_like_collect = function() {
        it("throws an exception", function() {
          var message = '';
          try {
            action();
          } catch(e) {
            message = e
          }
          expect(message).to(equal, 'callback needs to be a function, it was: null');
        });
      }

      describe("static", function() {
        action = function() { jQuery.collect([], null); }
        it_behaves_like_collect();
      });

      describe("fn", function() {
        action = function() { jQuery([]).collect(null); }
        it_behaves_like_collect();
      });
    });
  });
});
