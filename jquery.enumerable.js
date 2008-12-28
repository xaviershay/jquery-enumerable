(function ( $ ) {
  $.collect = function (enumerable, callback) {
    var result = [];
    $.each(enumerable, function (index) {
      result.push(callback.call(this, index));
    });
    return result;
  }
})( jQuery );
