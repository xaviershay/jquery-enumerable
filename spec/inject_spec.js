Screw.Unit(function() {
  describe("inject", function() {
    describe("given an initial value and callback function as parameters", function () {
      var result;
      var callback = function (accumulator, index) {
        accumulator.push([this * this, index]);
        return accumulator;
      } 
      var it_behaves_like_inject = function() {
        it("takes a callback with an accumulator (with argument as initial value) and the current index, with the current element in this. Value of block becomes new accumulator", function() {
          expect(result).to(equal, [[1, 0], [4, 1], [9, 2]]);
        });
      }

      describe("static", function() {
        before(function() {
          result = jQuery.inject([1,2,3], [], callback);
        });

        it_behaves_like_inject();
      });

      describe("fn", function() {
        before(function() {
          result = jQuery([1,2,3]).inject([], callback);
        });

        it_behaves_like_inject();
      });
    });

    describe("given a callback that is not callable", function () {
      var action;
      var it_behaves_like_inject = function() {
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
        action = function() { jQuery.inject([], 0, null); }
        it_behaves_like_inject();
      });

      describe("fn", function() {
        action = function() { jQuery([]).inject(0, null); }
        it_behaves_like_inject();
      });
    });
  });  
});
