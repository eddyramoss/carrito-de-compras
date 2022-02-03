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

    // elimina cursos del carrito  
    carrito.addEventListener('click', eliminarCurso);
}

// funciones
function agregarCurso (e){
    e.preventDefault();


    if (e.target.classList.contains('agregar-carrito')){
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    }
    
}

// elimina el curso del carrito
function eliminarCurso(e){
    if(e.target.classList.contains('borrar-curso')){
        const cursoId = e.target.getAttribute('data-id');

        // .filter elimina el arreglo de articuloCarrito por el data-id
        articulosCarrito = articulosCarrito.filter( curso => curso.id !== cursoId);
        
        carritoHTML(); //iterar sobre el carrito y mostrar el html
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

    // revisa si un elemento ya existe en el carrito
    // .some nos permite iterar sobre un arreglo de objetos y ver si unn elemento existe en el objeto
    const existe  = articulosCarrito.some(curso => curso.id === infoCurso.id);
    if(existe){
        // actualizamos la cantidad
        const cursos = articulosCarrito.map( curso =>{
            if ( curso.id === infoCurso.id){
                curso.cantidad++;
                return curso;
            }else{
                return curso;
            }
        });
        articulosCarrito = [...cursos];
    }else{
        // agrega elementos al arreglo carrito
            articulosCarrito = [...articulosCarrito, infoCurso];
    }

    // agregar elementos al arreglo de carrito

    console.log(articulosCarrito);
    carritoHTML();
}

// muestra el carrito de compras en html
function carritoHTML(){

    // limpiar el html
    limpiarHTML();  
    // recorre el carrito y genera el html
    articulosCarrito.forEach( curso => {
        // se agrego este const para que dessde la linea 55 se pierda el curso
        const {imagen,titulo,precio,cantidad,id} = curso;
        const row = document.createElement('tr');
        row.innerHTML = `
            <td> <img src="${imagen}" width ="150"></td>
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
