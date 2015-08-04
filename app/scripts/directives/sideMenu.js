/**
 * Created by bandlamx on 12/16/2014.
 */
'use strict';
app.directive("sidemenu",function(){
  return {
    restrict: 'E',
    templateUrl :"scripts/directives/templates/sideMenu.html",
    controller:function($scope,userInfoService){
      $scope.userScopes=userInfoService.getUserScopes();
    }
  };
});
