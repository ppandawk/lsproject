var gulp 	    = require('gulp'),
    bower     = require('gulp-bower'),
    compass   = require('gulp-compass'),
    cssClean  = require('gulp-clean-css'),
    path 	    = require('path');

var config = {
    cssPath : './assets/css',
	  sassPath: './assets/sass',
    bowerDir: './bower_components'
};

var cssOption = {
		keepSpecialComments : 0,
    compatibility: 'ie8',
		debug : true
};

gulp.task('bower', function() {
    return bower()
    .pipe(gulp.dest(config.bowerDir));
});

gulp.task('compass', function() {
  gulp.src(config.sassPath + '/*.scss')
    .pipe(compass({
      css: config.cssPath,
      sass: config.sassPath,
      generated_images_path: true,
      import_path: [
          config.sassPath,
          config.bowerDir + '/bootstrap-sass-official/assets/stylesheets'
      ]
    }))
    .pipe(cssClean(cssOption))
    .pipe(gulp.dest(config.cssPath));
});

 gulp.task('watch', function() {
  gulp.watch(config.sassPath + '/**/*.scss',['compass']);
});


gulp.task('default', ['compass','watch']);
