var gulp = require("gulp"),
    sass = require("gulp-sass"),
    postcss = require("gulp-postcss"),
    autoprefixer = require("autoprefixer"),
    cssnano = require("cssnano"),
    sourcemaps = require("gulp-sourcemaps"),
    concat = require("gulp-concat"),
    imagemin = require("gulp-imagemin"),
    browserSync = require("browser-sync").create();

var paths = {
    styles: {
    src: "./src/scss/**/*.scss",
    },
    htmlFiles: {
    srcHTML: "./src/**/*.html",
    destHTML: "./public/*.html"
    },
    dest: "./public",
    images: {
        srcImg: "./src/images/**/*",
        destImg: "./public/images/"
        },
};

function style() {
return gulp
    .src(paths.styles.src)
    .pipe(sourcemaps.init())
    .pipe(sass({
        includePaths: require('node-normalize-scss').includePaths
      }))
    .on("error", sass.logError)
    .pipe(concat("index.css"))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.dest))
    .pipe(browserSync.stream());
}

function optimizeImg() {
    return gulp.src(paths.images.srcImg)
        .pipe(imagemin())
        .pipe(gulp.dest(paths.images.destImg));
}

function htmlCopy() {
    return gulp
    .src(paths.htmlFiles.srcHTML)
    .pipe(gulp.dest(paths.dest));
}

function reload(done) {
browserSync.reload();
done();
}

function watch() {
browserSync.init({
    server: {
        baseDir: paths.dest
    }
});
gulp.watch(paths.styles.src, style);
gulp.watch(paths.htmlFiles.srcHTML, htmlCopy);
gulp.watch(paths.images.srcImg, optimizeImg);
gulp.watch(paths.htmlFiles.destHTML, reload);
}
exports.watch = watch

var build = gulp.parallel(watch, style, htmlCopy, optimizeImg);

gulp.task('default', build);