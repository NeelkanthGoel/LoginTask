authnService.service("validator",function($window){
	this.passwordValidator=function(value){
		var regularExpPass = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
		if(regularExpPass.test(value)){
			return true;
		}else{
			return false;
		}
	}
	
	this.emailValidator=function(value){
		var regularExpEmail = new RegExp("^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}");
		if(regularExpEmail.test(value)){
			return true;
		}else{
			return false;
		}
	}
})