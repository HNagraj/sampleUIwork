/**
 * Created by bandlamx on 11/21/2014.
 */
'use strict';
app.controller("uamController",function($scope,UAMService,userInfoService){

    //for default Uam Search
    $scope.searchType="email";
  $scope.userScopess=userInfoService.getUserScopes();
    //get client scopes
    UAMService.getClientScope().then(
        function(data){
            //$scope.userScopess=data.ClientScope;
        },function(error){
            console.log(error);
        }
    );


    //fetching the scopes that are selected
    $scope.selectedScopes=[];
    $scope.scopeSelection=function(scopeName){
        var index=$scope.selectedScopes.indexOf(scopeName);
        if(index>-1){
          $scope.selectedScopes.splice(index,1);
        }
        $scope.selectedScopes.push(scopeName);
    };

    $scope.searchUsers=function(){
        alert($scope.selectedScopes);
    };

    $scope.searchResults={
      "_metadata":
      {
        "page": 1,
        "per_page": 20,
        "total_count": 100
      },
      "records": [
        {
          "client": "fossilTest",
          "userId" : "41750ae1-b2d0-4304-b1fe-7bdc24256387",
          "userName": "aandlamudivs@gmail.com",
          "source": "social",
          "scopes": [
            "foo",
            "foo.write",
            "openid"
          ]
        },  {
          "client": "mkTest",
          "userId" : "41750ae1-b2d0-4304-b1fe-7bdc24256356",
          "userName": "bandlamudivs@gmail.com",
          "source": "social",
          "scopes": [
            "foo.read",
            "foo.write",
            "openid"
          ]
        },  {
          "client": "mkTest",
          "userId" : "41750ae1-b2d0-4304-b1fe-7bdc24256356",
          "userName": "dfsdfsdf@gmail.com",
          "source": "social",
          "scopes": [
            "foo.read",
            "foo.write",
            "openid"
          ]
        },  {
          "client": "mkTest",
          "userId" : "41750ae1-b2d0-4304-b1fe-7bdc24256356",
          "userName": "ewrty@gmail.com",
          "source": "social",
          "scopes": [
            "foo.read",
            "foo.write",
            "openid",
            "Proxy.read"
          ]
        },  {
          "client": "mkTest",
          "userId" : "41750ae1-b2d0-4304-b1fe-7bdc24256356",
          "userName": "cvbnmk@gmail.com",
          "source": "social",
          "scopes": [
            "foo.write",
            "openid"
          ]
        }
      ]
    };

    $scope.getUserId=function(userid){
      console.log(userid);
    };
    //search users
    $scope.emailId="";


    //for pagination
    $scope.users=[];
    $scope.totalUsers=0;
    $scope.usersPerPage=20;
    getResultsPage(1);

    $scope.pagination={
      current:1
    };

    $scope.pageChanged = function(newPage){
        getResultsPage(newPage);
    };

    function getResultsPage(pageNumber){
        UAMService.searchUsers($scope.emailId).then(
          function(data){
            $scope.users=data.records;
            $scope.totalUsers=data.total_count;

          },function(error){
            console.log(error);
          }
        )
    }


});
