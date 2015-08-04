'use strict';
app.factory("userInfoService", function ($http, $q,UAA_Auth,jwtHelper) {
    return{
        getUserInfo:function(){
            var deferred=$q.defer();
            $http({
                method:"GET",
                url:UAA_Auth.domain+"/userinfo",
                "Accept": "application/json",
                headers:{
                    "Authorization":"Bearer "+localStorage.token
                }
            }).success(function(data,status,headers,config){
                deferred.resolve(data);
            }).error(function(reason){
                deferred.reject(reason);
            });
            return deferred.promise;
        },
        getUserScopes:function(){
            var jwtTokenDecode=jwtHelper.decodeToken(localStorage.token);
            return jwtTokenDecode.scope;
        },
        getUserName:function(){
          var jwtTokenDecode=jwtHelper.decodeToken(localStorage.token);
          return jwtTokenDecode.user_name;
        },
        signoutUser:function(){
          var deferred=$q.defer();
          $http({
            method:"POST",
            url:"https://ndgdev-login.cl.wearables.infra-host.com/logout.do",
            accept:"application/json"
          }).success(function(data){
              deferred.resolve(data);
          }).error(function(errorResult){
            deferred.reject(errorResult);
          });
          return deferred.promise;
        }
    }
});
