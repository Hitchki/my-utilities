(function () {
    "use strict";

    //angular.module('$app_Later$', []);
    angular.module('$app$')
        .controller('$controllerName$', $controllerName$);

    /*
     * filename: $filename$
     * controller: $controllerNameComment$
     */

    $controllerNameInject$.$inject = ['$injectable$'];

    function $controllerName$($injectable$) {
        var vm = this;
        vm.title = '$controllerName$';
        $END$

        activate();

        function activate() {

        }
    }

})();