/**
 * Created by SANTOSH on 11/3/2016.
 */
angular.module('smartAdminApp').controller('loginCtrl',function($scope, $state, $window, $location,UserAuthFactory,AuthenticationFactory){



    $scope.selectProjects =[
        {name: 'CrewLink'},
        {name: 'SmartWebSchool'},
        {name: 'ShoppingForU'},
        {name: 'SecureBank'},


    ]
    $scope.user = {
        username:'',
        password:''

    };
    $scope.isLoggedIn = AuthenticationFactory.isLoggedIn();
    $scope.doLogin =function(){
        console.log("in Login"+$scope.user.username);
        console.log("in Login"+$scope.user.password);
        $state.go("dashboard.home");

    }

});