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
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    }
    
}

// lee el contendo de html al que le dumos click y extrae la informacion del curso
function leerDatosCurso(curso){
console.log(curso);        
    // crear un objeto conel contenido del curso 
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }
    console.log(infoCurso);
}
