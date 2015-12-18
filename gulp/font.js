"use strict";

import gulp from "gulp";
import notify from "gulp-notify";

const sources = [
  "src/styles/vendor/Source_Sans_Pro/**/*",
  "src/styles/vendor/font_awesome/fonts/*",
];

gulp.task("font", () => {
    return gulp.src(sources)
        .pipe(gulp.dest(".tmp/font"));
});
