Screw.Unit(function() {
  describe("collect", function() {
    it("yields each element and returns a new array containing the return value of that yield", function() {
      result = jQuery.collect([1,2,3], function () {
        return this * this;
      });
      expect(result).to(equal, [1, 4, 9]);
    });

    it("yields the current index to the callback function", function() {
      result = jQuery.collect([1,2,3], function (index) {
        return index;
      });
      expect(result).to(equal, [0, 1, 2]);
    });
  });
});
