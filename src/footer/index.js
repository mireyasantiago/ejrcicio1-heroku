var yo= require('yo-yo');
//es una variable que esta disponible en js para exportar
var landing= require('../landing');
var translate= require('../translate');

var el =yo`<footer class="site-footer">
  <div class="container">
    <div class="row">
      <div class="col s12 l3 center-align">
        <!-- Dropdown Trigger--><a href="#" data-activates="dropdown1" class="dropdown-button btn-flat">${translate.message('language')}</a>
        <!-- Dropdown Structure-->
        <ul id="dropdown1" class="dropdown-content">
          <li><a href="#!" onclick=${lang.bind(null, 'es')}>${translate.message('spanish')}</a></li>
          <li><a href="#!" onclick=${lang.bind(null, 'en-US')}>${translate.message('english')}</a></li>
        </ul>
      </div>
      <div class="col s12 l3 push-l6 center-align">2017 platzigram</div>
    </div>
  </div>
</footer>`;



function lang(locale){
  localStorage.locale= locale;
  //para recargar los cambios
  location.reload();
  return false;
}

//para que se imprima en todo el proyecto ya que comparten el mismo footer
document.body.appendChild(el);
