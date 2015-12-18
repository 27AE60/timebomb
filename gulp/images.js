"use strict";

import gulp from "gulp";
import notify from "gulp-notify";

const sources = ["src/images/**/*"];

gulp.task("images", () => {
    return gulp.src(sources)
        .pipe(gulp.dest(".tmp/images"));
});
