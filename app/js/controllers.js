var toDoListControllers = angular.module('toDoListControllers', []);

toDoListControllers.controller('listCntrl', ['$scope',
    function($scope) {
        $scope.items = [
            {name:'Tom', type:'HomeWork'},
            {name:'Jeffrey', type:'Training'},
            {name:'Joe', type:'Assessment'}
        ];
    }]);
