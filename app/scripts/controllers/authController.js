/**
 * Created by bandlamx on 12/3/2014.
 */
'use strict';
app.controller("authCntrl",function($scope,$location,userInfoService,$cookies){
        $scope.brandName=localStorage.brandName;
        //alert($cookies.JSESSIONID);
        //Get the user name and scopes
        $scope.userScopes=userInfoService.getUserScopes();
        $scope.userName=userInfoService.getUserName();

        //signout click
        $scope.signout=function(){
          userInfoService.signoutUser().then(function(data){
            console.log("success logout",data);
            localStorage.token="";
            $location.path("/fossil");
          },function(errorResult){
             console.log("failure logout",errorResult);
          });
        }
    }
);
