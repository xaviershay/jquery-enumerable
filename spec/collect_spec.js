Screw.Unit(function() {
  describe("collect", function() {
    var result;
    var callback = function (index) {
      return [this * this, index];
    } 
    var it_behaves_like_collect = function() {
      it("yields each element and returns a new array containing the return value of that yield", function() {
        expect([result[0][0], result[1][0], result[2][0]]).to(equal, [1, 4, 9]);
      });

      it("yields the current index to the callback function", function() {
        expect([result[0][1], result[1][1], result[2][1]]).to(equal, [0, 1, 2]);
      });
    }

    describe("global", function() {
      before(function() {
        result = jQuery.collect([1,2,3], callback);
      });

      it_behaves_like_collect();
    });

    describe("added to $()", function() {
      before(function() {
        result = jQuery([1,2,3]).collect(callback);
      });

      it_behaves_like_collect();
    });
  });
});
