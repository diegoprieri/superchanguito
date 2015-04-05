scApp.controller('mainController', function($scope, $timeout, $location, $rootScope) {

    $scope.productList = [];
    $scope.searchStr = "";

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
            product["qty"] = 1;
            $scope.productList.push(product); 
      }      
    };

    $scope.compareList = function() {
      $rootScope.plist = $scope.productList;
      $location.path("/results");
    };

      $timeout(function(){
            $(".find-icon").after("<span class='fa fa-search'></span>");            
      });    

});