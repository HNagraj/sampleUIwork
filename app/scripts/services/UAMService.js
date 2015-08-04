/**
 * Created by bandlamx on 12/10/2014.
 */
'use strict';
app.factory("UAMService",function($http,$q,UAA_Auth){

   return{
       getClientScope:function(){
           var deferred=$q.defer();
           //encoding the basic credentials
           var auth = "Bearer " + localStorage.token;
           $http({
               method:"GET",
               url:"https://ndgdev-uaa.cl.wearables.infra-host.com/uam/clients/"+UAA_Auth.clientId,
               headers:{
                   Authorization: auth
               }
           }).success(function(data){
               deferred.resolve(data);
           }).error(function(error){
               deferred.reject(error);
           });
           return deferred.promise;
       },
       searchUsers:function(email){
            var deferred=$q.defer();
           //encoding the basic credentials
           var auth = "Bearer " + localStorage.token;
           $http({
               method:"GET",
                url:"https://ndgdev-uaa.cl.wearables.infra-host.com/uam/clients/"+UAA_Auth.clientId+"/users?",
               headers:{
                   Authorization: auth
               },
               params:{
                  email:email
               }
           }).success(function(data){
               deferred.resolve(data);
           }).error(function(error){
               deferred.reject(error);
           });
           return deferred.promise;
       }
   };



});
