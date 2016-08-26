var module = angular.module("policyBazaarStore", ['ngRoute']);
module.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/signIn', {
                templateUrl: './login/login.html',
                controller: 'loginCtrl'
            }).
            when('/newUser', {
                templateUrl: './registerUser/register.html',
                controller: 'registerCtrl'
            }).
            when('/policies', {
                templateUrl: './policyList/policiesList.html',
                controller: 'policyCtrl'
            }).
            when('/cart', {
                templateUrl: './policyCart/cart.html',
                controller: 'cartCtrl'
            }).
            otherwise({
                redirectTo: '/signIn'
            });
    }]);
