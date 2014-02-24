var toDoListControllers = angular.module('toDoListControllers', []);

toDoListControllers.controller('listCntrl', ['$scope',
    function($scope) {
        $scope.items = [
            {name:'Tom', type:'HomeWork'},
            {name:'Jeffrey', type:'Training'},
            {name:'Joe', type:'Assessment'}
        ];

        $scope.options = [
            {name:'HomeWork'},
            {name:'Training'},
            {name:'Assessment'}
        ];

        $scope.addTodo = function() {
            $scope.items.push({name:$scope.todoText, type:$scope.currentItem});
            $scope.todoText = '';
        };

    }]);
