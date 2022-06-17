let query = location.search;
let queryString = new URLSearchParams(query);
let agarrandolo = queryString.get('id');

const url = `https://api.allorigins.win/raw?url=https://api.deezer.com/artist/${agarrandolo}`;

fetch(url)
.then(function (response) {
    return response.json();
})
.then(function (artista) { 
    let artistaEtiqueta = document.querySelector('#detalleArtista');

    artistaEtiqueta.innerHTML += ` <article class="article1 detail-artist">
                            <a href="detail-track.html" class="sacardilineado">
                            <div class="contenedorfoto"> <img src="${artista.picture}" alt=""></div>
                            <h3>Name : ${artista.name}</h3>  
                            <h3> Number of Albums : ${artista.nb_album} </h3>
                            <ul class="listaAlbums">
                            </ul> 
                        </a>
                        </article>`

    
})

.catch(function (error) {
    console.log('Error:'+ error);
})

/* Albumes no hay entonces canciones de artistas que no funcionan */

let rutaArt = `https://api.deezer.com/artist/${agarrandolo}/albums`;
fetch(rutaArt)
.then(function (response) {
    return response.json();
})
.then(function (data) {
    console.log(data);
    let ulArtista = document.querySelector('.listaAlbums');
    for (let i = 0; i < 5; i++) {
       let tracks = data.data[i].title;
       console.log(tracks);
       ulArtista.innerHTML += `<li> ${tracks}</li>`
        
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
    } else {
        this.submit();
    }

}) 