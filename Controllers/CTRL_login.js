authnController.controller("loginController",function($scope,$window,data,validator){
	
	$scope.email='';
	$scope.password='';
	$scope.subscriptionName='Advanced';
	$scope.subscriptions=['Basic','Advanced','Pro'];
	$scope.enableButton=false;
	
	$scope.enterPassword=function(){
		$scope.field2=false;
		$scope.showinvalidPass=false;
		var enterpass=$scope.password;
		if(enterpass===null && enterpass===undefined && enterpass===""){
			$scope.field2=false;
		}else{
			if(validator.passwordValidator(enterpass)){
				$scope.field2=true;
				$scope.showinvalidPass=false;
			}else{
				$scope.field2=false;
				$scope.showinvalidPass=true;
			}
		}
		buttonEnable();
	};
	
	$scope.reEnterPassword=function(){
		$scope.field2=false;
		$scope.showinvalidPass=false;
		var enterpass=$scope.password;
		if(enterpass==null && enterpass==undefined && enterpass==""){
			$scope.field2=false;
		}else{
			if(validator.passwordValidator(enterpass)){
				$scope.field2=true;
			}else{
				$scope.field2=false;			}
		}
		buttonEnable();
	};
	
	$scope.enterEmail=function(){
		$scope.field1=false;
		$scope.showinvalidEmail=false;
		var enterEm=$scope.email;
		if(enterEm===null && enterEm===undefined && enterEm===""){
			$scope.field1=false;
		}else{
			if(validator.emailValidator(enterEm)){
				$scope.field1=true;
				$scope.showinvalidEmail=false;
			}else{
				$scope.field1=false;
				$scope.showinvalidEmail=true;
			}
		}
		buttonEnable();
	};
	
	$scope.reEnterEmail=function(){
		$scope.field1=false;
		$scope.showinvalidEmail=false;
		var enterEm=$scope.email;
		if(enterEm==null && enterEm==undefined && enterEm==""){
			$scope.field1=false;
		}else{
			if(validator.emailValidator(enterEm)){
				$scope.field1=true;
			}else{
				$scope.field1=false;			}
		}
		buttonEnable();
	};
	
	function buttonEnable(){
		if($scope.field2 && $scope.field1){
			$scope.enableButton=true;
		}else{
			$scope.enableButton=false
		}
	} ;
	
	$scope.submit=function(){
		var json={subscriptionName:$scope.subscriptionName,email:$scope.email,password:$scope.password};
		data.storeData(json);
		$window.location='#!/summary';
		
	};
	
	$scope.clear=function(){
		var a=confirm('Do you want to exist');
		if(a){
			$scope.email='';
			$scope.password='';
			$scope.subscriptionName='Advanced';
			$scope.enableButton=false;
		}
	};
})