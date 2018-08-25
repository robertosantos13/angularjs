
var $jQuery;

var meusGastos = angular.module("gastos", ["ngRoute","ngTable"]);

var rendimentoMensais = [];
var total = 0;
meusGastos.config(function ($routeProvider) {
    
    $routeProvider
    .when('/' , {templateUrl: '/app/views/home.html', controller: 'homeController' })
    .when('/home', {templateUrl: '/app/views/home.html', controller: 'homeController'})
    .when('/meses/:id', {templateUrl: '/app/views/meses.html', controller: 'mesesController'})
    
  
});

meusGastos.filter('capitalize', function () {
    return function (input) {
        input = input.toLowerCase();
        return input.substr(0, 1).toUpperCase() + input.substr(1);
    };

});


