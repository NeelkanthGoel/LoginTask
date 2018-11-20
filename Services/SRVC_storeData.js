authnService.service("data",function($window){
	var data={};
	this.storeData=function(json){
		data=json;
		console.log(data);
	}
	
	this.retrieveData=function(){
		return data;
	}
})