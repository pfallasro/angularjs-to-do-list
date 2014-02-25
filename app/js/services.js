var toDoListServices = angular.module('toDoListServices', []);

toDoListServices.service('todoService', function ($rootScope) {
    var storeName = 'todo';
    var list = angular.fromJson(localStorage.getItem(storeName)) || [];

	this.get = function() {
		return list;
	};

	this.save = function() {
		localStorage.setItem(storeName, angular.toJson(list));
	};

	this.post = function(item) {
        list.push(item.item);
        this.save();
    };

    this.edit = function(index, item) {
       list[index] = item;
        this.save();
    };
	
	this.delete = function (item) {
        var i = list.indexOf(item);
        if (i > -1) {
            list.splice(i, 1);
        }
		
        this.save();
    };
	
});