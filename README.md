#### Desafio Cielo

Para desenvolver o desafio proposto foi usada a biblioteca do AngularJS v1.7.5, com um serviço, duas diretivas, duas visualizações e alguns controladores.

---

#### Instruções

1. Clonar o repositório;

2. Executar o comando `npm install` para fazer download das dependências;

3. Executar o comando `npm run build` para gerar a pasta de distribuição em */dist*.

---

###### O app funciona da seguinte maneira

1. O json é carregado por um serviço angular em *"app/services/lancamentos.js"*;

2. O dados do json são divididos e organizados por chaves e valores em *"app/controllers/MainController.js"*;

3. Os valores solicitados são exibidos com a ajuda do plugin *"angular-tablesort v1.6.1"* na diretiva *"app/directives/tabelaListaLancamentos.html"*;

4. Os dados completos de cada lançamento são exibidos na diretiva *"app/directives/lancamentoIndividualCompleto.html"*;

5. Duas visualizações foram criadas: uma para a home "app/views/home.html" e outra para cada lançamento *"app/views/lancamento-individual.html"*;

6. As rotas de url foram criadas em *"app/app.js"*. Nelas foi definido que *"/"* é a home e *"/id"* é cada lançamento individual;

7. Para o id na url de cada lançamento foi usado o *"numeroEvento"*. O controlador está em *"app/controllers/LancamentoIndividualController.js"*;

8. Para a exibição dos gráficos na home foi usado o plugin *"angular-chart.js 1.1.1"*. O primeiro gráfico mostra o total de lançamentos por dia, o segundo a situação dos valores e o último a descrição dos valores. Os gráficos estão no controlador *"app/controllers/ChartController.js"*. Além disso, a home exibe o total de gastos e a média do período;

9. Os grids e reset de CSS vieram do *Bootstrap 4*. O CSS foi desenvolvido com Less. Os arquivos estão em *"assets/styles/less"*;

10. Para o design, foram usadas as cores, fontes e logotipo de acordo com o manual da marca.

---

##### Demonstração

[www.andrefuentes.com.br/desafio-cielo](http://www.andrefuentes.com.br/desafio-cielo)