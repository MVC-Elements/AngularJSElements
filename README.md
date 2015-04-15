<a href="http://pixelscommander.com/polygon/angular-elements/demo/#.U0LMA62Sy7o">
    <img alt="Reactive Elements" src="http://pixelscommander.com/polygon/angular-elements/assets/angular-elements-logo-small.png"/>
</a>

AngularJS directives as native HTML elements (web components)
=============================================================
[![Gitter](https://badges.gitter.im/Join Chat.svg)](https://gitter.im/MVC-Elements/AngularElements?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Tiny Google [Polymer](http://polymer-project.org) or Mozilla [X-Tags](http://www.x-tags.org/) add-on which allows to use [AngularJS](https://github.com/angular/angular.js) components as [custom HTML elements](http://w3c.github.io/webcomponents/spec/custom/). Also works with a native Custom Elements implementation if present.

[Demo](http://pixelscommander.com/polygon/angular-elements/demo/)

Example
-------

**Using component in HTML**

```html
<body>
	<my-angular-component items="{window.someArray}"></my-angular-component>
</body>
```

**Angular directive definition**
```js
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

document.registerAngular('my-angular-component', 'demo');
```

**Find complete examples in corresponding folder.**

Nesting
-------

Original content of a custom element is injected to component as ```$scope._content```.

```html
<my-angular-component>Hello world</my-angular-component>
```

In this case $scope._content is equal to "Hello world".


Dependencies
------------

- [AngularJS](https://github.com/angular/angular.js)
- [X-Tag core](https://github.com/x-tag/core) or [Polymer custom elements](https://github.com/Polymer/CustomElements) or native browser support for custom elements.

License
-------

MIT: http://mit-license.org/

Copyright 2015 Stepan Suvorov aka [stevermeister](http://github.com/stevermeister), Denis Radin aka [PixelsCommander](http://pixelscommander.com)
