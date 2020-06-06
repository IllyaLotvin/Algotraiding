const {src, dest, watch, series} = require("gulp"),
      browserSync = require("browser-sync").create(),
      sass = require("gulp-sass"),
      autoprefixer = require('gulp-autoprefixer'),
      cleanCSS = require('gulp-clean-css'),
      minify = require('gulp-minify'),
      htmlmin = require('gulp-htmlmin'),
      tinypng = require('gulp-tinypng-compress');



 function bs() {
   serveSass();
  browserSync.init({
    proxy: "index.html"
  });
  watch("./*.html").on("change", browserSync.reload);
  watch("./sass/**/*.sass" , serveSass);
  watch("./sass/**/*.scss" , serveSass);
  watch("./js/*.js").on("change", browserSync.reload);
  //watch("./**/*.php").on("change", browserSync.reload);

};

function serveSass() {
    return src("./sass/**/*.sass", "./sass/**/*.scss" )
      .pipe(sass())
      .pipe(autoprefixer({
        cascade: false
    }))
      .pipe(dest("./css"))
      .pipe(browserSync.stream());
};

function buildCSS(done) {
  src('css/**/**.css')
    .pipe(cleanCSS({ compatibility: 'ie8'}))
    .pipe(dest('diist/css'));
  done();
}

function buildJS(done) {
  src(['js/**.js', '!js/**min.js'])
    .pipe(minify({ext:{
        min:'.js'
      }

    }))
    .pipe(dest('diist/js/'));
  src('js/**.min.js').pipe(dest('diist/js/'));
  done();
}

function html(done) {
  src('**.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(dest('diist/'));
  done();
}

// function php(done) {
//     src(['**.php'])
//       .pipe(dest('diist/'));
//     src('phpmailer/**/**')
//       .pipe(dest('diist/phpmailer/'))
//     done(); 
// }

function fonts(done) {
  src('fonts/**/**')
    .pipe(dest('diist/fonts/'));
  done();
}

// function imagemin(done) {
//   src('img/**/*.{png,jpg}')
//     .pipe(tinypng({key: 'dnv8pWyNzyyvvCpXZs24K06mLQglm8xY'}))
//     .pipe(dest('diist/img/'))
//   src('img/**/*.svg')
//     .pipe(dest('diist/img/'))
//   done();
// }

exports.serve = bs;
exports.build = series(buildCSS, buildJS, html, fonts);

// php, , imagemin