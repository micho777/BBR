
var bbrmodule = angular.module("bbr", ["ngRoute"])
// configure our routes]
bbrmodule.config(
    function ($routeProvider) {
        console.log($routeProvider);
        $routeProvider.when('/',
            {
                templateUrl: 'views/home.html',
                controller: 'homeController'

            })
                .when('/aboutme', {
                    templateUrl: 'views/About.html',
                controller: 'aboutMeController'
                    
                })
                .when('/Photography', {
                    templateUrl: 'views/Photography.html',
                controller: 'photographyController'
                    
                })
            .when('/GraphicDesign', {
                templateUrl: 'views/GraphicDesign.html'
            })
                .when('/clients', {
                    templateUrl: 'views/Clients.html'
                })
                 .when('/contact', {
                    templateUrl: 'views/contact.html'
                })
        .otherwise({
            redirectTo: '/'
        });

    });
