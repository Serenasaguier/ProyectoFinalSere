
/* busqueda */

let objeto = new URLSearchParams (location.search);
let id = objeto.get("search");

let busq = document.querySelector('.section1');
busq.innerHTML += ` <div>
<h3 class="comogenre"><a href="detail-track.html"> Respuesta de busqueda para : ${id} </a> </h3>
</div> `

busq.style.color = "rgb(243, 135, 243)"

/* Búsqueda gif animado */

let carga = document.querySelector('#cargando');
window.addEventListener('load', function () {
    
    carga.style.display = "none"
})

/* Fetch  */

fetch(`https://api.allorigins.win/raw?url=https://api.deezer.com/search?q=${id}`)
.then( function(respuesta){
    return respuesta.json()
})
.then( function(resultados){
    console.log()
    
    let datos = resultados.data
    let etiquetas = document.querySelector("#seccion")

    for(let i = 0; i < datos.length; i++){
        etiquetas.innerHTML += `<article class="article3">
  <div class="contenedorfoto"> <img src="${resultados.data[i].artist.picture}" alt=""> </div>
  <div class="chico" > 
  <a id="mini"  href="detail-track.html?id=${resultados.data[i].id}"  class="sacardilineado"> <h3>${resultados.data[i].title}</h3>  </a> </div>
   <a href="detail-artist.html?id=${resultados.data[i].artist.id}" class="sacardilineado"> <h4> ${resultados.data[i].artist.name} </h4> </a>

</article>
`

    }

    let form = document.querySelector('.buscador'); 
    let busqueda = document.querySelector('.buscar');
    let vacio = document.querySelector('main');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        if (datos.length == 0) {
            
            vacio.innerHTML += `<h3 > No se han encontrado busquedas para ${id} </h3> ` ;
            vacio.style.margin = "270px";
            let scc = document.querySelector('#seccion')
            scc.style.display = "none"; 
        } else if (busqueda.value == "" ){
            
            vacio.innerHTML += `<h3> Esta vacio el campo </h3> ` ;
            vacio.style.margin = "270px"
            let scc = document.querySelector('#seccion')
            scc.style.display = "none"; 
        } else if (busqueda.value.length <= 3) {
            vacio.innerHTML = `<h3> El campo debe ser mayor a 3 caracteres </h3>`
            vacio.style.margin = "270px"
          }else{
            this.submit();
        }

    })

})
       
    
.catch (function(error){
    console.log(error)
}) 


