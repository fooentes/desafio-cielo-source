app.controller('MainController', ['$scope', 'lancamentos', function($scope, lancamentos) {
    lancamentos.then(function(data) {
        $scope.lancamentos = data.data.listaControleLancamento;

        //criando arrays que serão usados na tabela
        $scope.dataEfetivaLancamento = [];
        $scope.valorLancamentoRemessa = [];
        $scope.lancamentoContaCorrenteCliente = [];
        $scope.nomeSituacaoRemessa = [];
        $scope.nomeTipoOperacao = [];
        $scope.numeroEvento = [];

        //injetando dados nos arrays que irão exibir os gráficos
        angular.forEach($scope.lancamentos, function(value, key) {
            angular.forEach(value, function(v1, k1) {
                if (k1 == 'dataEfetivaLancamento') {
                    $scope.dataEfetivaLancamento.push(v1);
                } else if (k1 == 'valorLancamentoRemessa') {
                    $scope.valorLancamentoRemessa.push(v1);
                } else if (k1 == 'lancamentoContaCorrenteCliente') {
                    $scope.lancamentoContaCorrenteCliente.push(v1);
                } else if (k1 == 'numeroEvento') {
                    $scope.numeroEvento.push(v1);
                }
            });
        });

        //injetando dados nos arrays que irão exibir os gráficos 2
        angular.forEach($scope.lancamentoContaCorrenteCliente, function(value, key) {
            angular.forEach(value, function(v1, k1) {
                if (k1 == 'nomeSituacaoRemessa') {
                    $scope.nomeSituacaoRemessa.push(v1);
                } else if (k1 == 'nomeTipoOperacao') {
                    $scope.nomeTipoOperacao.push(v1);
                }
            });
        });

        //somando valor de todos os lançamentos exibidos
        $scope.valorLancamentosTotal = $scope.valorLancamentoRemessa.reduce(function(a, b) { return a + b; }, 0);

        //somando valorLancamentoRemessa de itens com o mesmo nomeSituacaoRemessa e criando novo array para criar gráfico
        $scope.valorPorRemessa = $scope.nomeSituacaoRemessa.reduce((output, current, index) => {
            if (output[current]) {
                output[current] += $scope.valorLancamentoRemessa[index];
            } else {
                output[current] = $scope.valorLancamentoRemessa[index];
            }
            return output;
        }, {})

        //somando valorLancamentoRemessa de itens com o mesmo nomeTipoOperacao e criando novo array para criar gráfico
        $scope.valorPorTipoOperacao = $scope.nomeTipoOperacao.reduce((output, current, index) => {
            if (output[current]) {
                output[current] += $scope.valorLancamentoRemessa[index];
            } else {
                output[current] = $scope.valorLancamentoRemessa[index];
            }
            return output;
        }, {})

        //somando valorLancamentoRemessa de itens com do mesmo dia e criando novo array para criar gráfico
        $scope.valorPorDia = $scope.dataEfetivaLancamento.reduce((output, current, index) => {
            if (output[current]) {
                output[current] += $scope.valorLancamentoRemessa[index];
            } else {
                output[current] = $scope.valorLancamentoRemessa[index];
            }

            return output;
        }, {})

        //dividindo valorLancamentosTotal pelo número de dias para obter a média
        $scope.mediaPorDia = $scope.valorLancamentosTotal / Object.keys($scope.valorPorDia).length;

    });
}]);