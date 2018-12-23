const gulp = require("gulp");
const uglify = require("gulp-uglify");
const rename = require("gulp-rename");
const less = require('gulp-less');
const cleanCSS = require('gulp-clean-css');

//Gerando e minificando library scripts
gulp.task("gerarScripts", function(done) {
    gulp.src([
            "node_modules/chart.js/dist/Chart.js",
            "node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls.js",
            "node_modules/angular-chart.js/dist/angular-chart.js",
            "node_modules/angular-tablesort/js/angular-tablesort.js",
            "node_modules/angular/angular.js",
            "node_modules/angular-route/angular-route.js",
            "node_modules/angular-locale-pt-br/angular-locale_pt-br.js"
        ])
        .pipe(uglify())
        .pipe(rename(function(path) {
            path.extname = ".min.js";
        }))
        .pipe(gulp.dest("dist/assets/scripts"))
    done();
})

//Gerando e minificando library styles
gulp.task("gerarStyles", function(done) {
    gulp.src([
            "node_modules/bootstrap/dist/css/bootstrap-grid.min.css",
            "node_modules/bootstrap/dist/css/bootstrap-reboot.min.css",
            "src/assets/styles/fonts.min.css"
        ])
        .pipe(gulp.dest("dist/assets/styles"))
    done();
})

//Gerando e minificando LESS do style principal
gulp.task("gerarMainStyle", function(done) {
    gulp.src("src/assets/styles/main.less")
        .pipe(less())
        .pipe(cleanCSS())
        .pipe(rename("main.min.css"))
        .pipe(gulp.dest("dist/assets/styles"))
    done();
})

//Copiando arquivos do App
gulp.task("copiarApp", function(done) {
    gulp.src("src/app/**/*")
        .pipe(gulp.dest("dist/app"))
    done();
})

//Copiando index
gulp.task("copiarIndex", function(done) {
    gulp.src("src/index.html")
        .pipe(gulp.dest("dist/"))
    done();
})

//Copiando outros assets (que não tiverem a extensão .less)
gulp.task("copiarAssets", function(done) {
    gulp.src(["src/assets/**/*",
            "!src/assets/styles/less",
            "!src/assets/**/*.less"
        ])
        .pipe(gulp.dest("dist/assets"))
    done();
})

//Atribuindo todas as regras ao default
gulp.task("default", gulp.parallel("gerarScripts", "gerarStyles", "gerarMainStyle", "copiarApp", "copiarIndex", "copiarAssets"));

gulp.task("watch", function(done) {
    gulp.watch("src/app/**/*", gulp.parallel("copiarApp"));
    gulp.watch("src/**/*.less", gulp.parallel("gerarMainStyle"));
    gulp.watch("src/index.html", gulp.parallel("copiarIndex"));
    gulp.watch("src/assets/**/*", gulp.parallel("copiarAssets"));
})