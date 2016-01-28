'use strict';

var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var watchify = require('watchify');
var gutil = require('gulp-util');
var notify = require('gulp-notify');

var browserifyTask = function () {

    var count = 0;

    var bundler = browserify({
        extension: ['.js'],
        entries: ['lesson-1/src/app.js'],
        debug: true
    });

    var rebundle = function () {
        var start = Date.now();
        console.log(count + ': Building app...');
        bundler
            .transform(babelify, {presets: ['es2015', 'react']})
            .bundle()
            .on('error', gutil.log)
            .pipe(source('main.js'))
            .pipe(gulp.dest('lesson-1/js/'))
            .pipe(notify(function () {
                console.log(count++ + ': App built in ' + (Date.now() - start) + 'ms');
            }));
    };

    bundler = watchify(bundler);
    bundler.on('update', rebundle);

    rebundle();
};

gulp.task('build', browserifyTask);

gulp.task('default', ['build']);
