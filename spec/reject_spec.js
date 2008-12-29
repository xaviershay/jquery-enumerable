Screw.Unit(function() {
  describe("reject", function() {
    describe("given a callback as a parameter", function() {
      var result;
      var callback = function (index) {
        return this == 1 || index == 1;
      } 
      var it_behaves_like_reject = function() {
        it("returns a new array containing only the elements for which the callback, called with the current index, returned false", function() {
          expect(result).to(equal, [3]);
        });
      }

      describe("static", function() {
        before(function() { result = jQuery.reject([1,2,3], callback); });
        it_behaves_like_reject();
      });

      describe("fn", function() {
        before(function() { result = jQuery([1,2,3]).reject(callback); });
        it_behaves_like_reject();
      });
    });

    describe("given a callback that is not callable", function () {
      var action;
      var it_behaves_like_reject = function() {
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
        action = function() { jQuery.reject([], null); }
        it_behaves_like_reject();
      });

      describe("fn", function() {
        action = function() { jQuery([]).reject(null); }
        it_behaves_like_reject();
      });
    });
  });
});
