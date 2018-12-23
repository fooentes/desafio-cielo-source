app.controller('LancamentoIndividualController', ['$scope', '$routeParams', 'lancamentos', function($scope, $routeParams, lancamentos) {
    lancamentos.then(function(data) {
        $scope.lancamentos = data.data.listaControleLancamento;
        //pegando numeroRemessaBanco passado pelo clique na tabela, procurando valor correspondente no array e retornando o lancamento encontrado
        angular.forEach($scope.lancamentos, function(value, key) {
            if ($routeParams.id == $scope.lancamentos[key].lancamentoContaCorrenteCliente.numeroRemessaBanco) {
                $scope.lancamento = data.data.listaControleLancamento[key];
            }
        });
    });
}]);