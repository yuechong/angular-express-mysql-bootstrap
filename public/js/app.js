
angular.module('app',[
	'myApp.controller',
	'myApp.services',
	// 'myApp.directives',
	'ui.router'
 ])
.config(['$stateProvider',function($stateProvider) {

	$stateProvider
	.state('about',{
		url: '/about',
		templateUrl: '../html/views/about.html',
		controller:'aboutCtr'
	})
	.state('hello',{
		url: '/hello',
		templateUrl: '../html/views/hello.html',
		controller:'helloCtr'
	})
	.state('user',{
		url: '/user',
		templateUrl: '../html/views/user.html',
		controller: 'userCtr'
	})
 }]);