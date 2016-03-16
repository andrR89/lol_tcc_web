app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when("/home", {templateUrl:"home.html"});
    $routeProvider.when("/setup", {templateUrl:"bank/bank.html", controller:"bankController"});
    $routeProvider.otherwise({redirectTo: "/home"});
}]);
