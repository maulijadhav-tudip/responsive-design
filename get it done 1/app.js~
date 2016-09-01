var gap= angular.module("routingDemoApp",['ngRoute']);
           
            gap.config(['$routeProvider', function($routeProvider){
                $routeProvider
                
                .when('/login',{templateUrl:'login.html'})
                .when('/register',{templateUrl:'register1.html'})
                .when('/redirect',{templateUrl:'redirect.html'})
                 .when('/add_visitor',{templateUrl:'add_visitor.html'})
                 .when('/redirect',{templateUrl:'redirect.html'})
                .otherwise({redirectTo:'/'});
            }]);
        




gap.controller('log_con', function($scope,$location,$http,$rootScope,$window) {
$scope.log_req= function(uname, password){
	console.log(uname, password);
var request = $http({method: "post",url:"http://atithi.dev.tudip.com/api/auth/login",
data: {
email: uname,
password: password
},
headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin':'*' }
})
request.success(function (response) 
{
$window.sessionStorage.setItem('login_Token',response.token);
var token=$window.sessionStorage.getItem('login_Token');

alert(response);

})
}
});
