/**
 * Created by bandlamx on 12/16/2014.
 */
app.controller("updateUserScope",function($scope,UAMService,userInfoService,$stateParams){
    $scope.userName=$stateParams.userName;
    $scope.uamClassActive="menuLinkActive";
    $scope.clientScopesSelected= {
        scopes:[""]
    };
    $scope.currentScopes= {
      scopes:[""]
    };
    $scope.clientScopesSelectedValues=[];
    $scope.defaultScopes=["scope","email"];
    $scope.addClientScope=function(){
        alert($scope.clientScopesSelected.scopes);
    };
    $scope.removeCurrentScope=function(){
        alert($scope.currentScopes.scopes)
    };
});
