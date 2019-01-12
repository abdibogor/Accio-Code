(function (Directives, undefined)
{
	MCU.Modules.MCU.directive("homepage", [function ()
	{
		  return {
		  	restrict: 'E',
		  	controller: 'HomepageCtrl',
		  	link: function (scope, elm, attrs)
		  	{
		  		console.log('I am the directive for the home page');
		  	}
		  }
	}]);
}(MCU.Directives = MCU.Directives || {} ))