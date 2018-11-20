authnController.controller("detailUser",function($scope,$window,data){
	
	$scope.userdata=data.retrieveData();
	
	$scope.back=function(){
		$window.location='#!/login';
	}
	
})