app.controller('bankController', ['$scope', 'bankAPI', '$timeout', function ($scope, bankAPI, $timeout) {

    $scope.form = {};
    $scope.bank = {};
    $scope.carroShow = {};
    $scope.bankList = [];
    $scope.templateCRUDBank = {name: 'crudBank', url: 'bank/crudBank.html'};
    $scope.templateSearchBanco = {name: 'searchBank', url: 'bank/searchBank.html'};
    $scope.templateModalBank = {name: 'modalBank', url: 'bank/modalBank.html'};
    $scope.currentPage = 1;
    $scope.pageSize = 10;
    $scope.fieldOrderBy = "code";
    $scope.addSuccess = false;
    $scope.alterSuccess = false;
    $scope.deleteSuccess = false;
    $scope.editIndex = -1;

    $scope.clearForm = function () {
        delete $scope.bank;
        $scope.bank = {};
    };

    $scope.orderBy = function (field) {
        $scope.fieldOrderBy = field;
        $scope.reverse = !$scope.reverse;
    };

    $scope.showBank = function (bank) {
        $scope.bankShow = angular.copy(bank);
        $scope.editIndex = $scope.bankList.indexOf(bank);
    };

    $scope.deleteBank = function () {
        bankAPI.delete($scope.bankShow).success(function (data, status) {
            console.log('OK')
            $scope.loadBanks();
        }).error(function (data, status) {
            console.error(data);
        });
        delete $scope.bankShow;
        $scope.cleanShow();

        $scope.deleteSuccess = true;
        $scope.closeMessages();
        $scope.loadBanks();
    };

    $scope.editBank = function (bank) {
        $scope.bank = angular.copy(bank);
        $scope.editIndex = $scope.bankList.indexOf(bank);
    };

    $scope.addBank = function () {
        $scope.bank.amount = $scope.bank.amount.replace(',','.');
        if ($scope.editIndex === -1) {
            bankAPI.save($scope.bank).success(function (data, status) {
                $scope.bank = data;
                $scope.update();
            }).error(function (data, status) {
                console.error(data);
            });
            $scope.addSuccess = true;
        }
        else {
            $scope.alterSuccess = true;
            bankAPI.update($scope.bank).success(function (data, status) {
                $scope.bank = data;
                $scope.update();
            }).error(function (data, status) {
                console.error(data);
            });
        }
        $scope.closeMessages();
    };

    $scope.update = function(){
        $scope.loadBanks();
        $scope.editIndex = -1;
        $scope.clearForm();
    };

    $scope.closeMessages = function () {
        $timeout(function () {
            $scope.addSuccess = false;
            $scope.alterSuccess = false;
            $scope.deleteSuccess = false;
        }, 5000);
    };

    $scope.cleanShow = function () {
        $scope.bankShow = {};
        $scope.bankShowPos = -1;
    };

    $scope.loadBanks = function () {
        bankAPI.findAll(function (data) {
            $scope.bankList = data;
            console.log(data);
        });
    };

    $scope.loadBanks();
}]);
