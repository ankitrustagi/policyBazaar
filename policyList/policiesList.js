module.controller('policyCtrl', ['$scope', function($scope) {
    $scope.selectedPolicy = null;
    $scope.policies = [
    { id :  1, imageSrc : "./image/Religare.png", name : "Religare Health Insurance",   price : 1200, qty: 1, addedToCart: false},
    { id :  2, imageSrc : "./image/Apollo_Munich.png", name : "Apollo_Munich Easy Health Insurance",   price :  1500, qty : 1 , addedToCart: false},
    { id :  3, imageSrc : "./image/Bajaj_Allianz.png",   name : "Bajaj_Allianz INDIVIDUAL HEALTH GUARD",     price : 4500, qty : 1 , addedToCart: false},
    { id :  4, imageSrc : "./image/CignaTTK.png",   name : "CignaTTK Pro HealthPlus",       price : 3450, qty : 1 , addedToCart: false},
    { id :  5, imageSrc : "./image/Tata_AIG.png",   name : "Tata_AIG MediPrime",       price : 8600, qty : 1 , addedToCart: false}
  ];
  $scope.cart = (localStorage.getItem('policyInCart')!==null) ? JSON.parse(localStorage.getItem('policyInCart')) : [];

  var findItemById = function(items, id) {
    return _.find(items, function(item) {
      return item.id === id;
    });
  };

  $scope.addPolicy = function(item) {
    var foundItem = findItemById($scope.cart, item.id);
    if (foundItem) {
      alert('Already Added Policy');
      $scope.selectedPolicy = item;
    }
    else {
      alert('Policy Added Successfully');
      $scope.cart.push(angular.copy(item));
    }

    localStorage.setItem('policyInCart', JSON.stringify($scope.cart));
  };
  $scope.goToCart = function () {
    window.location.href = "#cart";
  }
}]);