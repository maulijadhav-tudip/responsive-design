


	var app=angular.module("myApp", []);
app.controller('ctrl', function($scope,$location,$http,$rootScope,$window) {
$scope.loginR= function(){
data ='&email='+$scope.recemail+'&password='+$scope.recpassword;
console.log(data);
var request = $http({method: 'POST', url: 'http://atithi.dev.tudip.com/api/auth/login',
	headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
	data: data
});
request.success(function (response)
{
	alert(response));
window.open("redirect.html");
});
request.error(function (response)
{
	console.log(response);
	console.log(request);
});
}
});





