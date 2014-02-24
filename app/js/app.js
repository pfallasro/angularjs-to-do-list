'use strict';

var toDoListApp = angular.module('toDoListApp', [
    'ngRoute',
    'toDoListControllers'
]);

toDoListApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'partials/list.html'

        })
        .otherwise({
            redirectTo: '/'
        });
}
]);
