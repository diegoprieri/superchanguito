scApp.controller('resultsController', function($scope, $rootScope, $http) {

  if ($rootScope.plist){

    var list = $rootScope.plist;
    var ids = "";
    for (var i = 0; i < list.length; i++) {
      ids = ids + list[i].id + "=" + list[i].qty;
      if (i < (list.length-1)){
        ids = ids + "&";
      }
    }

    $http.get('http://sccore-svinci.rhcloud.com/compare?' + ids).
      success(function(data, status, headers, config) {
        
        localStorage["compare_result_data"] = JSON.stringify(data);
        $scope.markets = data.markets;
        $scope.products = data.products;

      }).
      error(function(data, status, headers, config) {
         
    });

  }else {

    var data = JSON.parse(localStorage["compare_result_data"]);
    if (data){

      $scope.markets = data.markets;
      $scope.products = data.products;

    }

  }

});