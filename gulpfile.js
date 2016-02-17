'use strict';

var fs = require('fs');
var path = require('path');
var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var watchify = require('watchify');
var gutil = require('gulp-util');
var notify = require('gulp-notify');
var es = require('event-stream');

var browserifyTask = function () {

    function getLessonsFolders(dir) {
        return fs.readdirSync(dir)
          .filter(function(file) {
            return fs.statSync(path.join(dir, file)).isDirectory() && file.indexOf('lesson') !== -1;
          });
    }

    var files = getLessonsFolders('./');

    var tasks = files.map(function(entry) {

        var count = 0;
        var stream;

        var bundler = browserify({
            extension: ['.js'],
            entries: [entry + '/src/main.js'],
            debug: true
        });

        var rebundle = function () {
            var start = Date.now();
            console.log(count + ': Building ' + entry + '...');
            stream = bundler
                .transform(babelify, {presets: ['es2015', 'react']})
                .bundle()
                .on('error', gutil.log)
                .pipe(source('main.js'))
                .pipe(gulp.dest(entry + '/js/'))
                .pipe(notify(function () {
                    console.log(count++ + ': ' + entry + ' built in ' + (Date.now() - start) + 'ms');
                }));
        };

        bundler = watchify(bundler);
        bundler.on('update', rebundle);

        rebundle();

        return stream;
    });

    return es.merge.apply(null, tasks);
};

gulp.task('build', browserifyTask);
gulp.task('default', ['build']);
