function angularListDirective(){
  return {
    restrict: 'E',
    replace: true,
    template: '<ul><li ng-repeat="x in items">{{ x }}</li></ul>',
    link: function(scope) {
      scope.items = [
        'AngularJS',
        'is',
        'great',
        'and now',
        'you can convert direvtives',
        'to a web-components',
        'with document.registerAngular("component-name", MyDirectiveClass)'
      ];
    }
  };
}

angular.module('demo', []).directive('angularList', angularListDirective);

document.registerAngular('angular-list', 'angularList');