
/* FUNCIONA */

let queryS = location.search;
let queryString = new URLSearchParams(queryS);
let agarrando = queryString.get('id');

const link = `https://api.allorigins.win/raw?url=https://api.deezer.com/album/${agarrando}` ;

fetch(link)
.then(function (response) {
    return response.json();
})
.then(function (data) {
    let info = data;
 
 console.log(info);
let albums = document.querySelector('.section1')

albums.innerHTML += `  <article class="largo" >
            
<div class="contenedorfoto"><img src=" ${info.cover}" alt=""> </div> 
<ul >
<li>Album : ${info.title}</li>
<a href="./detail-artist.html" class="sacardilineado largo" ><li> Arista : ${info.artist.name}</li> </a>
</ul 
<h3>Canciones</h3>
<a href="./detail-track.html" class="sacardilineado largo"> 
    <ul id="cancionesAlbum">
     
 </ul> 
</a>
</article> </article>`

}) 
.catch(function (error) {
    console.log("Error" + error)
})

/* Las canciones */
fetch(link)
.then(function (response) {
    return response.json();
})
.then(function (data) {
    let info = data;
 console.log(info);

 for (let i = 0; i <= 4; i++) {
     document.querySelector('#cancionesAlbum').innerHTML += `<li>${data.tracks.data[i].title_short}</li> `;
 }
   
 })


/* Respuesta de busquedas -- funciona */


let form = document.querySelector('form'); 
let busqueda = document.querySelector('.buscar');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    if (busqueda.value == "" || busqueda.value.length <= 2) {
        let vacio = document.querySelector('main');
        vacio.innerHTML = `<h3 > Esta vacio el campo o debe ser mayor a 2 caracteres </h3> ` ;
        vacio.style.margin = "270px" 
    } else {
        this.submit();
    }

}) 