var toDoListControllers = angular.module('toDoListControllers', []);

toDoListControllers.controller('listCntrl', ['$scope',
    function($scope) {
        $scope.items = [
            {name:'Item1', type:'HomeWork', done:false},
            {name:'Item2', type:'Training', done:false},
            {name:'Item3', type:'Assessment', done:false}
        ];

        $scope.options = [
            {name:'HomeWork'},
            {name:'Training'},
            {name:'Assessment'}
        ];

        $scope.currentItem = $scope.options[0];

        $scope.addTodo = function() {
            console.log($scope.currentItem);
            $scope.items.push({name:$scope.todoText, type:$scope.currentItem.name, done:false});
            $scope.todoText = '';
        };

        $scope.remaining = function() {
            var count = 0;
            angular.forEach($scope.items, function(item) {
                count += item.done ? 0 : 1;
            });
            return count;
        };

        $scope.archive = function() {
            var oldItems = $scope.items;
            $scope.items = [];
            angular.forEach(oldItems, function(item) {
                if (!item.done) $scope.items.push(item);
            });
        };

    }]);
