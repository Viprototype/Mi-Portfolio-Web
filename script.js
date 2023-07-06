/* Este código carga las animaciones una vez cargada la página */

window.addEventListener('load', function() {
  var h1Element = document.querySelector('.bienvenida');
  h1Element.classList.add('fade-in-h1', 'slideRight-h1');

  var h2Element = document.querySelector('.presentacion');
  h2Element.classList.add('fade-in-h2', 'slideLeft-h2');

  var pElement = document.querySelector('.breve-descripcion');
  pElement.classList.add('fade-in-p', 'slideDown-p');
});


