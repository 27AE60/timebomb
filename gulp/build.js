"use strict";

import gulp from "gulp";
import runSequence from "run-sequence";

gulp.task("build", callback => {
    return runSequence.use(gulp)(
        "clean",
        [
            // "bower:sass",
            "html"
        ],
        [
            "scripts",
            "styles",
            "font",
            "images",
            "copy"
        ],
        callback
    );
});
