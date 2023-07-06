/* Este código carga las animaciones una vez cargada la página */

window.addEventListener('load', function() {
  var h1Element = document.querySelector('.bienvenida');
  h1Element.classList.add('fade-in-h1', 'slideRight-h1');

  var h2Element = document.querySelector('.presentacion');
  h2Element.classList.add('fade-in-h2', 'slideLeft-h2');

  var pElement = document.querySelector('.breve-descripcion');
  pElement.classList.add('fade-in-p', 'slideDown-p');
});

window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  var scrollBtn = document.getElementById("scrollBtn");

  if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 20) {
    scrollBtn.classList.remove("hide");
  } else {
    scrollBtn.classList.add("hide");
  }
}

function scrollToTop() {
  document.body.scrollTop = 0; // Para Safari
  document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE y Opera
}
