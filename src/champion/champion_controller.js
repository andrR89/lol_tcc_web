app.controller('championController', ['$scope', '$timeout', 'championAPI', function ($scope, $timeout, championAPI) {

    $scope.championList = {};
    $scope.query = '';
    $scope.championSelected = {};

    $scope.selectChampion = function (champ) {
        championAPI.findById(champ.key, 'skins,lore', function (data) {
            $scope.championSelected = data;
            $scope.championSelected.lore = '<img class="image_champ" src="http://ddragon.leagueoflegends.com/cdn/img/champion/loading/' + $scope.championSelected.key + '_0.jpg" align="left"/>' + $scope.championSelected.lore;
            console.log($scope.championSelected.lore);
            $('#bankModalAdd').modal('show');
            console.log(data);
        });
        console.log($scope.championSelected)
    };


    $scope.loadChamps = function () {
        championAPI.findAll(function (data) {
            $scope.championList = {};
            $scope.championList.data = []
            for (var key in data.data) {
                $scope.championList.data.push(data.data[key]);
            }
            console.log($scope.championList.data);
        });
    };

    $scope.loadChamps();
}]);