
// Below function Executes on click of login button.

	var app=angular.module("myApp", []);
app.controller('control', function($scope,$location,$http,$rootScope,$window) {
$scope.loginRequest= function(){
data = 'name='+$scope.recname+'&email='+$scope.recemail+'&password='+$scope.recpassword;
console.log(data);
var request = $http({method: 'POST', url: 'http://atithi.dev.tudip.com/api/auth/register',
	headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
	data: data
});
request.success(function (response)
{
	console.log(JSON.stringify(response));
window.open("login.html");
});
request.error(function (response)
{
	console.log(response);
	console.log(request);
});
}
});





