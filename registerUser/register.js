module.controller('registerCtrl', ['$scope','$rootScope', function($scope, $rootScope) {
    $scope.register = {};
    $rootScope.allUsers = (localStorage.getItem('allUsers')!==null) ? JSON.parse(localStorage.getItem('allUsers')) : [];
    $scope.registerUser = function(register) {
        $rootScope.allUsers.push(angular.copy(register));
        localStorage.setItem('allUsers', JSON.stringify($rootScope.allUsers));
        alert('you have registered successfully');
        window.location.href = "#policies";
    }
    $scope.resetRegisterForm = function (){
        $scope.register = {
            'username': '',
            'email': '',
            'password': '',
        };
    }
}]);