angular.module('app').directive('sbSameScope', function() {
  return {
  	restrict: 'AE',
      templateUrl: function(ele, attrs) {
          return attrs.templatePath;
      }
  };
});