(function ( $ ) {
  $.collect = function (enumerable, callback) {
    var result = [];
    $.each(enumerable, function (index) {
      result.push(callback.call(this, index));
    });
    return result;
  }

  $.fn.collect = function(callback) {
    return $.collect(this, callback);
  }
})( jQuery );
