angular.module('demo', []).directive('angularList', function () {
    return {
        restrict: 'E',
        scope: {},
        template: '<ul><li ng-repeat="x in items">{{ x }}</li></ul>',
        link: function (scope) {
            scope.testMethod = function () {
                alert('Directive method called as node method');
            }
        }
    };
});

document.registerAngular('angular-list', 'demo.angularList');