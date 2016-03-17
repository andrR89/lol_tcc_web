app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when("/home", {templateUrl:"home.html"});
    $routeProvider.when("/champion", {templateUrl:"champion/champion.html", controller:"championController"});
    $routeProvider.otherwise({redirectTo: "/home"});
}]);
