(function(){

var app = angular.module('ejemplosApp',[ ]);



app.controller('mainCtrl', ['$scope','$http', function($scope,$http){
    
    $scope.profesores = {};
    $scope.tblProfesores = 'src/tblProfesores.html';
    
    $http.get('./json/profesores.json')
        .then(function( response ){
            console.log( response )
            $scope.profesores = response.data.profesores;

        })


}]);





})();
