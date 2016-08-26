module.controller('cartCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {
    $scope.cart = JSON.parse(localStorage.getItem('policyInCart'));
    $scope.payNow = function () {
        if($scope.cart != null && $scope.cart.length > 0) {
            alert('Your order placed successfully');
            window.location.href = "#policies";
            localStorage.removeItem('policyInCart');
        } else {
            alert('No policy added.');
            window.location.href = "#policies";
        }
    }
}]);