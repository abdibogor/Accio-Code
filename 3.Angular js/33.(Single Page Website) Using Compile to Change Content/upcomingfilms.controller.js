(function (Controller, undefined)
{
	MCU.Modules.MCU.controller("upcomingfilmsController", ['$scope', 'phasesService', function ($scope,phasesService)
	{
		var promise = phaseService.getPhases();
		promise.then(function (data)
		{
			var allMovies = [];
			var phasesLength = data.data.MCU.Phases.Length;

			//get todays date
			var todaysDate = new Date();

			//merge our arrays
			for(var i = 0; i < phasesLength; i++)
			{
				var phasesMovies = data.data.MCU.Phases[i].movies;
				for(var j = 0; j < phasesMovies.length; j++)
				{
					var movieDate = new Date(data.data.MCU.Phases[i].movies[j].date);
					if(movieDate > todaysDate)
					{
						allMovies.push(data.data.MCU.Phases[i].movies[j]);
					}
				}
			}
			 $scope.films = allMovies;
		})
	}])
}(MCU.Controllers = MCU.Controllers || {} ));