/* CANCIONES  */

fetch('https://api.allorigins.win/raw?url=https://api.deezer.com/chart/0/tracks')
.then(function (response) {
  return response.json();
})
.then(function (data) {
  let info = data.data;
  
  console.log(info);
  let songs = document.querySelector(".section1")
  for (let i = 0; i < 6; i++) {
    songs.innerHTML += `<article  class="article1">
    <a href="detail-track.html?id=${info[i].id}" class="sacardilineado">
        <div class="contenedorfoto"><img src="${info[i].album.cover}" alt=""> </div>
        <h3 class="canciones">${info[i].title_short}</h3>
        <h4> ${info[i].artist.name} </h4>
    </a>

</article> `
    
  }
})
.catch(function (error) {
  console.log('Error:' + error);
})

/*ALBUMES */

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


/* ARTISTAS  */

fetch(`https://api.allorigins.win/raw?url=https://api.deezer.com/chart`)
.then(function (response) {
    return response.json();
})
.then(function(data) {
  let info = data.tracks.data;
  
  console.log(info);
  let caract = document.querySelector(".section3")

  for (let i = 0; i < 6; i++) {
     
  caract.innerHTML += `<article class="article3">
  <a href="detail-artist.html?id=${info[i].id}" class="sacardilineado">
  <div class="contenedorfoto"> <img src="${info[i].artist.picture}" alt=""> </div>
    <h3>${info[i].artist.name}</h3>
    <h4> ${info[i].title} </h4>
      
      </a>
   
</article>
`; 
    
  } 

}).catch(function(error) {
  console.log(error);
})
 
/* Respuesta de busquedas */


let form = document.querySelector('form'); 
let busqueda = document.querySelector('.buscar');
let vacio = document.querySelector('main');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    if (busqueda.value == "" ) {
        vacio.innerHTML = `<h3 > Esta vacio el campo </h3> ` ;
        vacio.style.margin = "270px" 
        vacio.style.marginTop = "330px"
    } else if (busqueda.value.length <= 3) {
      vacio.innerHTML = `<h3> El campo debe ser mayor a 3 caracteres </h3>`
      vacio.style.margin = "270px"
      vacio.style.marginTop = "300px"
    }
    else {
        this.submit();
    }

}) 