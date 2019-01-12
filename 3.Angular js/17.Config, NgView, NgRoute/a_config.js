/* use strict  */
.config(function ($routeProvider)
{
	$routerProvide
	   .when('/',
	   {
	   	templateUrl: "partials/sample.html",
	   	controlle: "MainPageCtrl"
	   })
	   .when('/pageTwo',
	   {
	   	template: '<div>This is page <strong>two</strong>!</div>'
	   })
	   .otherwise (
	   {
         template: '<div><strong>THERE IS NO PAGE HERE!</strong></div>'
	   })
})

.