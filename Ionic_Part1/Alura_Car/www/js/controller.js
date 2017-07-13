angular.module('starter').controller('ListagemController', function($scope) {
    $scope.listaDeCarros = [
        {"nome": "BMW 120i", "preco": 70000}
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
