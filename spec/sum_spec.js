Screw.Unit(function() {
  describe("sum", function() {
    var result;
    var it_behaves_like_sum = function() {
      it("sums all elements in the array", function() {
        expect(result).to(equal, 6);
      });
    }

    describe("static", function() {
      before(function() { result = jQuery.sum([1,2,3]); });
      it_behaves_like_sum();
    });

    describe("fn", function() {
      before(function() { result = jQuery([1,2,3]).sum(); });
      it_behaves_like_sum();
    });
  });  
});  
