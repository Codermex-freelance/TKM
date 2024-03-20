const teclado = document.querySelector('.articulo__contenido');
const contenedorTeclado = document.querySelector('#probando tbody');

let tecladoMostrar = [];

cargarEventListeners();
function cargarEventListeners(){
  //teclado.addEventListener('click', agregarTeclado);
  const articulos = document.querySelectorAll('.articulo__contenido');

  articulos.forEach(articulo => {
    articulo.addEventListener('click', agregarTeclado);
  });

  //Muestra los teclados de Local Storage
  document.addEventListener('DOMContentLoaded', () => {
    tecladoMostrar = JSON.parse(localStorage.getItem('teclado')) || [];
  }); 
}

//FUNCIONES
function agregarTeclado(e){
  limpiarTeclado();

  //e.preventDefault();
  if(e.target.classList.contains('articulo__imagen')){//Valida que solo se ejecute cuando toque esa clase
      const tecladoSeleecionado = e.target.parentElement.parentElement;//accedemos a todo el div que tiene el contenido del curso
      leerDatosTeclados(tecladoSeleecionado);
  }   
}

function leerDatosTeclados(teclado){
  const infoTeclado = {
    nombre: teclado.querySelector('h2').textContent,
    precio: teclado.querySelector('h3').textContent,
    id: teclado.querySelector('a').getAttribute('data-id')
  }
  //some = permite iterarsobre un arreglo de objetos y verificar si un elemento existe en el
  const existe = tecladoMostrar.some( teclado => teclado.id === infoTeclado.id);
  if( existe ){
    tecladoMostrar = [...teclado];
  }else{
    tecladoMostrar = [...tecladoMostrar, infoTeclado];
  }
  nombreURL(infoTeclado.nombre);
  //mostrarTeclado();

  
  sincronizarStorage();
}

function nombreURL(producto){
  history.pushState({}, '', `art_teclado.html?${producto}`);
}

function sincronizarStorage(){
    localStorage.setItem('teclado', JSON.stringify(tecladoMostrar));
}

function limpiarTeclado(){
  tecladoMostrar = [];
}


