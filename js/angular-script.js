var app = angular.module('quizzy', ["ngRoute"]);
app.controller('firstCtrl', function($scope) {
    $scope.login = function(){
        window.location = "login.html";
    }
    $scope.register = function(){
        window.location = "register.html";
    }
    $scope.guest = function(){
        window.location = "guest.html";
    }
});
app.controller('loginCtrl', function($scope) {
    $scope.username = 'jd';
    $scope.password = 'jd';
});
