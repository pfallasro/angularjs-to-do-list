var toDoListControllers = angular.module('toDoListControllers', []);

toDoListControllers.controller('listCntrl', ['$scope', 'todoService',
    function($scope, todoService) {
		$scope.init = function(){
			$scope.items = todoService.get();
            $scope.todoText = '';
		}
		
		$scope.init();

        $scope.options = [
            {name:'HomeWork'},
            {name:'Training'},
            {name:'Assessment'}
        ];

        $scope.search = {
            type: '',
            name: ''
        };

        $scope.currentItem = $scope.options[0];
		
		$scope.addTodo = function() {

            if ($scope.todoText.trim()) {
                todoService.post({
                    item: {
                        name: $scope.todoText,
                        type: $scope.currentItem.name,
                        done: false
                    }
                });
                $scope.todoText = '';
            }
		};

        $scope.remaining = function() {
            var count = 0;
            angular.forEach($scope.items, function(item) {
                count += item.done ? 0 : 1;
            });
            return count;
        };
		
		$scope.delete = function(item) {
            todoService.delete(item);
        };
		
		$scope.order = ['name', 'type'];
		
		$scope.asc = function() {
           $scope.order[0] = 'name';
        };
		
		$scope.desc = function() {
           $scope.order[0] = '-name';
        };

        $scope.homework = function() {
            $scope.search.type = 'HomeWork';
        };

        $scope.training = function() {
            $scope.search.type = 'Training';
        };

        $scope.assessment = function() {
            $scope.search.type = 'Assessment';
        };

        $scope.all = function() {
            $scope.search.type = '';
        };

    }]);
	
toDoListControllers.controller('editCntrl', ['$scope', '$routeParams', 'todoService',
    function($scope, $routeParams, todoService) {
		
		$scope.init = function(){
	
		}
		
		$scope.init();
		
		$scope.item = $scope.items[$routeParams.index];

		switch($scope.item.type){
			case 'HomeWork':
			  $scope.currentType = $scope.options[0];
			  break;
			case 'Training':
			  $scope.currentType = $scope.options[1];
			  break;
			case 'Assessment':
			  $scope.currentType = $scope.options[2];
			  break;
			default:
			  $scope.currentType = $scope.options[0];
		}

		$scope.index = $routeParams.index;

        $scope.edit = function () {
            $scope.item.type = $scope.currentType.name;
            todoService.edit($scope.index, $scope.item);
        };
	}]);