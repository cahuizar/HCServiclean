var gulp = require('gulp');
// var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var del = require('del');
var runSequence = require('run-sequence');
const zip = require('gulp-zip');


// Start browserSync server
gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: './'
    }
  })
})

// gulp.task('sass', function() {
//   return gulp.src('app/scss/**/*.scss') // Gets all files ending with .scss in app/scss and children dirs
//     .pipe(sass().on('error', sass.logError)) // Passes it through a gulp-sass, log errors to console
//     .pipe(gulp.dest('app/css')) // Outputs it in the css folder
//     .pipe(browserSync.reload({ // Reloading with Browser Sync
//       stream: true
//     }));
// })

// Watchers
gulp.task('watch', function() {
  gulp.watch('*.html', browserSync.reload);
  gulp.watch('js/**/*.js', browserSync.reload);
})

// Optimization Tasks 
// ------------------

// Optimizing CSS and JavaScript 
gulp.task('useref', function() {
  return gulp.src('*.html')
    .pipe(useref())
    .pipe(gulpIf('js/*.js', uglify()))
    .pipe(gulpIf('css/*.css', cssnano()))
    .pipe(gulp.dest('dist'));
});
gulp.task('php', function() {
  return gulp.src('php/*')
    .pipe(gulp.dest('dist/php'))
});
gulp.task('moveFiles', function() {
  return gulp.src('*.+(png|jpg|jpeg|gif|svg|xml|webmanifest|txt|ico|xml)')
    .pipe(gulp.dest('dist/'))
});

// Optimizing Images 
gulp.task('images', function() {
  return gulp.src('images/**/*.+(png|jpg|jpeg|gif|svg)')
    // Caching images that ran through imagemin
    .pipe(cache(imagemin({
      interlaced: true,
    })))
    .pipe(gulp.dest('dist/images'))
});

// Cleaning 
gulp.task('clean', function() {
  return del.sync('dist').then(function(cb) {
    return cache.clearAll(cb);
  });
})

gulp.task('zip', () =>
    gulp.src('dist/**')
        .pipe(zip('app.zip'))
        .pipe(gulp.dest('dist'))
);

gulp.task('clean:dist', function() {
  return del.sync(['dist/**/*', '!dist/images', '!dist/images/**/*']);
});


gulp.task('default', function(callback) {
  runSequence(['browserSync'], 'watch',
    callback
  )
})

gulp.task('build', function(callback) {
  runSequence(
    'clean:dist',
    ['useref', 'images', 'php', 'moveFiles'], 'zip',
    callback
  )
})