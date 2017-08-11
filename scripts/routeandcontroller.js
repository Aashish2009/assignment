var module = angular.module("myApp", ['ngRoute']);

    module.config(['$routeProvider', '$locationProvider',
        function($routeProvider, $locationProvider) {
            $routeProvider.
                when('/', {
                    templateUrl: 'test/page1.html',
                    controller : "myCtrl1"
                }).
                when('/form2', {
                    templateUrl: 'test/page2.html',
                    controller : "myCtrl2"
                }).
                when('/form3', {
                    templateUrl: 'test/page3.html',
                    
                }).
                otherwise({
                    redirectTo: 'index.html'
                });
                 //$locationProvider.html5Mode(true); //Remove the '#' from URL
        }]);

    module.controller('myCtrl1',function($scope,$location) {
        $scope.details={};
        $scope.details.phoneno = "";

        $scope.clicked=function(path){
            alert($scope.details.phoneno);
            //alert(JSON.stringify(details));--- not working
            $location.path("/form2" );
              
        };
        
    });

    module.controller('myCtrl2', function($scope,$location) {
    
        
    });