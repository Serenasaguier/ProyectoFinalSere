/* CANCIONES funciona cambiado */

fetch('https://api.allorigins.win/raw?url=https://api.deezer.com/chart/0/tracks')
.then(function (response) {
  return response.json();
})
.then(function (data) {
  let info = data.data
  
  console.log(info);
  let songs = document.querySelector(".section1")
  for (let i = 0; i < 6; i++) {
    songs.innerHTML += ` <article  class="article1">
    <a href="detail-track.html?id=${info[i].id}" class="sacardilineado">
        <div class="contenedorfoto"><img src="${info[i].album.cover}" alt=""> </div>
        <h3 class="canciones">${ info[i].title_short}</h3>
        <h4>${ info[i].duration}</h4>
    </a>

</article> `
    
  }
})
.catch(function (error) {
  console.log('Error:' + error);
})

/*ALBUMES cambiado bien*/

let url = 'https://api.allorigins.win/raw?url=https://api.deezer.com/chart/0/albums ';
fetch(url)
.then(function (response) {
   return response.json();
})
.then(function(data) {
 let info = data;
 
 console.log(info.data);
let cantan = document.querySelector('.section2')

for (let i = 0; i < 6; i++) {
 cantan.innerHTML += `<article class="article2">
 <a href="detail-album.html?id=${info.data[i].id}" class="sacardilineado">
   <div class="contenedorfoto">  <img src="${info.data[i].cover}" alt=""></div>
       <h3> ${info.data[i].title}</h3>
       <h4>${info.data[i].artist.name}</h4>
   </a>
</article>`;
 
}


})
.catch(function (error) {
  console.log('El error fue:' + error)
})


/* ARTISTAS funciona cambiado */

fetch( `https://api.allorigins.win/raw?url=https://api.deezer.com/chart/artist` )
.then(function (response) {
    return response.json();
})
.then(function(data) {
  
  let info = data.tracks.data;
  
  console.log(info);
  let caract = document.querySelector(".section3")

  for (let i = 0; i < 6; i++) {
     
  caract.innerHTML += `<article class="article3">
  <a href="detail-artist.html?id= ${info[i].artist.id}" class="sacardilineado">
  <div class="contenedorfoto"> <img src="${info[i].artist.picture}" alt=""> </div>
    <h3>${info[i].artist.name}</h3>
      <h4>${info[i].album.title}</h4>
      </a>
   
</article>
`; 
    
  } /*     
     */

}).catch(function(error) {
  console.log(error);
})
 
/* Respuesta de busquedas -- No funciona */
/*let form = document.querySelector('form'); 
let claseInput = document.querySelector('search');
let claseHtres = document.querySelector('.respuesta');

if (claseInput.value == "") {
  claseHtres.innerText = 'No has buscado nada'
} else if (claseInput.value.lenght > 3){
  claseHtres.innerText = "Debes ingresar mas de 3 letras"
} else {
  this.Submit()
} */