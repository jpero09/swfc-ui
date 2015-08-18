var del = require('del');
var gulp = require('gulp');
var mergeStream = require('merge-stream');
var nib = require('nib');
var path = require('path');
var plugins = require('gulp-load-plugins')();

var distFolder = './dist';
var appJSPath = './precompile/app';

gulp.task('clean', function() {
  del.sync([path.join(__dirname, './dist')], {force: true});
});

gulp.task('assets', function() {
  return gulp.src('./assets/**')
    .pipe(plugins.newer(distFolder))
    .pipe(gulp.dest(distFolder));
});

gulp.task('stylus', function() {
  return gulp.src('./precompile/stylus/style.styl')
    .pipe(plugins.stylus({use: [nib()], compress: true}))
    .pipe(gulp.dest(distFolder + '/css'));
});

// JS
gulp.task('js', jsTask);
function jsTask() {
  var templatesStream = gulp
    .src(appJSPath + '/**/*.jade')
    .pipe(plugins.jade())
    .pipe(plugins.htmlmin({
      collapseWhitespace: true,
      removeComments: true
    }))
    .pipe(plugins.ngTemplates({
      filename: 'templates.min.js',
      module: 'app.templates',
      path: function(path, base) {
        return path.replace(base, '').replace('.html', '');
      }
    }));

  var jsStream = gulp
    .src(appJSPath + '/**/*.js')
    .pipe(plugins.ngAnnotate({add: true}))
    .pipe(plugins.concat('script.min.js'));

  var mergedStream = mergeStream(templatesStream, jsStream);

  return mergedStream
    .pipe(plugins.concat('script.min.js'))
    .pipe(plugins.if(
      true, // TODO: REMOVE HARDCODED HACK!!! env === 'dev'
      plugins.beautify({indentChar: ' ', indentSize: 2}),
      plugins.uglify({mangle: true, compress: true})
    ))
    .pipe(gulp.dest(distFolder + '/js'));
}

gulp.task('start', ['clean']);
gulp.task('compile', ['stylus', 'assets', 'js']);

gulp.task('default', ['start', 'compile']);
// gulp.task('default', ['stylus', 'assets', 'js']);
