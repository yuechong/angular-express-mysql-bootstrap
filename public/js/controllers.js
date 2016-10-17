angular.module('myApp.controller',[])

.controller('navCtr', ['$scope', function($scope){
	$scope.reg = function(){
		
	}

	$scope.login = function(){
		
	}
}])
/*helloCyr*/
.controller('helloCtr', ['$scope', function($scope){
	console.log("This is hello");
}])
/*aboutCtr*/
.controller('aboutCtr', ['$scope', function($scope){
	console.log("This is about");
}])
.controller('userCtr', ['$scope','$http', function($scope,$http){
	console.log("This is user");
	$scope.addUser = function(){
		var s = { name:'yy',password:'123456'};
		$http({
			method:'post',
			url:'/user/addUser',
			data:s
		}).then(function succ(resp){
			console.log(resp);
		});
		
	}
}])