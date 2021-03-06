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
var gzip         = require('gulp-gzip');
var imageMin     = require('gulp-image');
var imagemin     = require('gulp-imagemin');
var pngquant     = require('imagemin-pngquant');
var jpegtran     = require('imagemin-jpegtran');
var tinypng      = require('gulp-tinypng');
var tinyjpg      = require('gulp-tinyimg');

var src_js_lib_path     = 'src/lib/js/';
var src_css_lib_path    = 'src/lib/css/';
var src_scss_path       = 'src/scss/';
var build_html_path     = 'build/';
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
            './bower_components/datetimepicker/jquery.datetimepicker.css',
            './bower_components/Gallery/css/blueimp-gallery.min.css',
            './bower_components/bootstrap/dist/css/bootstrap.min.css',
            './bower_components/unslider/dist/css/*.css'
        ])
        .pipe(gulp.dest(src_css_lib_path));

    gulp.src([
            './bower_components/jquery/dist/jquery.min.js',
            './bower_components/bootstrap/dist/js/bootstrap.min.js',
            './bower_components/page/page.js',
            './bower_components/jquery-i18next/jquery-i18next.min.js',
            './bower_components/i18next-xhr-backend/i18nextXHRBackend.min.js',
            './bower_components/i18next/i18next.min.js',
            './bower_components/datetimepicker/jquery.datetimepicker.js',
            './bower_components/Gallery/js/blueimp-gallery.min.js',
            './bower_components/unslider/dist/js/unslider-min.js',
            './bower_components/distpicker/dist/distpicker.data.min.js',
            './bower_components/distpicker/dist/distpicker.min.js',
            './bower_components/JavaScript-MD5/js/md5.min.js',
            './bower_components/spin.js/spin.min.js',
            './bower_components/clipboard/dist/clipboard.min.js',
            './bower_components/director/build/director.js',
            './bower_components/network-js/dist/network.min.js'
        ])
        .pipe(gulp.dest(src_js_lib_path));

    gulp.src('./bower_components/bootstrap/dist/fonts/*')
        .pipe(gulp.dest('build/fonts/'));

    gulp.src(['src/img/*.jpg'])
        .pipe(tinyjpg('ep-DdwBGWdntDVYb7GnqrfkWOAQMBdj2'))
        .pipe(gulp.dest('build/img/'));

    gulp.src(['src/img/*.png', './bower_components/Gallery/img/*.png'])
        .pipe(tinypng('ep-DdwBGWdntDVYb7GnqrfkWOAQMBdj2'))
        .pipe(gulp.dest('build/img/'));
});

gulp.task('build', function () {
    gulp.src([
            'src/lib/js/jquery.min.js',
            'src/lib/js/director.js',
            'src/lib/js/jquery.datetimepicker.js',
            'src/lib/js/unslider-min.js',
            //'src/lib/js/md5.min.js',
            'src/lib/js/spin.min.js',
            'src/lib/js/clipboard.min.js',
            'src/js/utils/*.js',
            'src/js/plugins/IMDialog.js',
            'src/js/plugins/*.js',
            'src/js/components/*.js',
            'src/js/pages/*.js',
            'src/js/app.js'
        ])
        .pipe(concat('app.js'))
        //.pipe(uglify())
        //.pipe(gzip())
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
        .pipe(addsrc.prepend([  'src/lib/css/jquery.datetimepicker.css',
                                'src/lib/css/unslider.css',
                                'src/lib/css/unslider-dots.css']))
        .pipe(concat('app.css'))
        .pipe(cssmin())
        .pipe(gulp.dest('build/css/'));

    gulp.src('src/index.html')
        .pipe(htmlReplace({
            'css': 'css/app.css',
            'js': 'js/app.js'
        }))
        .pipe(htmlmin())
        .pipe(gulp.dest(build_html_path));

    /*
    ** ----------help center ------------------
    */

    gulp.src([
            'src/lib/js/jquery.min.js',
            'src/js/utils/*.js',
            'src/js/plugins/IMDialog.js',
            'src/js/plugins/*.js',
            'src/js/components/*.js',
            'src/js/help.js'
        ])
        .pipe(concat('help.js'))
        .pipe(uglify())
        //.pipe(gzip())
        .pipe(gulp.dest('build/js'));

    gulp.src([
            'src/scss/mixins.scss',
            'src/scss/reset.scss',
            'src/scss/plugins/*.scss',
            'src/scss/components/*.scss',
            'src/scss/util/*.scss',
            'src/scss/help.scss'
        ])
        .pipe(sass())
        .pipe(flatten())
        .pipe(concat('help.css'))
        .pipe(cssmin())
        .pipe(gulp.dest('build/css/'));

    gulp.src('src/help.html')
        .pipe(htmlReplace({
            'css': 'css/help.css',
            'js': 'js/help.js'
        }))
        .pipe(htmlmin())
        .pipe(gulp.dest(build_html_path));

    gulp.src('src/loading.html')
        .pipe(htmlmin())
        .pipe(gulp.dest(build_html_path));

    gulp.src('src/403.html')
        .pipe(htmlmin())
        .pipe(gulp.dest(build_html_path));

    gulp.src('src/scss/403.scss')
        .pipe(sass())
        .pipe(flatten())
        .pipe(concat('403.css'))
        .pipe(gulp.dest('build/css/'));

    gulp.src('src/404.html')
        .pipe(htmlmin())
        .pipe(gulp.dest(build_html_path));

    gulp.src('src/scss/404.scss')
        .pipe(sass())
        .pipe(flatten())
        .pipe(concat('404.css'))
        .pipe(gulp.dest('build/css/'));

    gulp.src('src/500.html')
        .pipe(htmlmin())
        .pipe(gulp.dest(build_html_path));

    gulp.src('src/scss/500.scss')
        .pipe(sass())
        .pipe(flatten())
        .pipe(concat('500.css'))
        .pipe(gulp.dest('build/css/'));

    gulp.src('src/maintainance.html')
        .pipe(htmlmin())
        .pipe(gulp.dest(build_html_path));

    gulp.src('src/scss/maintainance.scss')
        .pipe(sass())
        .pipe(flatten())
        .pipe(concat('maintainance.css'))
        .pipe(gulp.dest('build/css/'));

    gulp.src('src/locales/**/*.json')
        .pipe(gulp.dest('build/locales/'));
});