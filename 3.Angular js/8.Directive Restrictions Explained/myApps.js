/*  use Strict */
var app = angular.module('MyApp', []);

app.controller('ShieldCtrl', function ($scope)
{
	$scope.shieldNames = [];

	this.addReigns = function ()
	{
		$scope.shieldNames.push("Roman Reigns: Juggernaut");
	};
	this.addRollins = function ()
	{
		$scope.shieldNames.push("Roman Reigns: Juggernaut");
	};
	this.addAmbrose = function ()
	{
		$scope.shieldNames.push("Dean Ambrose: Lunatic Fringe");
	};
})

.directive('reigns', function ()
{
	 returns {
	 	  require: 'theshield',
	 	  link: function(scope, element, attrs, ShieldCtrl)
	 	   {
	 	   	ShieldCtrl.addReigns();
	 	   }
	 }
})

.directive('theshield', function ()
{
	 return {
	 	   restrict: 'E',
	 	   scope: {},
	 	   controller: 'ShieldCtrl', 
	 	   link: function(scope element, attrs)
	 	   {
	 	   	element.bind('mouseenter', function ()
	 	   	{
	 	   		 console.log(scope.shieldNames);
	 	   	});
	 	   }
	 }
})

app.directive('interactiviteBtn', function()
{

	  return {
	  	restrict: 'A',
	  	link: function (scope, element, attrs)
	  	 {
          element.bind('mouseenter', function ()
          {
          	 console.log(element);
          	 element[0].innerText = "Rolled Over";
           });

          element.bind('mouseleave', function ()
          {
          	 element[0].innerText = "Rolled Out";
          })

	  	 }
	  }
	  
});

.directive('walterwhite', function ()
{
	  return {
	  	restrict: 'E',
	  	transclude: true,
	  	link: function(scope, element, attrs)
	  	{
	  		console.log(scope);
	  		console.log(element);
	  		console.log(attrs);
	  		
	  	}
	  }
	/*
   return {
  			 restrict: 'E',
  			 transclude: true,
  			 template: '<h2>I am Heisenberg</h2>'
     }
     */
});
