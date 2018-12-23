//definindo as cores usadas nos gráficos
var cores = ['#00adf2', '#512cc2', '#6e2c90', '#8ac936',  '#fc8c15', '#949FB1', '#4D5360'];

// criando gráfico de LancamentosPorDia
app.controller('LancamentosPorDia', ['$scope', '$filter', 'lancamentos', function($scope, $filter, lancamentos) {
    lancamentos.then(function(data) {
        $scope.labels = [];
        $scope.data = [];
        //injetando cores no gráfico
        $scope.colours = cores;
        //enviando dados para o gráfico
        angular.forEach($scope.$parent.valorPorDia, function(key, value) {
            $scope.labels.push(value);
            $scope.data.push(key);
        })
        $scope.options = {
            scales: {
                yAxes: [{
                    display: false
                }]
            },
            tooltips: {
                callbacks: {
                    //formatanto título do tooltip
                    title: function(tooltipItem, data) {
                        label = data.labels[tooltipItem[0].index];
                        return label;
                    },
                    //formatanto corpo do tooltip
                    label: function(tooltipItem, data) {
                        datasetLabel = $filter("currency")(data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index]);
                        return datasetLabel;
                    }
                }
            },
        };
    })
}]);

//criando gráfico de SituacaoTotal
app.controller('SituacaoTotal', ['$scope', '$filter', 'lancamentos', function($scope, $filter, lancamentos, ) {
    lancamentos.then(function(data) {
        $scope.labels = [];
        $scope.data = [];
        //injetando cores no gráfico
        $scope.colours = cores;
        //enviando dados para o gráfico
        angular.forEach($scope.$parent.valorPorRemessa, function(key, value) {
            $scope.labels.push(value);
            $scope.data.push(key);
        })
        $scope.options = {
            legend: {
                display: true
            },
            tooltips: {
                callbacks: {
                    //formatanto título do tooltip
                    title: function(tooltipItem, data) {
                        label = data.labels[tooltipItem[0].index];
                        return label;
                    },
                    //formatanto corpo do tooltip
                    label: function(tooltipItem, data) {
                        valor = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                        porcentagemDoTotal = valor / $scope.$parent.valorLancamentosTotal;
                        legenda = $filter("currency")(valor) + " (" + $filter("number")(porcentagemDoTotal * 100, 1) + '%)';
                        return legenda;
                    }
                }
            },
        };
    })
}]);

//criando gráfico de NomeTipoOperacao
app.controller('NomeTipoOperacao', ['$scope', '$filter', 'lancamentos', function($scope, $filter, lancamentos, ) {
    lancamentos.then(function(data) {
        $scope.labels = [];
        $scope.data = [];
        //injetando cores no gráfico
        $scope.colours = cores;
        //enviando dados para o gráfico
        angular.forEach($scope.$parent.valorPorTipoOperacao, function(key, value) {
            $scope.labels.push(value);
            $scope.data.push(key);
        })
        $scope.options = {
            legend: {
                display: true
            },
            tooltips: {
                callbacks: {
                    //formatanto título do tooltip
                    title: function(tooltipItem, data) {
                        label = data.labels[tooltipItem[0].index];
                        return label;
                    },
                    //formatanto corpo do tooltip
                    label: function(tooltipItem, data) {
                        valor = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                        porcentagemDoTotal = valor / $scope.$parent.valorLancamentosTotal;
                        legenda = $filter("currency")(valor) + " (" + $filter("number")(porcentagemDoTotal * 100, 1) + '%)';
                        return legenda;
                    }
                }
            },
        };
    })
}]);