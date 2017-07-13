angular.module('starter').controller('ListagemController', function($scope) {
    $scope.listaDeCarros = ['BMW 120i', 'ONIX 1.6', 'FIESTA 2.0', 'C3 1.0', 'UNO FIRE', 'SENTRA 2.0',
                            'ASTRA SEDAN', 'VECTRA 2.0 TURBO', 'HILUX 4X4', 'MONTANA CABINE DUPLA', 'OUTLANDER 2.4', 'FUSCA 1500'];

});

angular.module('starter').controller('CarroEscolhidoController', function($stateParams, $scope){
    // stateParams para pegar o parametro passado na rota
    $scope.carroEscolhido = $stateParams.carro
});
