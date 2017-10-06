var express = require('express'); //con require se buscara express dentro de nodemodules
var app= express();
//para ver se utilizara pug
app.set('view engine', 'pug');
//para que cualquier usuario pueda acceder a el
app.use(express.static('public'));
// definiremos la ruta
//var port = process.env.PORT || 3000;
/*la linea anterior es para ejecutar el proyecto en Heroku*/


app.get('/', function(req, res){
  //res.send('hola');
  //.render quiere decir que llamara el punto de vista
  res.render('index', {title: 'Platzigram'});
})

app.get('/signup', function(req, res){
    res.render('index', {title: 'Platzigram-signup'})
})
app.get('/signin', function(req, res){
    res.render('index', {title: 'Platzigram-Signin'})
})




app.get('/api/pictures', function(req,res, next){
  var pictures=[
    {
      user:{
        username: 'imagen1',
        avatar: 'http://materializecss.com/images/sample-1.jpg'
      },
      url:'http://materializecss.com/images/office.jpg',
      likes: 0,
      liked: false,
      createdAt: new Date().getTime()
    },

    {
      user:{
        username: 'imagen1',
        avatar: 'http://materializecss.com/images/sample-1.jpg'
      },
      url:'http://materializecss.com/images/office.jpg',
      likes: 1,
      liked: true,
      createdAt: new Date().setDate(new Date().getDate() - 10)
    }
  ];
  setTimeout(function(){
    res.send(pictures);
 }, 2000)

})


app.listen(3000, function(err){
  if(err) return console.log("hubo un error"), process.exit(1);
    console.log("platzigram escuchando puerto 3000");
})
