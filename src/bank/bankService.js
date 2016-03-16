app.service("bankAPI", ['$http', function ($http) {

    var endpointURL = "https://selector-motor.cloudint.nexxera.com/v1/selectors";
    this.save = function (bank) {
        return $http.post(endpointURL, bank);
    };

    this.findAll = function (callbackFunc) {
        $http({
            method: 'GET',
            url: endpointURL
        }).success(function (data) {
            callbackFunc(data);
        }).error(function (data) {
            console.log("error" + data);
        });
    };

    this.findBestBank = function (param, callbackFunc) {
        $http({
            method: 'GET',
            url: endpointURL + '?banks=' + param
        }).success(function (data) {
            callbackFunc(data);
        }).error(function (data) {
            console.log("error" + data);
        });
    };

    this.update = function (bank) {
        return $http.put(endpointURL + "/" + bank.id, bank)
    };

    this.delete = function (bank) {
        return $http.delete(endpointURL + "/" + bank.id, bank)
    };

}]);