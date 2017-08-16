// var module = angular.module("myApp", ['ngRoute','uiGmapgoogle-maps']);
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
                    controller : "myCtrl3"
                    
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
            if($scope.details.phoneno==""){
                alert("Invalid input.");    
            }
            else{
                alert(JSON.stringify($scope.details));
                $location.path("/form2" );
            }   
        };
        
    });

    module.controller('myCtrl2', function($scope,$location) {
        $scope.data={};
        $scope.data.fromdate="";
        $scope.data.todate="";
        $scope.data.fromtime="";
        $scope.data.totime="";

        //Initialize models and datepickers and timepickers
        $("#myBtn").click(function(){
            $("#myModal").modal();
        });
        $('#example1').datepicker({
            format: "dd/mm/yyyy"
        });
        $('#example2').datepicker({
            format: "dd/mm/yyyy"
        });
        $("#myBtn2").click(function(){
            $("#myModal2").modal();
        });
        $('#timepicker1').timepicker();
        $('#timepicker2').timepicker();

        $scope.submitclicked1=function(){
            $scope.data.fromdate = $("#example1").val();
            $scope.data.todate = $("#example2").val();
            if ($scope.data.fromdate >  $scope.data.todate) {
                alert("From date should be smaller than to date");
                $scope.data.fromdate="";
                $scope.data.todate="";
            }
            else{
                $("#myModal").modal('toggle');
            }
        }

        $scope.submitclicked2=function(){
            $scope.data.fromtime = $("#timepicker1").val();
            $scope.data.totime = $("#timepicker2").val();
            $("#myModal2").modal('toggle');    
        }

        $scope.clicked2=function(){
            if($scope.data.fromdate=="" || $scope.data.todate=="" || $scope.data.fromtime=="" || $scope.data.totime=="" ){
                alert("one or more missing input");
            }
            else{
                alert(JSON.stringify($scope.data));
                $location.path("/form3" );
            }
              
        };


        
    });

    module.controller('myCtrl3', function($scope,$location) {
        $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
        
    });