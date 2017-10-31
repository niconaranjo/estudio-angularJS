(function(){

var app = angular.module('universidadApp',[ ]);

app.controller('listadoCtrl', ['$scope', function($scope){
    $scope.listado = ["Fernando", "Nicolas", "Ingrid", "katherine"];

    $scope.listadoProfesores = {
        profesores:[{
            nombre: "Fernando Herrera",
            edad: 29,
            clase: "PEE"
        },
        {
            nombre: "Melissa Flores",
            edad: 29,
            clase: "ICE"
        },
        {
            nombre: "Juan Carlos",
            edad: 42,
            clase: "M110"
        }]
    }

}]);





})();
