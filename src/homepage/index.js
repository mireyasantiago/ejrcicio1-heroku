/*
var page= require('page');

page('/', function(ctx, next){
  // que diga home
  var main = document.getElementById('main-container');

  main.innerHTML = '<a href="/signup">Signup</a>';
})*/

var page= require('page');
var empty= require("empty-element");
var template= require('./template');
var title= require('title');
var request= require('superagent');
var header= require('../header');
//var axios =require('axios');

//var axios= require('axios');

page('/',header, loadPicturesFetch, function(ctx, next){
  title('Platzigram');
  var main = document.getElementById('main-container');
  /*var pictures=[
    {
      user:{
        username: 'imagen1',
        avatar: 'http://materializecss.com/images/sample-1.jpg'
      },
      url:'http://materializecss.com/images/office.jpg',
      likes: 0,
      liked: false,
      createdAt: new Date()
    },s

    {
      user:{
        username: 'imagen1',
        avatar: 'http://materializecss.com/images/sample-1.jpg'
      },
      url:'http://materializecss.com/images/office.jpg',
      likes: 1,
      liked: true,
      createdAt: new Date()
    },
  ];*/
  empty(main).appendChild(template(ctx.pictures));

})
/*un middleware es una función que recibe ciertos parámetros
(en este caso: el contexto y next) y uno de ellos (next) es un
llamado al siguiente middleware, y así cada uno de ellos se puede encargar de
una cosa por separado y se pueden reutilizar en diversas rutas para que realicen tareas
comunes a dichas rutas*/
/*function loadPictures(ctx,next ){
  request
    .get('/api/pictures')
    .end(function(err, res){
      if(err) return console.log(err);
      ctx.pictures = res.body;
      next();
  })

}*/


// realizando request por medio de la libreria axios que se basa en promesas
/*function loadAxio(ctx,next ){
  axios
    .get('/api/pictures')
    .then(function(res){
      ctx.pictures = res.data;
      next();

  }).catch(function(err){
    console.log(err);
  })

}*/

// realizando request del servidor  con fetch
function loadPicturesFetch(ctx,next ){
  fetch('/api/pictures')
    .then(function(res){
      return res.json();
  })
    .then(function(pictures){
      ctx.pictures = pictures;
      next();
  }).catch(function(err){
    console.log(err);
  })

}

//funcionalidad de babel
/*async function asyncLoad(ctx, next){
  try{
  ctx.pictures= await fetch('/api/pictures').then(res=> res.json);
  next();

}catch(err){
return console.log(err);
}

}*/
