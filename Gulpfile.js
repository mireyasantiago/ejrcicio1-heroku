var gulp= require('gulp');
var sass= require('gulp-sass');
var rename= require('gulp-rename');
var babel = require('babelify');
var browserify = require('browserify');
var source= require('vinyl-source-stream');
var watchify= require('watchify');

//vamos a definir una tarea para gulp
// cada vez que queramos agreagar los estilos desde sass en consola se pone el comando gulp styles
gulp.task('styles', function(){
  gulp
    .src('index.scss')
    //pipe es como una tuberia donde se tienen que pasra la informacion por eso no se pone ; al finalizar los pipe
    .pipe(sass())
    //con rename nos cambiara el nombre del documento de index.css a app.css
    .pipe(rename('app.css'))
    .pipe(gulp.dest('./public'));
})

gulp.task('assets', function(){
  gulp
    //se utilizara glob para apuntar a los archivos que estan en la carpeta
    .src('assets/*')
    .pipe(gulp.dest('./public'));

})

//creamos una funcion para poder compilar
function compile(watch){
  var bundle= browserify('./src/index.js');



    if(watch){
      bundle=watchify(bundle);
      //se utilizara el metodo on y el evento update
      // la funcion se llamara cada cuendo haya cambios
      bundle.on('update', function(){
        console.log("--> Bundling....");
        rebundle();
      })
    }

  function rebundle(){
    bundle
      .transform(babel, {presets: ["es2015"], plugins:['syntax-async-functions','transform-regenerator'] })
      .bundle()
      .on('error', function(err){
        console.log(err);
        this.emit('end')
      })
      .pipe(source('index.js'))
      //.pipe(souce('index.js'))
      .pipe(rename('app.js'))
      .pipe(gulp.dest('public'));
  }

  //lo llamara por primera vez
  rebundle();
}



gulp.task('build', function(){
  return compile();
});
gulp.task('watch', function(){
  return compile(true);
});

//las tareas a ejecutar por default
gulp.task('default',['styles','assets', 'build']);
