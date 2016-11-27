angular.module('app')
    .config(function($routeProvider){
        $routeProvider
            .when('/',{controller:'na',templateUrl:'/templates/portfolio.html'})
            .when('/contact',{controller:'ContactCtrl', templateUrl:'/templates/contact.html'})
            .when('/about',{templateUrl:'/templates/about.html'})
						.when('/pigment',{templateUrl:'/templates/pigment.html'})
						.when('/bridge',{templateUrl:'/templates/bridge.html'})
						.when('/win8',{templateUrl:'/templates/win8.html'})
						.when('/cogs',{templateUrl:'/templates/cogs.html'})
    });