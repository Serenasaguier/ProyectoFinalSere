
let query = location.search;
let queryString = new URLSearchParams(query);
let agarrandolo = queryString.get('id');

fetch(`https://api.allorigins.win/raw?url=https://api.deezer.com/track/${agarrandolo}`)
.then(function (response) {
    return response.json()
})
.then(function (data) {
    console.log(data);
    let capturo = document.querySelector('.section1');
        
        capturo.innerHTML += ` <article class="largo">
           
        <div class="contenedorfoto"> <img src="${data.artist.picture}" alt=""></div>
         <ul>
         <h3>${data.title}</h3>

         <a href="detail-artist.html?id=${data.artist.id}" class="sacardilineado largo"><li>${data.artist.name}</li> </a>
         <a href="detail-album.html?id=${data.album.id}" class="sacardilineado largo">
             <li>${data.album.title}</li> </a>
          </ul>
          <iframe title="deezer-widget" src="https://widget.deezer.com/widget/auto/track/${data.id}" width="40%" height="350" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write">
        </iframe>
         <div class="favoritos">
               <input type="Checkbox" name="favoritos" value="">
                <label for="">Agregar a favoritos</label>
          </div>
           <ul>
             <a href="./playlist.html" class=" sacardilineado largo">Ver mi playlist
           </a></ul>
     </article>`
        
})

.catch(function (error) {
    console.log(error);
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