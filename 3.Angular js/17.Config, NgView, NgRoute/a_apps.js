var app = angular.module('MyApp', [])
app.controller('MainController', function ($scope)
{
	$scope.labelName = "New Button";
	$scope.newElement = angular.element('<div class="btn btn-default">' + $scope.labelName + '</div>');
})
