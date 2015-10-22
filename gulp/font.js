"use strict";

import gulp from "gulp";
import notify from "gulp-notify";

const sources = ["src/styles/vendor/lato/**/*"];

gulp.task("font", () => {
    return gulp.src(sources)
        .pipe(gulp.dest(".tmp/font"));
});