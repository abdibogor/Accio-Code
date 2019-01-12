(function (Directives, undefined)
{
	MCU.Modules.MCU.directive("upcominfilms", [ function ()
	{
		return {
			  restrict: 'E',
			  controller: 'upcomingFilmsController', 
			  templatUrl: MCU.PartialsPath + "/upcomingfilms.html"
		}
	}]);
}(MCU.Directives = MCU.Directives || {} ));