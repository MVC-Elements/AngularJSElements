angular.module('demo', []).directive('angularList', function () {
    return {
        restrict: 'E',
        replace: true,
        scope: {},
        template: '<ul><li ng-repeat="x in items">{{ x }}</li></ul>',
        link: function (scope) {
            scope.items = [
                'AngularJS',
                'is',
                'great',
                'and now',
                'you can convert direvtives',
                'to a web-components',
                'with document.registerAngular("component-name", MyDirectiveName)'
            ];

            scope.testMethod = function () {
                alert('Directive method called as node method');
            }
        }
    };
});

document.registerAngular('angular-list', 'demo.angularList');