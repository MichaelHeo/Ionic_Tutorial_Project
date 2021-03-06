angular.module('starter').controller('ListagemController', function($scope, CarroService) {

    CarroService.obterCarros().then(function(dados){
        $scope.listaDeCarros = dados;
    });

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

angular.module('starter').controller('FinalizarPedidoController', function($stateParams, $scope, $ionicPopup, $state, CarroService){
    $scope.carroFinalizado = angular.fromJson($stateParams.carro);

    $scope.pedido = {};

    // Funcao do Pop-up ao finalizar pedido
    $scope.finalizarPedido = function(){
    
        var pedidoFinalizado = {
            params: {
                carro: $scope.carroFinalizado.nome,
                preco: $scope.carroFinalizado.preco,
                nome: $scope.pedido.nome,
                endereco: $scope.pedido.endereco,
                email: $scope.pedido.email
            }
        };

        CarroService.salvarPedido(pedidoFinalizado).then(function(dados){

            $ionicPopup.alert({
                title: "Parabens",
                template: "Voce acaba de comprar um carro."
            }).then(function(){
                $state.go('app.listagem');
            });

        }, function(erro){
            
            $ionicPopup.alert({
                title: "Deu erro",
                template: "Campos Obrigatorios"
            });

        });

    }
});

angular.module('starter').controller('LoginController',function($scope, CarroService, $ionicPopup, $state, $rootScope){
    $scope.login = {};
    $scope.realizarLogin = function(){
        var dadosDoLogin = {
            params: {
                email: $scope.login.email,
                senha: $scope.login.senha
            }
        };

        CarroService.realizarLogin(dadosDoLogin).then(function(dados){
            $rootScope.usuario = dados.usuario;
            
            $state.go('app.listagem');
        }, function(erro){
            $ionicPopup.alert({
                title: "Deu erro",
                template: "Email ou senha incorretos"
            });
        });
    };
});

angular.module('starter').controller('MenuController', function($rootScope, $scope){
    $scope.usuarioLogado = $rootScope.usuario;
});

angular.module('starter').controller('PerfilController', function($scope, $rootScope) {
    $scope.estaEditando = false;
    $scope.usuarioLogado = $rootScope.usuario;
    $scope.textoBotao = 'Editar';

    $scope.acaoBotao = function(){
        if($scope.estaEditando){
            $scope.estaEditando = false;
            $scope.textoBotao = 'Editar';
        } else {
            $scope.estaEditando = true;
            $scope.textoBotao = 'Salvar';
        }
        $scope.estaEditando = true;
    };
});
