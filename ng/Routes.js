angular.module('app')
    .config(function($routeProvider){
        $routeProvider
            .when('/',{controller:'na',templateUrl:'/templates/portfolio.html'})
            .when('/contact',{controller:'ContactCtrl', templateUrl:'/templates/contact.html'})
            .when('/about',{templateUrl:'/templates/about.html'})
						.when('/pigment',{templateUrl:'/templates/pigment.html'})
    });