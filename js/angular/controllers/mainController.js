scApp.controller('mainController', function($scope, $timeout, $location, $rootScope, $http) {

    $scope.productList = [];
    $scope.searchStr = "";
    $scope.recomendedProducts = [];

    $http.get('http://sccore-svinci.rhcloud.com/most-wanted').
      success(function(data, status, headers, config) {
        
        $scope.recomendedProducts = data;

      }).
      error(function(data, status, headers, config) {         
    });

    $scope.remoteUrlRequestFn = function(str) {
      return {q: str, n:10};
    };

    $scope.deleteProduct = function(pid){
      var list = $scope.productList;
      for (var i = 0; i < list.length; i++) {
            if (list[i].id == pid){
                  list.splice(i,1);
                  break;
            }
      }
    };
    
    $scope.productSelected = function(selected) {
      if (selected){
        var product = selected.originalObject;
        $scope.addProduct(product);
      }      
    };

    $scope.addProduct = function(p) {
      var product = $scope.findProduct(p.id);
      if (product){
        product["qty"] += 1;
      }else {
        product = p;
        product["qty"] = 1;
        $scope.productList.push(product);    
      }  
    };

    $scope.downQty= function(pid) {
      var product = $scope.findProduct(pid);
      if (product && product.qty > 1){
        product["qty"] -= 1;
      }  
    };

    $scope.upQty= function(pid) {
      var product = $scope.findProduct(pid);
      if (product){
        product["qty"] += 1;  
      }      
    };

    $scope.findProduct = function(pid) {
      var list = $scope.productList;
      for (var i = 0; i < list.length; i++) {
        if (list[i].id == pid){
          return list[i]; 
        }
      }  
      return null;    
    };

    $scope.compareList = function() {
      $rootScope.plist = $scope.productList;
      $location.path("/results");
    };

      $timeout(function(){
            $(".find-icon").after("<span class='fa fa-search'></span>");            
      });    

});