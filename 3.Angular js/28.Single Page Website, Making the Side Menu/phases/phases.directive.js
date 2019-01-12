(function (Directives, undefined)
{
	MCU.Modules.MCU.directive("phase", [ function ()
	{
		   return {
		   	 restrict: 'E',
		   	 controller: 'PhasesCtrl',
		   	 templateUrl: MCU.PartialPath
		   }
	}])	
}(MCU.Directives = MCU.Directives || {} ));
