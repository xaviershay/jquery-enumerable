Screw.Unit(function() {
  before(function() {
    $('dom_test').empty();
  });

  Screw.Unit.it_behaves_like_a_method_with_callback_protection = function(action) {
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

  Screw.Unit.enumerableContext = function(callStatic, callIterator, context) {
    var toArray = function() {
      var result = []
      for (var i = 0; i < this.length; i++)
        result.push(this[i])
      return(result)
    }

    var describeStaticAndIterator = function(def) {
      describe("static function",   function() { def(callStatic) });
      describe("iterator function", function() { def(callIterator) });
    }

    enumerableHelpers = {
      it_protects_from_invalid_callback: function() { 
        var extraArguments = toArray.apply(arguments);

        describe("given a callback that is not callable", function () {
          describeStaticAndIterator(function (f) {
            Screw.Unit.it_behaves_like_a_method_with_callback_protection(function() { 
              f.apply(this, [[]].concat(extraArguments.concat([null]))); 
            });
          });
        });
      },

      expect_result: function(description, expected, f) {
        describeStaticAndIterator(function(x) {
          it(description, function() {
            expect(f(x)).to(equal, expected);
          });
        });
      }
    }
    var contents = context.toString().match(/^[^\{]*{((.*\n*)*)}/m)[1];

    fn = new Function("with (enumerableHelpers) { " + contents.toString() + "}");
    fn();
  }
});
