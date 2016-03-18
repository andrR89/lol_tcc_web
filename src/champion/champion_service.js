app.service("championAPI", ['$http', function ($http) {

    var endpointURL = "http://0.0.0.0:5000/lol/static/champions";

    this.findAll = function (callbackFunc) {
        $http({
            method: 'GET',
            url: 'http://ddragon.leagueoflegends.com/cdn/6.5.1/data/pt_BR/champion.json'
        }).success(function (data) {
            callbackFunc(data);
        }).error(function (data) {
            console.log("error" + data);
        });

    };

    this.findById = function (id, championParams, callbackFunc) {
        var otherParam = '';

        if (championParams) {
            otherParam = '?champData=' + championParams
        }

        $http({
            method: 'GET',
            url: endpointURL + '/' + id + otherParam
        }).success(function (data) {
            callbackFunc(data);
        }).error(function (data) {
            console.log("error" + data);
        });
    };

}]);