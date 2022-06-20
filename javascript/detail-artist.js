let query = location.search;
let queryString = new URLSearchParams(query);
let agarrandolo = queryString.get('id');

const url = `https://api.allorigins.win/raw?url=https://api.deezer.com/artist/${agarrandolo}`;

fetch(url)
.then(function (response) {
    return response.json();
})
.then(function (data) { 
    let artistaEtiqueta = document.querySelector('#detalleArtista');

    artistaEtiqueta.innerHTML += ` <article class="article1 detail-artist largo">
                            <div class="contenedorfoto"> <img src="${data.picture}" alt=""></div>
                            <h3> Name : ${data.name}</h3> 
                            <ul class="listaAlbums">
                            </ul> 
                        </article>`

})

.catch(function (error) {
    console.log('Error:'+ error);
})

/* Albumes  */

let rutaArt = `https://api.allorigins.win/raw?url=https://api.deezer.com/artist/${agarrandolo}/albums`;
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
       ulArtista.innerHTML += ` <a href="detail-album.html?id=${data.data[i].id} class="sacardilineado" > <li class="lista" > ${tracks}</li> </a>`

    }
    
})
.catch(function (error) {
    console.log(error);
})


/* Respuesta de busquedas  */


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
      }else {
        this.submit();
    }

}) 