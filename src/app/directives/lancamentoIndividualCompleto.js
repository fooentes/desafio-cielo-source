//diretiva para exibir os items de um lançamento individual
app.directive("lancamentoIndividualCompleto", function() {
    return {
        restrict: "E",
        scope: false,
        templateUrl: "app/directives/lancamentoIndividualCompleto.html"
    }
})