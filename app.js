
var authnController=angular.module("authnController",[]);
var authnDirective=angular.module("authnDirective",[]);
var authnService=angular.module("authnService",[]);

var DI=["authnController",
	"authnDirective",
	"authnService",
	"ngRoute"];

var mainModule=angular.module("mainModule",DI);

mainModule.config(function($routeProvider){
	
	$routeProvider
	.when('/login',{templateUrl:'./Partials/PRTL_login.html'})
	.when('/summary',{templateUrl:'./Partials/PRTL_summary.html'})
	.otherwise({templateUrl:'./Partials/PRTL_login.html'})
})