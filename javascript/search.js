

/* busqueda */

let objeto = new URLSearchParams (location.search);
let id = objeto.get("search");

let busq = document.querySelector('.section1');
busq.innerHTML += ` <div>
<h3 class="comogenre"><a href="detail-track.html" > Respuesta de busqueda para : ${id} </a> </h3>
</div> `

busq.style.color = "rgb(243, 135, 243)"

/* Búsqueda tarda en cargar deberá aparecer un spinner, gif animado */

window.addEventListener('load', function () {
    let carga = document.querySelector('#cargando');
    carga.style.display = "none"
})

/* Fetch para traer info */

fetch(`https://api.allorigins.win/raw?url=https://api.deezer.com/search?q=${id}`)
.then( function(respuesta){
    return respuesta.json()
})
.then( function(resultados){
    console.log()
    
    let datos = resultados.data
    let etiquetas = document.querySelector("#seccion")
    let todo = document.querySelector('.todo'); /* no funciona */

    for(let i = 0; i < datos.length; i++){
        etiquetas.innerHTML += `<article class="article3">
  <a href="detail-artist.html?id=${resultados.data[i].id}" class="sacardilineado">
  <div class="contenedorfoto"> <img src="${resultados.data[i].artist.picture}" alt=""> </div>
    <h3>${resultados.data[i].title}</h3>
    <h4> ${resultados.data[i].artist.name} </h4>
     
      </a>
   
</article>
`
    }

    let form = document.querySelector('.buscador'); 
    let busqueda = document.querySelector('.buscar');

    form.addEventListener('submit', function(e) {
        e.preventDefault();


        if (datos.lenght == "0") {
            let vacio = document.querySelector('main');
            vacio.innerHTML += `<h3 > No se han encontrado busquedas para el termino buscado </h3> ` ;
            vacio.style.margin = "270px";
            let scc = document.querySelector('#seccion')
            todo = document.querySelector('.todo'); /* no funciona */
            scc.style.display = "none"; /* no funciona */
        } else if (busqueda.value == "" || busqueda.value.length <=3 ){
            let vacio = document.querySelector('main');
            vacio.innerHTML += `<h3 > Esta vacio el campo o debe ser mayor a 3 caracteres </h3> ` ;
            vacio.style.margin = "270px"
        }

    })

})
       
    
.catch (function(error){
    console.log(error)
}) 


 /* me falta el this.submit() y si no hay resultados para lo buscado que aparezca eso*/

