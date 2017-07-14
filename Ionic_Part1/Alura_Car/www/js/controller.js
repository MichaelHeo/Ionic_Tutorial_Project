angular.module('starter').controller('ListagemController', function($scope) {
    $scope.listaDeCarros = [
        {"nome": "BMW 120i", "preco": 70000},
        {"nome": "Onix 1.6", "preco": 35000},
        {"nome": "Fiesta 2.0", "preco": 52000},
        {"nome": "C3 1.0", "preco": 22000},
        {"nome": "Uno Fire", "preco": 11000},
        {"nome": "Sentra 2.0", "preco": 53000},
        {"nome": "Astra Sedan", "preco": 39000},
        {"nome": "Vectra 2.0 Turbo", "preco": 37000},
        {"nome": "Hilux 4x4", "preco": 90000},
        {"nome": "Montana Cabine Dupla", "preco": 57000},
        {"nome": "Outlander", "preco": 99000},
        {"nome": "Fusca 1500", "preco": 70000}
    ]; 

});

angular.module('starter').controller('CarroEscolhidoController', function($stateParams, $scope){
    // stateParams para pegar o parametro passado na rota
    $scope.carroEscolhido = angular.fromJson($stateParams.carro); // Transforma carro em objeto Json
    $scope.listaDeAcessorios = [
        {"nome": "Freio ABS", "preco": 800},
        {"nome": "Ar Condicionado", "preco": 1000},
        {"nome": "MP3 Player", "preco": 500}
    ];

    // Funcao pra quando um acessorio for marcado/desmarcado, o preco total mudara!
    $scope.mudou = function(acessorio, isMarcado){
        if(isMarcado){
            $scope.carroEscolhido.preco = $scope.carroEscolhido.preco + acessorio.preco;
        } else {
            $scope.carroEscolhido.preco = $scope.carroEscolhido.preco - acessorio.preco;
        }
    };
});

angular.module('starter').controller('FinalizarPedidoController', function($stateParams, $scope, $ionicPopup, $state){
    $scope.carroFinalizado = angular.fromJson($stateParams.carro);

    // Funcao do Pop-up ao finalizar pedido
    $scope.finalizarPedido = function(){
        $ionicPopup.alert({
            title: "Parabens",
            template: "Voce acaba de comprar um carro."
        }).then(function(){
            $state.go('listagem');
        });
    }
});
