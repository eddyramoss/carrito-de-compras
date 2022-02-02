//variables 

const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarrito = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];

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
// console.log(curso);        
    // crear un objeto conel contenido del curso 
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }
    // agregar elementos al arreglo de carrito
    articulosCarrito = [...articulosCarrito, infoCurso];
    console.log(articulosCarrito);
    carritoHTML();
}

// muestra el carrito de compras en html
function carritoHTML(){

    // limpiar el html
    limpiarHTML();  
    // recorre el carrito y genera el html
    articulosCarrito.forEach( curso => {
        const {imagen,titulo,precio,cantidad,id} = curso;
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>
                <img src="${imagen}" width ="150">
            </td>
            <td>${titulo}</td>
            <td>${precio}</td>
            <td>${cantidad}</td>
            <td>
                <a href="#" class="borrar-curso" data-id="${id}" > X  </a>
            </td>
        
        `;
        // agrega el html del carrito en el body
        contenedorCarrito.appendChild(row);
    });
}

// limpiar los cursos del tbody
function limpiarHTML(){
    // forma lenta
    // contenedorCarrito.innerHTML= '';

    while(contenedorCarrito.firstChild){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    }
}
