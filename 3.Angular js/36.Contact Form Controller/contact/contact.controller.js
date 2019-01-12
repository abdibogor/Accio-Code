(function (Controllers, undefined)
{
	MCU.Modules.MCU.controller("contactController", ['scope', '$http', function ($scope, $http)
	{
		 $scope.result  =  'hidden';
		 $scope.resultMessage = 'message';
		 $scope.contactData;
		 $scope.submitButtonDisabled  = false;
		 $scope.submitted             = false;
		 $scope.submit = function(contactForm)
		 {
		 	console.log(contactForm);
		 	$scope.submitted    = true;
		 	$scope.submittedButtonDisabled  = true;
		 	if(contactForm.$valid)
		 	{
		 		$http({
		 			method: 'POST',
		 			url: 'mywebsite/myform.php',
		 			headers: {'Content-Type' : 'applications/x-www.form-urlencoded'}
		 		}).success(function(data)
		 		{
		 			if(data.success)
		 			{
		 				$scope.submitButtonDisabled     = true;
		 				$scope.resultMessage =  data.message;
		 				$scope.result   = 'bg-success';
		 			}
		 			else
		 			{
		 				$scope.submitButtonDisabled  = false;
		 				$scope.resulMessage = data.message;
		 				$scope.result  = 'bg-danger';
		 			}
		 		});
		 	}
		 	else
		 	{
		 		$scope.submitButtonDisabled   = false;
		 		$scope.resultMessage = "fail to submit."
		 		$scope.result   = 'bg-danger';
		 	}
		 }
	}])

}(MCU.Controllers = MCU.Controllers || {} ))