
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

albums.innerHTML += `  <article class="largo" id="alarga">
            
<div class="contenedorfoto"><img src=" ${info.cover}" alt=""> </div> 
<ul >
<li>Album : ${info.title}</li>
<a href="detail-artist.html?id=${info.artist.id}" class="sacardilineado largo"><li> Arista : ${info.artist.name}</li>
<li> Genre : ${info.genres.data[0].name}</li>
<li> Release date : ${info.release_date} </a>
</ul 
<h3>Canciones</h3>

    <ul id="cancionesAlbum">
     
 </ul> 
</article> </article>`;

alarga.style.height = "500px";


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
     document.querySelector('#cancionesAlbum').innerHTML += ` <a href="detail-track.html?id=${data.tracks.data[i].id}" class="sacardilineado largo">  <li>${data.tracks.data[i].title_short}</li> </a>`;
 }
   
 })


/* Respuesta de busquedas -- funciona */


let form = document.querySelector('form'); 
let busqueda = document.querySelector('.buscar');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    if (busqueda.value == "" ) {
        let vacio = document.querySelector('main');
        vacio.innerHTML = `<h3 > Esta vacio el campo </h3> ` ;
        vacio.style.margin = "270px" 
    } else if (busqueda.value.length <= 3) {
        vacio.innerHTML = `<h3> El campo debe ser mayor a 3 caracteres </h3>`
        vacio.style.margin = "270px"
      } else {
        this.submit();
    }

}) 