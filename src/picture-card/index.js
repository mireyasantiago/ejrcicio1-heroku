var yo= require('yo-yo');
var moment= require('moment');
var translate= require('../translate');
// preguntar si window.intl  esta definido oh no. para no tener problemas a la hora de visualizar en safary
if(!window.Intl){
  window.Intl= require('intl');
  require('intl/locale-data/jsonp/en-US.js')
  require('intl/locale-data/jsonp/es.js')
}



var IntlRelativeFormat= window.IntlRelativeFormat = require('intl-relativeformat');
require('intl-relativeformat/dist/locale-data/en.js');
require('intl-relativeformat/dist/locale-data/es.js');

var rf= new IntlRelativeFormat('es');

module.exports= function pictureCard(pic){
  var el;
/*  return yo`<div class="card">
    <div class="card-image">
      <img class="activator" src="${pic.url}">
    </div>
    <div class="card-content">
      <a href="/user/${pic.user.username}" class="card-title">
        <img src="${pic.user.avatar}" class="avatar"/>
        <span class="username">${pic.user.username}</span>
      </a>
      <small class="right time">${moment(picture.createdAt).fromNow()}</small> --espara crear la fecha actual con moment
      <small class="right time">Hace 1 dia</small>
      <p>
        <a href="#" class="left">
          <i class="fa fa-heart-o" aria-hidden="true"></i>
        </a>
        <span class="left likes">${pic.likes} Me gusta</span>


      </p>

    </div>
  </div>`;*/

  function render(picture){
    return yo`<div class="card ${picture.liked ? 'liked': ''}">
        <div class="card-image">
          <img class="activator" src="${picture.url}">
        </div>
        <div class="card-content">
          <a href="/user/${picture.user.username}" class="card-title">
            <img src="${picture.user.avatar}" class="avatar"/>
            <span class="username">${picture.user.username}</span>
          </a>
          <small class="right time">${translate.date.format(picture.createdAt)}</small>
          <p>
            <a href="#" class="left" onclick=${like.bind(null,true)}>
              <i class="fa fa-heart-o" aria-hidden="true"></i>
            </a>
            <a href="#" class="left" onclick=${like.bind(null,false)}>
              <i class="fa fa-heart" aria-hidden="true"></i>
            </a>
            <span class="left likes">${translate.message('likes',{likes: picture.likes})}</span>
          </p>
        </div>
      </div>`
  }
  /*con bind manipulara/cambiar  el valor de this.*/

  /*yo.update nos permitira actualiar la vista por los cambios de datos en
   el cual le vamos a pasar cual es el elemento viejo y cual es el nuevo*/
  function like(liked){
    pic.liked= liked;
    //se realizara un if en un solo renglon en el que si me gusto se agregara sino se disminuira
    pic.likes += liked ? 1: -1;
    var newEL= render(pic);
    yo.update(el, newEL);
    return false;
    }
/*
  function dislike(){
    pic.liked= false;
    pic.likes--;
    var newEL= render(pic);
    yo.update(el, newEL);
    return false;
  }
*/
  el = render(pic);
  return el;
}
