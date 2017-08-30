'use strict';

const gulp = require('gulp'),
      sass = require('gulp-sass'),
	  autoprefixer = require('gulp-autoprefixer');

gulp.task('default', function(){
	gulp.watch('css/**', ['sass']);
});

gulp.task('sass', function(){
	return gulp.src('css/**')
	.pipe(sass())
	.pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
	.pipe(gulp.dest('css'))
});


