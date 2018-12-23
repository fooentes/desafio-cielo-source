//carregando o json de lançamentos
app.factory('lancamentos', ['$http', function($http) {
    return $http.get('assets/data/lancamento-conta-legado.json')
        .then(function(data) {
            return data;
        })
        .then(null, function(err) {
            return err;
        });
}]);