require('babel-polyfill');
//se creara la navegacion de paginas con page.js sin necesidad de recargar
var page= require('page');
//var moment= require('moment');

//se utilizara la libreria de moment para la fecha actual y cambio de idoma
//require('moment/locale/es');
//vamos a cetear el local donde se realizra el cambio a español
//moment.locale('es');
//es importante la organizacion de las carpetas

require('./header');
require('./homepage');
require('./signup');
require('./signin');
require('./footer');

/*
var yo= require("yo-yo");
var empty= require("empty-element");
var main = document.getElementById('main-container');
*/
/*
page('/', function(ctx, next){
  // que diga home
  main.innerHTML = '<a href="/signup">Signup</a>';
})*/

page();
