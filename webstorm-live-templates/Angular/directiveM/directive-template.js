(function () {
"use strict";

angular
    .module('$app$')
    .directive('$directive$', $directive$)
    .controller('$controller$', $controller$);

    function $directive$() {

        var directive =
        {
            restrict: 'EA',
            scope: {},
            controller: '$controller$',
            controllerAs: 'vm',
            bindToController: {
                name: '='
            },
            template: [
                '<div><input ng-model="vm.name"></div>'
            ].join(''),
            //templateUrl: 'fooTemplate.html'
            link: link
        };

        return directive;

        function link(scope, el, attr, ctrl) {

        }
        //function link($scope) { }
    }



    function $controller$() {

        var vm = this;
        vm.name = '$directive$'

        activate();

        function activate() {

        }
    }

})();