var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var nib = require('nib');

var distFolder = './dist';

gulp.task('assets', function() {
  gulp.src('./assets/**')
    .pipe(plugins.newer(distFolder))
    .pipe(gulp.dest(distFolder));
});

gulp.task('css', function() {
  gulp.src('./precompile/stylus/style.styl')
    .pipe(plugins.stylus({use: [nib()], compress: true}))
    .pipe(gulp.dest(distFolder + '/css'));
});

gulp.task('js', function() {
  gulp.src('./precompile/js/*.js')
    .pipe(plugins.jshint())
    .pipe(plugins.jshint.reporter('default'))
    .pipe(plugins.ngAnnotate({add: true}))
    .pipe(plugins.uglify({compress: true}))
    .pipe(plugins.concat('script.min.js'))
    .pipe(gulp.dest(distFolder + '/js'));
});

gulp.task('default', ['assets', 'css', 'js']);
