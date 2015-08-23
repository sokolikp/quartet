var gulp = require('gulp');
var jshint = require('gulp-jshint');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var reactify = require('reactify');
var streamify = require('gulp-streamify');
var concat = require('gulp-concat');
var nodemon = require('gulp-nodemon');

var path = {
  ALL: ['src/js/views/*.jsx', 'src/js/*.js'],
  HTML: 'src/index.html',
  CSS: 'src/styles/style.css',
  OUT: 'build.js',
  DEST: 'dist',
  DEST_SRC: 'dist/src',
  ENTRY_POINT: './src/js/app.js'
};

browserify: {
  options: {
    browserifyOptions: {
     debug: true
    }
  }
};

gulp.task('lint', function () {
  gulp.src(path.ALL)
    .pipe(jshint());
});

gulp.task('copy-index', function(){
  gulp.src(path.HTML)
    .pipe(gulp.dest(path.DEST));
});

gulp.task('copy-css', function(){
  gulp.src(path.CSS)
    .pipe(concat('main.css'))
    .pipe(gulp.dest(path.DEST_SRC));
});

gulp.task('transform', function() {
  // Browserify/bundle the JS.
  browserify({
    entries: path.ENTRY_POINT,
    debug: true
  })
  .transform(reactify)
  .bundle()
  .pipe(source('build.js'))
  .pipe(gulp.dest(path.DEST_SRC));
});
 
// Rerun tasks whenever a file changes.
gulp.task('watch', function() {
  gulp.watch(path.HTML, ['copy-index']);
  gulp.watch(path.CSS, ['copy-css']);
  gulp.watch(path.ALL, ['lint']);
  gulp.watch(path.ALL, ['transform']);
});

gulp.task('demon', function () {
  nodemon({
    script: 'server/server.js',
    ext: 'js',
    env: {
      'NODE_ENV': 'development'
    }
  })
    .on('start', ['lint'])
    .on('change', ['lint'])
    .on('restart', function () {
      console.log('restarted!');
    });
});

gulp.task('default', ['watch', 'copy-index', 'copy-css', 'transform', 'demon']);
