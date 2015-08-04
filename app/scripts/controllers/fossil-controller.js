/**
 * Created by bandlamx on 11/20/2014.
 */
'use strict';
app.controller("brandController",function($scope,$location,UAA_Auth){

    //To find the brand name in the url
    var URL = $location.path().substring(1);
    localStorage.brandName=URL;
    $scope.brandName=localStorage.brandName;

    //Auth URL
    var UAA_AUTH_URL=UAA_Auth.domain+"/oauth/authorize?response_type=token&client_id="+UAA_Auth.clientId+"&redirect_uri="+UAA_Auth.redirecturi;
    $scope.UaaAuth = UAA_AUTH_URL;

});


