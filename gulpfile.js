'use strict';

// gulp and gulp plugins
var gulp         = require('gulp');
var clean        = require('gulp-clean');
var cssmin       = require('gulp-minify-css');
var htmlmin      = require('gulp-minify-html');
var uglify       = require('gulp-uglify');
var jsonminify   = require('gulp-jsonminify');
var replace      = require('gulp-batch-replace');
var rename       = require('gulp-rename');
var shell        = require('gulp-shell');
var spritesmith  = require('gulp.spritesmith');
var gutil        = require('gulp-util');
var concat       = require('gulp-concat');
var addsrc       = require('gulp-add-src');
var gulpif       = require('gulp-if');
var watch        = require('gulp-watch');
var sass         = require('gulp-sass');
var flatten      = require('gulp-flatten');
var htmlReplace  = require('gulp-html-replace');

var src_js_lib_path     = 'src/lib/js/';
var src_css_lib_path    = 'src/lib/css/';
var src_scss_path       = 'src/scss/';
var build_html_path     = 'build/html/';
var build_js_path       = 'build/js/';
var build_css_path      = 'build/css/';

gulp.task('default', function () {
    var gulpTasks = Object.keys(gulp.tasks);
    var colors    = gutil.colors;
    var log       = gutil.log;

    colors.enabled = true;
    colors.supportsColor = true;

    log(colors.cyan('-- All Tasks --'));
    for (var i = 0; i < gulpTasks.length; i++) {
        log('*  ', colors.green(gulpTasks[i]));
    }
});

gulp.task('clean', function () {
    return  gulp.src([src_js_lib_path, src_css_lib_path, 'build/*'], {read: false})
                .pipe(clean());
});

gulp.task('prepare', ['clean'], function () {
    gulp.src([
            './bower_components/datetimepicker/jquery.datetimepicker.css'
        ])
        .pipe(gulp.dest(src_css_lib_path));

    gulp.src([
            './bower_components/jquery/dist/jquery.min.js',
            './bower_components/jquery-i18next/jquery-i18next.min.js',
            './bower_components/i18next-xhr-backend/i18nextXHRBackend.min.js',
            './bower_components/i18next/i18next.min.js',
            './bower_components/datetimepicker/jquery.datetimepicker.js'
        ])
        .pipe(gulp.dest(src_js_lib_path));

    gulp.src(['src/img/*'])
        .pipe(gulp.dest('build/img/'));
});

gulp.task('build', function () {

    gulp.src([
            'src/lib/js/jquery.min.js',
            'src/js/utils/*.js',
            'src/js/plugins/IMDialog.js',
            'src/js/plugins/*.js',
            'src/js/components/*.js',
            'src/js/pages/*.js',
            'src/js/app.js'
        ])
        .pipe(concat('app.js'))
        .pipe(gulp.dest('build/js'));

    gulp.src([
            'src/scss/mixins.scss',
            'src/scss/reset.scss',
            'src/scss/plugins/*.scss',
            'src/scss/components/*.scss',
            'src/scss/util/*.scss',
            'src/scss/pages/*.scss',
            'src/scss/app.scss'
        ])
        .pipe(sass())
        .pipe(flatten())
        .pipe(addsrc.prepend(['src/lib/css/jquery.datetimepicker.css']))
        .pipe(concat('app.css'))
        .pipe(gulp.dest('build/css/'));

    gulp.src('src/html/app.html')
        .pipe(htmlReplace({
            'css': '../css/app.css',
            'js': '../js/app.js'
        }))
        .pipe(gulp.dest(build_html_path));

    gulp.src('src/html/403.html')
        .pipe(gulp.dest(build_html_path));

    gulp.src('src/scss/403.scss')
        .pipe(sass())
        .pipe(flatten())
        .pipe(concat('403.css'))
        .pipe(gulp.dest('build/css/'));

    gulp.src('src/html/404.html')
        .pipe(gulp.dest(build_html_path));

    gulp.src('src/scss/404.scss')
        .pipe(sass())
        .pipe(flatten())
        .pipe(concat('404.css'))
        .pipe(gulp.dest('build/css/'));

    gulp.src('src/html/500.html')
        .pipe(gulp.dest(build_html_path));

    gulp.src('src/scss/500.scss')
        .pipe(sass())
        .pipe(flatten())
        .pipe(concat('500.css'))
        .pipe(gulp.dest('build/css/'));

    gulp.src('src/locales/**/*.json')
        .pipe(gulp.dest('build/locales/'));
});