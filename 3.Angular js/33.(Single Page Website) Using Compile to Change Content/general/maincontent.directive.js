(function (Directives, undefined)
{
	MCU.Module.MCU.directive("maincontent", ['$timeout', '$scompile', '$window', function ($timeout, $compile, $window)
	{
          return {
          	 restrict: 'A',
          	 link: function (scope, elm, attrs)
          	 {
          	 	$timeout(function ()
          	 	{
          	 		scope.getFilm = function (filmId)
          	 		{
          	 			scope.newFilm = scope.allFilms[filmID];
          	 			
          	 			var mainContent = elm.find('.nextFilmContainer');
          	 			mainContent.html("");
          	 			$compile(mainContent.contents())(scope);
          	 			$window.scrollTo(0,0);
          	 		}
          	 	}, 300);
          	 }
          }
	}])	
}(MCU.Directives = MCU.Directives || {} ));