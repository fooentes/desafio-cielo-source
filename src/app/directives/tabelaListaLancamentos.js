//diretiva para exibir a tabela de lançamentos
app.directive("tabelaListaLancamentos", function() {
    return {
        restrict: "E",
        scope: false,
        templateUrl: "app/directives/tabelaListaLancamentos.html"
    }
})