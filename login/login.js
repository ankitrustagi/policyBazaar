module.controller('loginCtrl', ['$scope', function($scope) {
    $scope.user = {};
    $scope.registeredUser = JSON.parse(localStorage.getItem('allUsers'));
    $scope.authenticateUser = function(user) {
        if (user.email === 'ankit@policybazaar.com' && user.password === 'pass@1234') {
            window.location.href = "#policies";
        }
        else if (localStorage.getItem('allUsers')!==null) {
            for (i = 0; i < $scope.registeredUser.length; i++) {
                if (user.email === $scope.registeredUser[i].email && user.password === $scope.registeredUser[i].password) {
                    window.location.href = "#policies";
                } else {
                    if ($scope.registeredUser.length-1 == i) {
                        alert('Please enter valid email or password');
                        $scope.user = {};
                    }
                }
            }
        }
    }
    $scope.reset = function (){
        $scope.user = {
            'email': '',
            'password': '',
        };
    }
}]);