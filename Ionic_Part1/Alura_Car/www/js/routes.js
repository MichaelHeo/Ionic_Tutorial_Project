angular.module('starter')
.config(function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise('login');

    $stateProvider
        .state('app', {
            url: '/app',
            templateUrl: 'templates/menu.html',
            abstract: true,
            controller: 'MenuController'
        })
        .state('app.listagem', { // ROTA refatorada para aceitar o app, que eh o side menu!
            url: '/listagem',
            views: {
                'menuContent' : {
                    templateUrl: 'templates/listagem.html',
                    controller: 'ListagemController'
                }
            },
        })
        .state('carroescolhido', {
            url: '/carroescolhido/:carro', // Passando como parametro o carro para usar no carroescolhido
            templateUrl: 'templates/carroescolhido.html',
            controller: 'CarroEscolhidoController'
        })
        .state('finalizarpedido', {
            url: '/finalizarpedido/:carro',
            templateUrl: 'templates/finalizarpedido.html',
            controller: 'FinalizarPedidoController'
        })
        .state('login', {
            url: '/login',
            templateUrl: 'templates/login.html',
            controller: 'LoginController'
        });
});
