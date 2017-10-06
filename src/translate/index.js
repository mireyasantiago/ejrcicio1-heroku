
// preguntar si window.intl  esta definido oh no. para no tener problemas a la hora de visualizar en safary
if(!window.Intl){
  window.Intl= require('intl');
  require('intl/locale-data/jsonp/en-US.js');
  require('intl/locale-data/jsonp/es.js');
}


//para las fechas
var IntlRelativeFormat= window.IntlRelativeFormat = require('intl-relativeformat');
//para los textos
var IntlMessageFormat= require('intl-messageformat');

require('intl-relativeformat/dist/locale-data/en.js');
require('intl-relativeformat/dist/locale-data/es.js');

//var rf= new IntlRelativeFormat('es');
var es= require('./es');
var en= require('./en-US');

var MESSAGES= {};
MESSAGES.es=es;
MESSAGES['en-US']= en;
//para poder cambiar el texto de español o ingles
//var locale = 'en-US';
//var locale = 'es';

//vamos a utilizar local store para guardar la inf y utilizar despues

var locale= localStorage.locale ||  'es';

module.exports={
  message: function (text, opts ){
    //para que tome un valor por defecto y asi sea soportado por safari
  opts= opts || {};
  var msg= new IntlMessageFormat(MESSAGES[locale][text], locale, null);
  return msg.format(opts);
 },
 date: new IntlRelativeFormat(locale)

}
