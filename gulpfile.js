/*
babel-cli production-ready with ECMAScript 2016 import
nodemon hot reload of Node.js
© 2016 Harald Rudell <c@haraldrudell.com> (http://haraldrudell.com) ISC license.
*/

const gulp = require('gulp')
const babel = require('gulp-babel')
const sourcemaps = require('gulp-sourcemaps')
const nodemon = require('gulp-nodemon')
const print = require('gulp-print')
const path = require('path')

const paths = {
  scripts: {
    src: 'src/**/*.js',
    dest: 'build',
  }
}
const nodemonOptions = {
  script: path.join(paths.scripts.dest, 'server.js'),
  watch: paths.scripts.dest,
}

exports.build = scripts

exports.debug = gulp.series(scripts,
  gulp.parallel(watch, hotReloadDebug))

exports.default = gulp.series(scripts,
  gulp.parallel(watch, hotReload))

function hotReload() {
  return nodemon(nodemonOptions)
}

function hotReloadDebug() {
  var nodemonDebugOptions = {exec: 'node --debug --debug-brk'}
  Object.assign(nodemonDebugOptions, nodemonOptions)
  return nodemon(nodemonDebugOptions)
}

function scripts () {
  return gulp.src(paths.scripts.src, {since: gulp.lastRun(scripts)})
    .pipe(print())
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.scripts.dest))
}

function watch() {
  gulp.watch(paths.scripts.src, scripts)
}
