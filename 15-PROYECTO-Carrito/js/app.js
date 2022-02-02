//variables 

const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarrito = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');

cargarEventListeners();
function cargarEventListeners(){
    //cuando agregas a un curso presionando "agregar al carrito"
    listaCursos.addEventListener('click', agregarCurso);
}

// funciones
function agregarCurso (e){
    e.preventDefault();
    if (e.target.classList.contains('agregar-carrito')){
        console.log('Agregando al carrito ');
    }
    
}
