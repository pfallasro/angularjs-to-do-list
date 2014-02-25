'use strict';

var toDoListApp = angular.module('toDoListApp', [
    'ngRoute',
    'toDoListControllers',
	'toDoListServices'
]);

toDoListApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'partials/list.html',
            controller: 'listCntrl'
        })
		.when('/edit/:index', {
				templateUrl:'partials/edit.html',
				controller:'editCntrl'
		})
        .otherwise({
            redirectTo: '/'
        });
}
]);
