angular.module('starter')
.config(function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise('listagem');

    $stateProvider
        .state('listagem', {
            url: '/listagem',
            templateUrl: 'templates/listagem.html',
            controller: 'ListagemController'
        })
        .state('carroescolhido', {
            url: '/carroescolhido/:carro', // Passando como parametro o carro para usar no carroescolhido
            templateUrl: 'templates/carroescolhido.html',
            controller: 'CarroEscolhidoController'
        });
});
