angular.module('ez.focus-select', []).directive('ezFocusSelect', ['$timeout', function ($timeout) {
  return {
    link: function (scope, element) {
      element.on('focus', function() {
        // use timeout to allow mouseup event to occur
        $timeout(function() {
          // 2nd click should give user normal input control
          if (!element.hasClass('ez-focus-selected')) {
            element.select();
          }

          element.toggleClass('ez-focus-selected');
        }, 0);
      }).on('blur', function() {
        element.removeClass('ez-focus-selected');
      });
    }
  };
}]);
