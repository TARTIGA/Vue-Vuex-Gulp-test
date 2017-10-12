var gulp = require('gulp'),
    webpack = require('webpack'),
    gulpWebpack = require('webpack-stream'),
    concat = require('gulp-concat'), // Подключаем gulp-concat (для конкатенации файлов JS)
    concatCss = require('gulp-concat-css'); // Подключаем gulp-concat (для конкатенации файлов CSS)

gulp.task('vue-basket', function() {
    return gulp.src('vue/main.js')
        .pipe(gulpWebpack({
            module: {
                loaders: [{
                    test: /\.js?$/,
                    loader: 'babel',
                    query: {
                        presets: ['es2015']
                    }
                }]
            },
            output: {
                filename: '[name].js',
            },
        }, webpack))
        .pipe(concat('basket_vue.min.js'))
        .pipe(gulp.dest('vue/'));
});
gulp.task('testTask', function() {
    console.log('Hello world!');
});