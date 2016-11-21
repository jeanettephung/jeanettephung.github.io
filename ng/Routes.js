angular.module('app')
    .config(function($routeProvider){
        $routeProvider
            .when('/',{controller:'HomeCtrl',templateUrl:'/templates/home.html'})
            .when('/contact',{templateUrl:'/templates/contact.html'})
            .when('/about',{templateUrl:'/templates/about.html'})
    });