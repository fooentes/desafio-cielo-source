var app = angular.module('cieloApp', ['ngRoute', 'chart.js', 'tableSort', 'ui.bootstrap']);

//criando rotas de endereço para home e lançamentos individuais
app.config(function($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider
        //rota para a home
        .when('/', {
            controller: 'MainController',
            templateUrl: 'app/views/home.html'
        })
        //rota para os lancamentos individuais
        .when('/:id', {
            controller: 'LancamentoIndividualController',
            templateUrl: 'app/views/lancamento-individual.html'
        })
        //se url não existir, volta para a home
        .otherwise({
            redirectTo: '/'
        })
})