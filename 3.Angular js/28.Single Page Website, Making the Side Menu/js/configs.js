(function (Configs, undefined)
{

	MCU.Modules.MCU.Config(['$routeProvider, function ($routeProvider)'
	{
		$routeProvider
		    .when('/', {
		    	templateUrl: MCU.PartialsPath + '/home.html'
		    })
		    .when ('/films', {home.html
		    	templateUrl: MCU.PartialsPath + '/films.html'
		    })
		    .when ('/characters', {
		    	templateUrl: MCU.PartialsPath + '/characters1.html'
		    })
		    .when ('/phase1', {
		    	templateUrl: MCU.PartialsPath + '/phase1.html'
		    })
		    .when ('/phase2', {
		    	templateUrl: MCU.PartialsPath + '/phase2.html'
		    })
		    .when ('/phase3', {
		    	templateUrl: MCU.PartialsPath + '/phase3.html'
		    })
		    .otherwise({
		    	  redirecTo: '/',
		    	  templateUrl: MCU.PartialsPath + '/home.html'
		    })
	}]);

}(MCU.Configs = MCU.Configs || {} ));