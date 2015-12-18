"use strict";

import gulp from "gulp";
import sass from "gulp-sass";
import path from "path";
import sourcemaps from "gulp-sourcemaps";
import notify from "gulp-notify";

const sources = ["src/styles/main.scss", "src/styles/vendor.scss"];

gulp.task("styles", () => {
  return gulp.src(sources)
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.init())
        .on("error", notify.onError({title: "styles"}))
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest(".tmp/styles"));
});

gulp.task("styles:watch", () => {
  return gulp.watch(["src/styles/**/*.scss"], ["styles"]);
});
